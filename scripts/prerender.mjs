/**
 * Static prerender for SEO.
 *
 * Strategy:
 *   1. Boot `vite preview` on a local port to serve `dist/` (the SPA bundle)
 *   2. For each route in ROUTES, use Puppeteer to load it, wait for content,
 *      and capture the fully-rendered HTML (including react-helmet-async meta).
 *   3. Write each HTML file to `dist/<route>/index.html`
 *   4. Tear down preview server.
 *
 * After this script runs, your hosting (Netlify/Vercel/Cloudflare/Apache) will
 * serve the prerendered HTML for first paint, while React hydrates over it.
 *
 * Why we still need `_redirects` + `index.html` fallback: any route NOT in this
 * list (e.g., 404s, future routes) will fall back to client-side rendering.
 *
 * Run via:  npm run build  (after `vite build`)
 */

import { spawn } from 'node:child_process';
import { mkdir, writeFile, readFile, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';

// Routes from src/App.tsx — keep in sync.
const ROUTES = [
  '/',
  '/services',
  '/services/facelift',
  '/services/body-contouring',
  '/services/breast-procedures',
  '/services/reconstructive',
  '/about',
  '/faq',
  '/contact',
  '/plastic-surgeon-hyderabad',
  '/plastic-surgery-kondapur',
  '/cosmetic-surgeon-madhapur',
  '/plastic-surgeon-gachibowli',
  '/plastic-surgeon-hitech-city',
  '/gynecomastia',
  '/stapler-circumcision-hyderabad',
  // Money pages (Step 6)
  '/rhinoplasty-hyderabad',
  '/liposuction-hyderabad',
  '/facelift-hyderabad',
  '/breast-augmentation-hyderabad',
  '/tummy-tuck-hyderabad',
  '/lipoma-removal-hyderabad',
  '/earlobe-repair-kondapur',
  // Medical tourism (Step 7)
  '/medical-tourism-india',
  // Blog (Step 7)
  '/blog',
  '/blog/gynecomastia-surgery-cost-hyderabad-2026-guide',
  '/blog/gynecomastia-recovery-timeline-hyderabad',
  '/blog/laser-liposuction-in-hyderabad--a-guide-to-idea-clinics-kondapur',
  '/blog/revitalize-your-confidence--discover-the-art-of-cosmetic-surgery',
  '/blog/lipomas-and-plastic-surgery--exploring-treatment-options-and-considerations',
  '/blog/goodbye-gynecomastia--how-a-skilled-plastic-surgeon-can-help',
  '/blog/the-ultimate-guide-to-nose-rhinoplasty--everything-you-need-to-know',
  '/blog/reclaiming-your-confidence--the-power-of-a-tummy-tuck',
  '/blog/enhancing-confidence--the-ultimate-guide-to-breast-implant-surgery',
  '/blog/navigating-advanced-lymphedema--understanding-treatment-options-and-support',
  '/blog/restoring-hope--the-power-of-plastic-surgery-reconstruction-for-diabetic-foot',
  '/blog/revolutionizing-skin-repair--the-science-of-skin-grafting',
  '/blog/the-evolution-of-plastic-surgery-techniques--insights-from-a-leading-plastic-surgeon-in-hyderabad',
];

const PREVIEW_PORT = 4173;
const BASE_URL = `http://localhost:${PREVIEW_PORT}`;
const DIST_DIR = path.resolve('dist');

if (!existsSync(DIST_DIR)) {
  console.error('❌ dist/ not found. Run `vite build` first.');
  process.exit(1);
}

console.log('🚀 Starting prerender pass...');

// 1. Boot vite preview
console.log(`📡 Booting vite preview on :${PREVIEW_PORT}...`);
// Run local Vite via Node (no `npx` on PATH required). Avoid require.resolve('vite/...')
// — Vite's package.json "exports" does not expose ./bin/vite.js.
const viteCli = path.join(path.dirname(DIST_DIR), 'node_modules', 'vite', 'bin', 'vite.js');
const preview = spawn(process.execPath, [viteCli, 'preview', '--port', String(PREVIEW_PORT), '--strictPort'], {
  stdio: ['ignore', 'pipe', 'pipe'],
  env: { ...process.env, NODE_ENV: 'production' },
});

// Wait for preview server to be ready
await new Promise((resolve, reject) => {
  const timeout = setTimeout(() => reject(new Error('Preview server boot timeout (10s)')), 10000);
  preview.stdout.on('data', (chunk) => {
    const text = chunk.toString();
    if (text.includes('Local:') || text.includes('localhost')) {
      clearTimeout(timeout);
      // Give it 500ms to fully bind
      setTimeout(resolve, 500);
    }
  });
  preview.on('error', (err) => {
    clearTimeout(timeout);
    reject(err);
  });
});

console.log('✅ Preview server ready.');

// 2. Launch browser
console.log('🌐 Launching headless Chrome...');
const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const failures = [];

try {
  for (const route of ROUTES) {
    const url = `${BASE_URL}${route}`;
    process.stdout.write(`  📄 ${route.padEnd(45)} `);
    try {
      const page = await browser.newPage();
      // Pretend to be Googlebot for any conditional rendering
      await page.setUserAgent('Mozilla/5.0 (compatible; Prerender-DrRamprabhu/1.0)');
      await page.setViewport({ width: 1280, height: 800 });

      // Navigate; wait for network idle so Helmet etc. settle
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

      // Wait until #root has actual children (React mounted)
      await page.waitForFunction(
        () => {
          const root = document.getElementById('root');
          return root && root.children.length > 0;
        },
        { timeout: 15000 }
      );

      // Extra settle for Helmet to flush
      await new Promise((r) => setTimeout(r, 300));

      // Get full HTML (includes Helmet's <head> mutations)
      const html = await page.content();
      await page.close();

      // Write to dist/<route>/index.html
      const outputDir =
        route === '/' ? DIST_DIR : path.join(DIST_DIR, ...route.split('/').filter(Boolean));
      await mkdir(outputDir, { recursive: true });
      await writeFile(path.join(outputDir, 'index.html'), html, 'utf8');

      const sizeKB = (Buffer.byteLength(html) / 1024).toFixed(1);
      console.log(`✅ ${sizeKB} KB`);
    } catch (err) {
      console.log(`❌ ${err.message}`);
      failures.push({ route, error: err.message });
    }
  }
} finally {
  // 3. Cleanup
  await browser.close();
  preview.kill('SIGTERM');
  // Give it a moment to die cleanly
  await new Promise((r) => setTimeout(r, 200));
}

// Summary
console.log('');
console.log(`✅ Prerendered ${ROUTES.length - failures.length}/${ROUTES.length} routes`);
if (failures.length) {
  console.log('❌ Failures:');
  for (const f of failures) console.log(`   - ${f.route}: ${f.error}`);
  process.exit(1);
}

console.log('🎉 Prerender complete. Static HTML written to dist/<route>/index.html');
process.exit(0);
