import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://izmirmutfakbanyo.com.tr",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory"
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404/'),
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date()
    })
  ]
});
