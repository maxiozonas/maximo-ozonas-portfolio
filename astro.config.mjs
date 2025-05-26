// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    includeFiles: ['.env'],
    webAnalytics: { enabled: true },
    edgeMiddleware: false // Explicitly disable if not using edge for API routes
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});