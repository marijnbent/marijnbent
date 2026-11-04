import type { APIRoute } from 'astro';
import { sitehub } from '../lib/sitehub';
export const prerender = false;
export const GET: APIRoute = async () => {
  try { return Response.json(await sitehub().marker(), { headers: { 'Cache-Control': 'no-store' } }); }
  catch { return Response.json({ error: 'Unavailable' }, { status: 503, headers: { 'Cache-Control': 'no-store', 'Retry-After': '60' } }); }
};
