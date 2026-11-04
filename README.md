# marijnbent.nl

Personal portfolio and Dutch AI and blockchain course pages. Built with Astro and TypeScript. Pages in this repo are prerendered. Guides come from Sitehub and render on demand under `/gidsen`.

```sh
npm ci
npm run dev
```

Development runs through Portless at https://marijnbent.localhost, with Astro bound to 127.0.0.1. The HTTPS proxy must be running.

```sh
npm run check
npm run build
npm run preview
```

`preview` runs the built server (`server.mjs`) through the same Portless URL. Stop development before starting preview. `npm start` runs it directly on `PORT` (default 3000).

Projects: `src/data/work.ts`. Courses: `src/data/courses.ts`. Contact: `src/data/profile.ts`. Public site layout: `src/layouts/SiteLayout.astro`. Legacy redirects and 410s: `src/lib/legacy.ts`.

## Sitehub

| Variable             | Value                                                                    |
| -------------------- | ------------------------------------------------------------------------ |
| `SITEHUB_URL`        | `https://hub.doewijs.nl`                                                 |
| `SITEHUB_SITE`       | `marijnbent`                                                             |
| `SITEHUB_SITE_TOKEN` | Site token from `site_token_rotate`, kept in the 1Password Agent vault    |
| `SITEHUB_CACHE_PATH` | Snapshot JSON path: `.sitehub/snapshot.json` locally, `/data/snapshot.json` in Docker |

Pass the token through the process environment only. Never commit it. The site route prefix `/gidsen` must match `routePrefix` in Sitehub. Signed drafts render at `/_sitehub/preview/<token>`.

## Deploy

Dokploy builds the `Dockerfile`. It serves port 3000 as a non-root user and checks `/health`. Set the variables above and mount `/data` as a persistent volume. `server.mjs` redirects `www.marijnbent.nl` to the apex, sets `nosniff` and marks every other non-production host `noindex`.

```sh
curl -sI https://www.marijnbent.nl/   # 301 to https://marijnbent.nl/
curl -s https://marijnbent.nl/health  # {"ok":true,"site":"marijnbent"}
curl -s https://marijnbent.nl/sitehub.json
curl -s https://marijnbent.nl/sitemap-gidsen.xml
```

After a publish, run `publish_verify` in Sitehub.
