import { createServer } from 'node:http';

const origin = 'https://marijnbent.nl';
const host = new URL(origin).hostname;

process.env.ASTRO_NODE_AUTOSTART = 'disabled';
const { handler } = await import('./dist/server/entry.mjs');

createServer((req, res) => {
  let hostname;
  try {
    hostname = new URL(`http://${req.headers.host ?? ''}`).hostname;
  } catch {
    res.writeHead(400).end();
    return;
  }
  res.setHeader('X-Content-Type-Options', 'nosniff');
  if (hostname === `www.${host}`) {
    res.writeHead(301, { Location: `${origin}${req.url?.startsWith('/') ? req.url : '/'}` }).end();
    return;
  }
  if (hostname !== host) res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  handler(req, res);
}).listen(Number(process.env.PORT ?? 3000), process.env.HOST ?? '127.0.0.1');
