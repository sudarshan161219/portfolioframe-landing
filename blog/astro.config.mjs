import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served at https://portfolioframe.com/blog/ (copied into the landing page's dist/blog at build time)
export default defineConfig({
  site: 'https://portfolioframe.com',
  base: '/blog',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
