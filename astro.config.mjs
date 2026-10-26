import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://nairobiwebdevelopers.co.ke',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
