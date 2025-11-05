// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://alcxpr.dev',
  trailingSlash: 'ignore',
  build: {
    format: 'file',
  },
});
