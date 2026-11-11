import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served at https://portfolioframe.com/blog/ (copied into the landing page's dist/blog at build time)
export default defineConfig({
  site: 'https://portfolioframe.com',
  base: '/blog',
  // Live URLs have no trailing slash (wrangler.jsonc drop-trailing-slash), so match it here
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // match the no-trailing-slash live URLs (the blog index would otherwise be /blog/)
      serialize: (item) => ({ ...item, url: item.url.replace(/\/+$/, '') }),
    }),
  ],
});
