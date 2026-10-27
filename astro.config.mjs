import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import react from '@astrojs/react';

const REDIRECT_PATHS = [
  '/404',
  '/mutfak-dolabi/',
  '/mutfak-dolabi-fiyatlari/',
  '/mutfak-tadilati/',
  '/banyo-tadilati/',
  '/ev-tadilati/',
  '/anahtar-teslim-tadilat/',
  '/hazir-mutfak/'
];

export default defineConfig({
  site: "https://izmirmutfakbanyo.com.tr",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory"
  },
  integrations: [sitemap({
    filter: (page) => !REDIRECT_PATHS.some(redirectPath => page.includes(redirectPath)),
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date()
  }), react()]
});