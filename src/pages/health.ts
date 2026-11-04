import type { APIRoute } from 'astro';
export const prerender = false;
export const GET: APIRoute = () => Response.json({ ok: true, site: 'marijnbent' }, { headers: { 'Cache-Control': 'no-store' } });
