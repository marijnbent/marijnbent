import { SiteClient, expandComponents, escapeHtml, type Article, type Business, type Snapshot } from '@sitehub/site-client';
import { profile } from '../data/profile';

export const guidesPrefix = '/gidsen';

let client: SiteClient | undefined;

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name}`);
  return value;
}

export function sitehub(): SiteClient {
  return (client ??= new SiteClient({
    hubUrl: required('SITEHUB_URL'),
    site: required('SITEHUB_SITE'),
    token: required('SITEHUB_SITE_TOKEN'),
    cachePath: required('SITEHUB_CACHE_PATH'),
  }).start());
}

export const guides = (snapshot: Snapshot): Article[] =>
  snapshot.articles
    .filter(article => article.meta.route.startsWith(`${guidesPrefix}/`))
    .toSorted((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const guideUrl = (route: string) => new URL(route, profile.website).href;

export function renderGuide(article: Article, businesses: Business[]): Promise<string> {
  return expandComponents(article.html, {
    'x-business-card': attrs => {
      const business = businesses.find(item => item.slug === attrs.business);
      if (!business) throw new Error('Referenced business missing');
      return `<aside${attrs.id ? ` id="${escapeHtml(attrs.id)}"` : ''}><h3>${escapeHtml(business.name)}</h3><dl>${business.facts.map(fact => `<dt>${escapeHtml(fact.key)}</dt><dd>${escapeHtml(fact.value)} <a href="${escapeHtml(fact.sourceUrl)}" rel="noreferrer">Bron</a></dd>`).join('')}</dl></aside>`;
    },
  });
}
