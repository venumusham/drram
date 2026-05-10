import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
//
// The production build is a regular Vite SPA bundle. After `vite build`,
// `scripts/prerender.mjs` boots `vite preview`, scrapes each route via
// Puppeteer, and writes `dist/<route>/index.html` so Google sees fully
// rendered HTML (and React hydrates over it on the client).
//
//   npm run build       => vite build + prerender (production)
//   npm run build:spa   => vite build only (fast iteration; skips prerender)
//   npm run prerender   => prerender only (assumes dist/ already built)
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
  // Preview server port — must match scripts/prerender.mjs (PREVIEW_PORT).
  preview: {
    port: 4173,
    strictPort: true,
  },
});
