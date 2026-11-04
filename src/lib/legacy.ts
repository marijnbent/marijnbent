const redirects: [string[], string][] = [
  [['/diensten/', '/webshop/', '/cms/'], 'https://studiozoek.nl/website-laten-maken-zzp'],
  [['/webhosting/'], 'https://studiozoek.nl/pakketten'],
  [['/portfolio/', '/portfolios/', '/referenties/', '/support/'], 'https://studiozoek.nl/'],
  [['/belafspraak/'], 'https://studiozoek.nl/belafspraak'],
  [['/vibescribe/'], '/ollie/'],
  [['/parkside-fans/'], '/yellow-store/'],
];

const gone = [
  '/how-to-use-laravel-nova-without-authenticationroutes/',
  '/connect-the-blockchain-with-the-internet/',
  '/feed/',
  '/wp-admin/',
  '/wp-content/',
  '/wp-login.php',
  '/sitemap_index.xml',
  '/hiredd/',
  '/i-want-to-work-for/',
  '/ik-wil-werken-voor/',
  '/applications/',
];

const matches = (path: string, pattern: string) => (pattern.endsWith('/') ? path.startsWith(pattern) : path === pattern);

export const legacyRedirect = (path: string): string | undefined =>
  redirects.find(([patterns]) => patterns.some(pattern => matches(path.toLowerCase(), pattern)))?.[1];

export const isGone = (path: string): boolean => gone.some(pattern => matches(path.toLowerCase(), pattern));
