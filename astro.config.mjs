// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://marijnbent.nl',

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

  integrations: [sitemap({
    filter: (page) => !/^\/(i-want-to-work-for|ik-wil-werken-voor|applications)(\/|$)/.test(new URL(page).pathname)
  })]
});
