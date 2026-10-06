// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Canonical production URL — used for absolute Open Graph / canonical URLs.
  site: 'https://levgerasimov.com',
  // Served from the root of a custom domain, so no sub-path base is needed.
  base: '/',
  // Keep URLs as-is (e.g. /files/report.pdf) — matches the old static site.
  trailingSlash: 'ignore',
  build: {
    // Inline small stylesheets to avoid a render-blocking request, like the original single file.
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      // With Vite's default (older Safari) CSS target, the minifier collapses
      // `backdrop-filter` + `-webkit-backdrop-filter` into the prefixed one only,
      // which silently disables the nav blur in Chrome/Firefox. A modern target keeps both.
      cssTarget: ['chrome111', 'edge111', 'firefox114', 'safari16.4'],
    },
  },
});
