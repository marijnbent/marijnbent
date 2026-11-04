import { SiteClient, expandComponents, escapeHtml, type Article, type Snapshot } from '@sitehub/site-client';
let client: SiteClient | undefined;
function required(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name}`);
  return value;
}
export function sitehub() {
  return client ??= new SiteClient({ hubUrl: required('SITEHUB_URL'), site: required('SITEHUB_SITE'), token: required('SITEHUB_SITE_TOKEN'), cachePath: required('SITEHUB_CACHE_PATH') }).start();
}
export function articles(snapshot: Snapshot) {
  return snapshot.articles.filter(article => /^\/gidsen\/[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.meta.route)).toSorted((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
export function renderArticle(article: Article, snapshot: Snapshot) {
  return expandComponents(article.html, {
    'x-business-card': attrs => {
      const business = snapshot.businesses.find(item => item.slug === attrs.business);
      if (!business) throw new Error('Referenced business missing');
      return `<aside${attrs.id ? ` id="${escapeHtml(attrs.id)}"` : ''}><h2>${escapeHtml(business.name)}</h2><dl>${business.facts.map(fact => `<dt>${escapeHtml(fact.key)}</dt><dd>${escapeHtml(fact.value)} <a href="${escapeHtml(fact.sourceUrl)}">Bron</a></dd>`).join('')}</dl></aside>`;
    },
  });
}
