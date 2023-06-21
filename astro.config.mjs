import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  outDir: './docs',
  // base:'astro-proyect',
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: 'file',
    assets: 'assests',
    assetsPrefix: '.'
  }
});