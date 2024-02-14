import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    server:{
      watch: {
        usePolling: true,
      },
    },
  },
  integrations: [tailwind()]
});