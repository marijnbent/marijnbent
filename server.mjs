import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
process.env.ASTRO_NODE_AUTOSTART = 'disabled';
const { handler } = await import('./dist/server/entry.mjs');
const gone = ['/how-to-use-laravel-nova-without-authenticationroutes/', '/connect-the-blockchain-with-the-internet/', '/feed/', '/wp-admin/', '/wp-content/', '/hiredd/', '/i-want-to-work-for/', '/ik-wil-werken-voor/', '/applications/'];
const redirects = [
  [['/diensten/', '/webshop/', '/cms/'], 'https://studiozoek.nl/website-laten-maken-zzp'],
  [['/webhosting/'], 'https://studiozoek.nl/pakketten'],
  [['/portfolio/', '/portfolios/', '/referenties/', '/support/'], 'https://studiozoek.nl/'],
  [['/belafspraak/'], 'https://studiozoek.nl/belafspraak'],
  [['/vibescribe/'], '/ollie/'],
  [['/parkside-fans/'], '/yellow-store/'],
];
const missing = await readFile(new URL('./dist/client/404.html', import.meta.url));
const server = createServer((request, response) => {
  response.setHeader('X-Content-Type-Options', 'nosniff');
  let url;
  try { url = new URL(request.url, `http://${request.headers.host}`); decodeURI(url.pathname); }
  catch { response.writeHead(400).end(); return; }
  const redirect = url.hostname === 'www.marijnbent.nl'
    ? `https://marijnbent.nl${url.pathname}${url.search}`
    : redirects.find(([prefixes]) => prefixes.some(prefix => url.pathname.startsWith(prefix)))?.[1];
  if (redirect) { response.writeHead(301, { Location: redirect }).end(); return; }
  if (url.pathname === '/health') { response.writeHead(200).end(); return; }
  if (gone.some(prefix => url.pathname.startsWith(prefix)) || ['/wp-login.php', '/sitemap_index.xml'].includes(url.pathname)) {
    response.writeHead(410, { 'Content-Type': 'text/html; charset=utf-8', 'X-Robots-Tag': 'noindex' });
    response.end(request.method === 'HEAD' ? undefined : missing);
    return;
  }
  handler(request, response);
});
server.listen(Number(process.env.PORT ?? 3000), process.env.HOST ?? '127.0.0.1', () => {
  const address = server.address();
  console.log(`Listening on ${typeof address === 'object' ? address.port : address}`);
});
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => { server.close(); server.closeIdleConnections(); });
