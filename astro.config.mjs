// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://marijnbent.nl',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap({
    filter: (page) => !/^\/(i-want-to-work-for|ik-wil-werken-voor|applications)(\/|$)/.test(new URL(page).pathname)
  })]
});
