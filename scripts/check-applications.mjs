import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { Script } from 'node:vm';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');
const read = path => readFileSync(resolve(dist, path), 'utf8');
const sitemap = readdirSync(dist).filter(path => /^sitemap.*\.xml$/.test(path)).map(read).join('\n');
const configs = readdirSync(resolve(root, 'src/data/applications')).filter(name => name.endsWith('-documents.json'));
const home = read('index.html');
const robots = read('robots.txt');
const headers = read('_headers');
let count = 0;
assert(!/Disallow:\s*\/(?:i-want-to-work-for|ik-wil-werken-voor)/i.test(robots), 'Crawlers must be allowed to read noindex');
assert(!/(?:i-want-to-work-for|ik-wil-werken-voor)/.test(sitemap), 'Application page leaked into sitemap');
assert(!/(?:i-want-to-work-for|ik-wil-werken-voor)/.test(home), 'Application page linked from the homepage');
assert(!home.includes('Building with AI'), 'General homepage still foregrounds AI usage');
for (const name of configs) {
  const config = JSON.parse(readFileSync(resolve(root, 'src/data/applications', name), 'utf8'));
  const url = new URL(config.applicationUrl);
  const html = read(`${url.pathname}/index.html`.replace(/^\//, ''));
  assert(html.includes(`<html lang="${config.locale}">`), `${name}: language`);
  assert(/<meta name="robots" content="noindex"/.test(html), `${name}: noindex`);
  assert(html.includes(`<link rel="canonical" href="${url.href}"`), `${name}: canonical`);
  assert(html.includes(config.company) && html.includes(config.role), `${name}: company and role missing`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size, `${name}: duplicate IDs`);
  for (const [, hash] of html.matchAll(/href="#([^"]+)"/g)) assert(ids.includes(hash), `${name}: missing anchor ${hash}`);
  for (const [, asset] of html.matchAll(/(?:src|href)="(\/[^"#?]*)"/g)) {
    const path = resolve(dist, asset.slice(1));
    assert(path.startsWith(dist+'/') && (existsSync(path) || existsSync(resolve(path, 'index.html'))), `${name}: missing local asset ${asset}`);
  }
  for (const [, script] of html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)) new Script(script);
  assert(html.includes('data-stop-motion'), `${name}: stop-motion frames missing`);
  assert(html.includes('tel:+31681053848'), `${name}: phone link missing`);
  assert(html.includes('mailto:marijn@marijnbent.nl'), `${name}: updated email missing`);
  assert(!html.includes('A personal application for') && !html.includes('project-index'), `${name}: removed labels returned`);
  for (const filename of [config.cvFilename, config.applicationFilename]) {
    const path = `applications/${config.directory}/${filename}`;
    assert(html.includes(`/${path}`), `${name}: document not linked`);
    assert(readFileSync(resolve(dist, path)).subarray(0, 5).equals(Buffer.from('%PDF-')), `${name}: invalid PDF`);
  }
  count++;
}
assert(/\/applications\/\*\s+X-Robots-Tag: noindex/.test(headers), 'PDF header rule missing');
const css = readdirSync(resolve(dist, '_astro')).filter(path => path.endsWith('.css')).map(path => read(`_astro/${path}`)).join('\n');
assert(css.includes('prefers-reduced-motion'), 'Reduced-motion behavior missing');
console.log(`Verified ${count} application: metadata, routes, anchors, assets, PDFs, script syntax and indexing rules.`);
console.log('Browser behavior and deployed HTTP headers require separate verification.');
