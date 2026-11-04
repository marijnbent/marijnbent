import type { APIRoute } from 'astro';
import { escapeHtml } from '@sitehub/site-client';
import { guides, guideUrl, guidesPrefix, sitehub } from '../lib/sitehub';
export const prerender = false;
export const GET: APIRoute = async () => {
  try {
    const published = guides(await sitehub().getSnapshot());
    const urls = [
      ...(published.length ? [{ route: guidesPrefix, lastmod: undefined }] : []),
      ...published.map(guide => ({ route: guide.meta.route, lastmod: guide.modifiedAt ?? guide.updatedAt })),
    ];
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(({ route, lastmod }) => `<url><loc>${escapeHtml(guideUrl(route))}</loc>${lastmod ? `<lastmod>${escapeHtml(lastmod)}</lastmod>` : ''}</url>`).join('')}</urlset>`,
      { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=300' } },
    );
  } catch {
    return new Response('Sitemap tijdelijk niet beschikbaar', { status: 503, headers: { 'Retry-After': '60', 'Cache-Control': 'no-store' } });
  }
};
