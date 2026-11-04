// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://marijnbent.nl',

  adapter: node({ mode: 'standalone' }),

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Schibsted Grotesk',
      cssVariable: '--font-sans',
      weights: ['400 800'],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif']
    },
    {
      provider: fontProviders.google(),
      name: 'Caveat',
      cssVariable: '--font-hand',
      weights: [500],
      styles: ['normal'],
      fallbacks: ['Caveat fallback', 'cursive'],
      optimizedFallbacks: false
    }
  ],

  integrations: [
    sitemap({ customSitemaps: ['https://marijnbent.nl/sitemap-gidsen.xml'] }),
    {
      name: 'sitehub-preview',
      hooks: {
        'astro:config:setup': ({ injectRoute }) =>
          injectRoute({ pattern: '/_sitehub/preview/[token]', entrypoint: './src/preview.astro', prerender: false })
      }
    }
  ]
});
