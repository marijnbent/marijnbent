import type { APIRoute } from 'astro';
import { escapeHtml } from '@sitehub/site-client';
import { work } from '../data/work';
import { courses } from '../data/courses';
import { sitehub, articles } from '../lib/sitehub';
export const prerender = false;
export const GET: APIRoute = async () => {
  try {
    const snapshot = await sitehub().getSnapshot();
    const routes = new Set(['/', '/cursussen/', '/cursussen/ai-geletterdheid/', '/gidsen/', ...work.map(project => project.href), ...courses.map(course => `/cursussen/${course.slug}/`), ...articles(snapshot).map(article => `${article.meta.route}/`)]);
    return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[...routes].map(route => `<url><loc>${escapeHtml(new URL(route, 'https://marijnbent.nl').href)}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=60' } });
  } catch {
    return new Response('Sitemap tijdelijk niet beschikbaar', { status: 503, headers: { 'Retry-After': '60', 'Cache-Control': 'no-store' } });
  }
};
