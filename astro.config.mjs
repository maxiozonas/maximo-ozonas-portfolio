// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
    includeFiles: [".env", ".env.production"]
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});