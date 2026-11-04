# marijnbent.nl

Personal portfolio and Dutch AI and blockchain course pages. Astro prerenders the existing pages; Sitehub guides, their sitemap and the publication marker run on Node.

```sh
npm ci
npm run check
npm run build
npm test
npm run dev
npm run preview
```

Development and built previews run through Portless with the application bound to 127.0.0.1. Stop a preview before rebuilding. Production runs `npm start`.

Required runtime configuration: `SITEHUB_URL=https://hub.doewijs.nl`, `SITEHUB_SITE=marijnbent`, `SITEHUB_CACHE_PATH=/data/sitehub-snapshot.json`, and `SITEHUB_SITE_TOKEN` from the site's reader credential. Persist `/data`. Never commit the token or snapshots. Existing valid snapshots are served while refreshing; cold failures return retryable 503s. `/health` remains independent of Sitehub.

For the first deployment, change the existing active Dokploy application from Railpack to the Dockerfile, route both public domains to port 3000, mount a dedicated persistent volume at `/data`, and supply the four required settings. The retired application must remain untouched. Verify both domains, `/health`, `/sitehub.json`, `/gidsen/`, `/sitemap-index.xml`, `/sitemap-0.xml`, a missing guide and the legacy redirects. Publish no articles and change no schedules during this integration.

Projects: `src/data/work.ts`. Courses: `src/data/courses.ts`. Contact: `src/data/profile.ts`. Public layout: `src/layouts/SiteLayout.astro`. Managed articles live only in Sitehub under `/gidsen/<slug>`. The Node entrypoint preserves the former Caddy redirects and 410 responses. Cloudflare supplies edge compression.
