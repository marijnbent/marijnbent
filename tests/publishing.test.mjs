import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer, request as httpRequest } from 'node:http';
import { createHash } from 'node:crypto';
import { mkdtemp, writeFile, rm, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawn } from 'node:child_process';
import { once } from 'node:events';

const article = {
  id: 'fixture', city: null, revision: 'fixture', digest: 'fixture', html: '<h2>Voorbeeld</h2><p>Een gecontroleerd testartikel.</p>',
  meta: { title: 'Testgids', description: 'Een beschrijving voor de test.', route: '/gidsen/testgids' },
  sources: [{ key: 'fixture', url: 'https://example.com/bron', title: 'Testbron', checkedAt: '2026-11-04' }],
  media: [], publishedAt: '2026-11-03', updatedAt: '2026-11-04',
};
const body = { articles: [article], businesses: [] };
const snapshot = { id: 'fixture', site: 'marijnbent', digest: createHash('sha256').update(JSON.stringify(body)).digest('hex'), ...body, createdAt: '2026-11-04' };
async function application(hubUrl, cachePath) {
  const child = spawn(process.execPath, ['server.mjs'], {
    env: { ...process.env, HOST: '127.0.0.1', PORT: '0', SITEHUB_URL: hubUrl, SITEHUB_SITE: 'marijnbent', SITEHUB_SITE_TOKEN: 'fixture', SITEHUB_CACHE_PATH: cachePath },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  let log = '';
  child.stderr.on('data', value => { log += value; });
  const origin = await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => { child.kill(); reject(new Error(`Startup timed out: ${log}`)); }, 10000);
    child.once('exit', code => { clearTimeout(timeout); reject(new Error(`Startup failed (${code}): ${log}`)); });
    child.stdout.on('data', value => {
      const match = value.toString().match(/Listening on (\d+)/);
      if (match) { clearTimeout(timeout); resolve(`http://127.0.0.1:${match[1]}`); }
    });
  });
  return { origin, async close() { const exited = once(child, 'exit'); child.kill('SIGTERM'); await exited; } };
}

test('built site supports publication, signed previews, legacy URLs and offline recovery', async t => {
  const directory = await mkdtemp(join(tmpdir(), 'marijn-publishing-'));
  const hub = createServer((request, response) => {
    assert.equal(request.headers.authorization, 'Bearer fixture');
    if (request.url.endsWith('/preview/expired')) { response.writeHead(401).end(); return; }
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(request.url.includes('/preview/') ? { article, businesses: [] } : request.url.endsWith('/version') ? { id: snapshot.id, digest: snapshot.digest } : snapshot));
  });
  hub.listen(0, '127.0.0.1');
  await once(hub, 'listening');
  const hubUrl = `http://127.0.0.1:${hub.address().port}`;
  const cachePath = join(directory, 'snapshot.json');
  let app;
  try {
    app = await application(hubUrl, cachePath);
    await t.test('existing pages stay prebuilt and legacy redirect/status behavior stays intact', async () => {
      assert.ok((await readdir('dist/client')).includes('index.html'));
      for (const path of ['/', '/ollie/', '/cursussen/', '/cursussen/ai-geletterdheid/']) assert.equal((await fetch(app.origin + path)).status, 200, path);
      for (const [path, target] of [['/diensten/oud', 'https://studiozoek.nl/website-laten-maken-zzp'], ['/webhosting/oud', 'https://studiozoek.nl/pakketten'], ['/portfolio/oud', 'https://studiozoek.nl/'], ['/belafspraak/oud', 'https://studiozoek.nl/belafspraak'], ['/vibescribe/oud', '/ollie/'], ['/parkside-fans/oud', '/yellow-store/']]) {
        const response = await fetch(app.origin + path, { redirect: 'manual' });
        assert.equal(response.status, 301); assert.equal(response.headers.get('Location'), target);
      }
      const www = await new Promise((resolve, reject) => {
        const request = httpRequest(app.origin + '/?test=1', { headers: { Host: 'www.marijnbent.nl' } }, response => { response.resume(); resolve(response); });
        request.on('error', reject); request.end();
      });
      assert.equal(www.statusCode, 301);
      assert.equal(www.headers.location, 'https://marijnbent.nl/?test=1');
      assert.equal((await fetch(app.origin + '/applications/old')).status, 410);
      assert.equal((await fetch(app.origin + '/page-does-not-exist')).status, 404);
    });
    await t.test('guides, marker, sitemap and signed previews use the same snapshot', async () => {
      const marker = await fetch(app.origin + '/sitehub.json');
      assert.equal(marker.status, 200); assert.deepEqual(await marker.json(), { id: snapshot.id, digest: snapshot.digest });
      const guide = await fetch(app.origin + '/gidsen/testgids/');
      assert.equal(guide.status, 200);
      const html = await guide.text();
      assert.match(html, /rel="canonical" href="https:\/\/marijnbent.nl\/gidsen\/testgids\/"/);
      assert.match(html, /content="article"/); assert.match(html, /dateModified/); assert.match(html, /Testbron/);
      assert.match(await (await fetch(app.origin + '/gidsen/')).text(), /Testgids/);
      const missing = await fetch(app.origin + '/gidsen/ontbreekt/');
      assert.equal(missing.status, 404); assert.match(await missing.text(), /noindex/);
      const sitemap = await fetch(app.origin + '/sitemap-0.xml');
      assert.equal(sitemap.status, 200); const xml = await sitemap.text();
      for (const route of ['/gidsen/testgids/', '/cursussen/ai-geletterdheid/', '/ollie/']) assert.ok(xml.includes(`https://marijnbent.nl${route}`));
      const preview = await fetch(app.origin + '/_sitehub/preview/valid');
      assert.equal(preview.status, 200); assert.equal(preview.headers.get('Cache-Control'), 'no-store');
      assert.match(preview.headers.get('X-Robots-Tag'), /noindex/);
      assert.equal(preview.headers.get('Referrer-Policy'), 'no-referrer');
      const previewHtml = await preview.text();
      assert.match(previewHtml, /Testgids/); assert.ok(!previewHtml.includes('analytics.cowsandbytes.com'));
      assert.equal((await fetch(app.origin + '/_sitehub/preview/expired')).status, 404);
    });
    await app.close(); app = undefined;
    await new Promise(resolve => hub.close(resolve));
    app = await application(hubUrl, cachePath);
    await t.test('a restart during a hub outage uses the persisted snapshot', async () => {
      assert.equal((await fetch(app.origin + '/gidsen/testgids/')).status, 200);
      assert.equal((await fetch(app.origin + '/sitemap-0.xml')).status, 200);
      assert.equal((await fetch(app.origin + '/health')).status, 200);
    });
    await app.close(); app = undefined;
    await writeFile(cachePath, 'invalid');
    app = await application(hubUrl, cachePath);
    await t.test('without a usable snapshot the guides and sitemap return retryable 503', async () => {
      for (const path of ['/gidsen/', '/gidsen/testgids/', '/sitemap-0.xml', '/sitehub.json']) {
        const response = await fetch(app.origin + path);
        assert.equal(response.status, 503, path); assert.equal(response.headers.get('Cache-Control'), 'no-store'); assert.equal(response.headers.get('Retry-After'), '60');
      }
      assert.equal((await fetch(app.origin + '/')).status, 200);
      assert.equal((await fetch(app.origin + '/health')).status, 200);
    });
  } finally {
    if (app) await app.close();
    hub.closeAllConnections(); hub.close();
    await rm(directory, { recursive: true, force: true });
  }
});
