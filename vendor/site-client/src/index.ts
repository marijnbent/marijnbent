import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
export type Business = {
  slug: string;
  name: string;
  city: string;
  facts: { key: string; value: string; sourceUrl: string; checkedAt: string }[];
};
export type Media = {
  id: string;
  url: string;
  rights:
    | { operatorReference: string }
    | {
        license: string;
        author: string;
        licenseUrl: string;
        sourcePage: string;
      };
};
export type Article = {
  id: string;
  city: string | null;
  revision: string;
  digest: string;
  html: string;
  meta: { title: string; description: string; route: string };
  sources: { key: string; url: string; title: string; checkedAt: string }[];
  media: Media[];
  publishedAt: string;
  updatedAt: string;
  modifiedAt?: string;
  checkedAt?: string;
};
export type Snapshot = {
  id: string;
  digest: string;
  site: string;
  articles: Article[];
  businesses: Business[];
  createdAt: string;
};
export type Preview = { article: Article; businesses: Business[] };
export type SiteClientConfig = {
  hubUrl: string;
  site: string;
  token: string;
  cachePath: string;
  seedPath?: string;
};
function object(v: unknown): v is Record<string, unknown> {
  return !!v && typeof v === "object" && !Array.isArray(v);
}
function media(v: unknown): v is Media {
  if (
    !object(v) ||
    typeof v.id !== "string" ||
    typeof v.url !== "string" ||
    !object(v.rights)
  )
    return false;
  const rights = v.rights;
  return (
    typeof rights.operatorReference === "string" ||
    ["license", "author", "licenseUrl", "sourcePage"].every(
      (k) => typeof rights[k] === "string",
    )
  );
}
function article(v: unknown): v is Article {
  return (
    object(v) &&
    typeof v.id === "string" &&
    typeof v.html === "string" &&
    typeof v.digest === "string" &&
    typeof v.revision === "string" &&
    (v.city === null || typeof v.city === "string") &&
    typeof v.publishedAt === "string" &&
    typeof v.updatedAt === "string" &&
    (v.modifiedAt === undefined || typeof v.modifiedAt === "string") &&
    (v.checkedAt === undefined || typeof v.checkedAt === "string") &&
    object(v.meta) &&
    ["title", "description", "route"].every(
      (k) => typeof (v.meta as Record<string, unknown>)[k] === "string",
    ) &&
    Array.isArray(v.sources) &&
    v.sources.every(
      (s: unknown) =>
        object(s) &&
        ["key", "url", "title", "checkedAt"].every(
          (k) => typeof s[k] === "string",
        ),
    ) &&
    Array.isArray(v.media) &&
    v.media.every(media)
  );
}
function businesses(v: unknown): v is Business[] {
  return (
    Array.isArray(v) &&
    v.every(
      (b) =>
        object(b) &&
        typeof b.slug === "string" &&
        typeof b.name === "string" &&
        typeof b.city === "string" &&
        Array.isArray(b.facts) &&
        b.facts.every(
          (f: unknown) =>
            object(f) &&
            ["key", "value", "sourceUrl", "checkedAt"].every(
              (k) => typeof f[k] === "string",
            ),
        ),
    )
  );
}
async function checked(value: unknown, site: string): Promise<Snapshot> {
  if (
    !object(value) ||
    value.site !== site ||
    typeof value.id !== "string" ||
    typeof value.digest !== "string" ||
    typeof value.createdAt !== "string" ||
    !Array.isArray(value.articles) ||
    !value.articles.every(article) ||
    !businesses(value.businesses)
  )
    throw new Error("Invalid snapshot");
  const digest = Array.from(
    new Uint8Array(
      await crypto.subtle.digest(
        "SHA-256",
        new TextEncoder().encode(
          JSON.stringify({
            articles: value.articles,
            businesses: value.businesses,
          }),
        ),
      ),
    ),
  )
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  if (
    value.digest !== digest ||
    new Set(value.articles.map((a) => a.meta.route)).size !==
      value.articles.length ||
    new Set(value.articles.map((a) => a.id)).size !== value.articles.length ||
    new Set(value.businesses.map((b) => b.slug)).size !==
      value.businesses.length
  )
    throw new Error("Invalid snapshot digest or routes");
  return value as Snapshot;
}
export class SiteClient {
  private snapshot: Snapshot | null = null;
  private nextPoll = 0;
  private initialized: Promise<void> | null = null;
  private inFlight: Promise<Snapshot> | null = null;
  private timer: ReturnType<typeof setInterval> | null = null;
  constructor(readonly config: SiteClientConfig) {
    if (
      new URL(config.hubUrl).origin !== config.hubUrl ||
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(config.site) ||
      !config.token ||
      !config.cachePath
    )
      throw new Error("Invalid site configuration");
  }
  start() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.nextPoll = 0;
        void this.getSnapshot().catch(() => {});
      }, 60000);
      this.timer.unref();
    }
    return this;
  }
  close() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
  }
  async getSnapshot(): Promise<Snapshot> {
    this.initialized ??= this.loadCache();
    await this.initialized;
    if (this.snapshot && Date.now() < this.nextPoll) return this.snapshot;
    this.inFlight ??= this.refresh().finally(() => {
      this.inFlight = null;
    });
    if (this.snapshot) {
      void this.inFlight.catch(() => {});
      return this.snapshot;
    }
    return this.inFlight;
  }
  private async loadCache() {
    try {
      this.snapshot = await checked(
        JSON.parse(await readFile(this.config.cachePath, "utf8")),
        this.config.site,
      );
    } catch {}
    if (!this.snapshot && this.config.seedPath) {
      this.snapshot = await checked(
        JSON.parse(await readFile(this.config.seedPath, "utf8")),
        this.config.site,
      );
      await this.save(this.snapshot).catch(() => {});
    }
  }
  private async request(path: string) {
    const response = await fetch(
      `${this.config.hubUrl}/api/sites/${this.config.site}/${path}`,
      {
        headers: { Authorization: `Bearer ${this.config.token}` },
        redirect: "error",
        signal: AbortSignal.timeout(8000),
        cache: "no-store",
      },
    );
    if (!response.ok) throw new Error(`Sitehub returned ${response.status}`);
    return response.json() as Promise<unknown>;
  }
  private async refresh() {
    try {
      const marker = await this.request("snapshot/version");
      if (
        !object(marker) ||
        typeof marker.id !== "string" ||
        typeof marker.digest !== "string"
      )
        throw new Error("Invalid version marker");
      if (
        !this.snapshot ||
        marker.id !== this.snapshot.id ||
        marker.digest !== this.snapshot.digest
      ) {
        const snapshot = await checked(
          await this.request("snapshot"),
          this.config.site,
        );
        await this.save(snapshot);
        this.snapshot = snapshot;
      }
    } catch (error) {
      if (!this.snapshot) throw error;
    }
    this.nextPoll = Date.now() + 60000;
    return this.snapshot;
  }
  private async save(snapshot: Snapshot) {
    await mkdir(dirname(this.config.cachePath), { recursive: true });
    const path = `${this.config.cachePath}.${crypto.randomUUID()}.tmp`;
    await writeFile(path, JSON.stringify(snapshot), { mode: 0o600 });
    await rename(path, this.config.cachePath);
  }
  async marker() {
    await this.getSnapshot();
    const { id, digest } = (await this.inFlight) ?? this.snapshot!;
    return { id, digest };
  }
  async preview(token: string): Promise<Preview> {
    const value = await this.request(`preview/${encodeURIComponent(token)}`);
    if (
      !object(value) ||
      !article(value.article) ||
      !businesses(value.businesses)
    )
      throw new Error("Invalid preview");
    return value as Preview;
  }
}
export const escapeHtml = (s: string) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
export type ComponentHandler = (
  attributes: Readonly<Record<string, string>>,
  children: string,
) => string | Promise<string>;
function decode(s: string) {
  return s.replace(
    /&(amp|lt|gt|quot|apos|#39|#x[0-9a-f]+|#[0-9]+);/gi,
    (entity, key: string) => {
      const values: Record<string, string> = {
        amp: "&",
        lt: "<",
        gt: ">",
        quot: '"',
        apos: "'",
        "#39": "'",
      };
      if (values[key]) return values[key];
      const n = key.startsWith("#x")
        ? parseInt(key.slice(2), 16)
        : Number(key.slice(1));
      return n > 0 && n <= 0x10ffff ? String.fromCodePoint(n) : entity;
    },
  );
}
export async function expandComponents(
  html: string,
  handlers: Readonly<Record<string, ComponentHandler>>,
) {
  const pattern =
    /<(x-[a-z][a-z0-9-]*)\b((?:"[^"]*"|[^">])*)>((?:(?!<x-)[\s\S])*?)<\/\1>/g;
  for (let depth = 0; depth < 100; depth++) {
    const matches = [...html.matchAll(pattern)];
    if (!matches.length) {
      if (/<x-[a-z]/.test(html)) throw new Error("Unresolved custom element");
      return html;
    }
    for (const match of matches.reverse()) {
      const name = match[1]!,
        handler = handlers[name];
      if (!handler) throw new Error(`Missing component handler ${name}`);
      const attrs: Record<string, string> = {};
      for (const a of match[2]!.matchAll(/([a-z][a-z0-9-]*)="([^"]*)"/g))
        attrs[a[1]!] = decode(a[2]!);
      const replacement = await handler(attrs, match[3]!);
      html =
        html.slice(0, match.index) +
        replacement +
        html.slice(match.index! + match[0].length);
    }
  }
  throw new Error("Component nesting limit exceeded");
}
