import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  outDir: './docs',
  // base:'astro-proyect',
  build: {
    format: 'file',
    assets: 'assests',
    assetsPrefix: '.'
  }
});