import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// `vite dev` has no serverless runtime, so the /api/* handlers that Vercel and
// Netlify run in production are mounted as dev middleware instead. Only the
// routes listed here are wired up; add new ones as they are created.
const API_ROUTES: Record<string, string> = {
  '/api/careconsole': './api/careconsole.js',
  '/api/booking-webhook': './api/booking-webhook.js',
};

const devApiRoutes = (mode: string): Plugin => ({
  name: 'dev-api-routes',
  apply: 'serve',
  configureServer(server) {
    // Server-only env (no VITE_ prefix), so it never reaches the client bundle.
    Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

    server.middlewares.use(async (req, res, next) => {
      const route = req.url?.split('?')[0] ?? '';
      const modulePath = API_ROUTES[route];
      if (!modulePath) return next();

      try {
        const chunks: Buffer[] = [];
        for await (const chunk of req) chunks.push(chunk as Buffer);
        // The serverless handlers expect req.body the way Vercel provides it.
        (req as typeof req & { body?: string }).body = Buffer.concat(chunks).toString('utf8');

        const { default: handler } = await server.ssrLoadModule(modulePath);
        await handler(req, res);
      } catch (error) {
        server.config.logger.error(`[dev-api] ${route} failed: ${String(error)}`);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ ok: false, error: 'Dev API handler failed' }));
      }
    });
  },
});

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
export default defineConfig(({ mode }) => ({
  plugins: [react(), devApiRoutes(mode)],
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
}));
