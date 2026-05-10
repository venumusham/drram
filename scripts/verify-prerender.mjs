/**
 * Verifies that prerendered HTML files actually contain SEO-relevant content
 * in the raw HTML (not just an empty <div id="root">).
 *
 * Checks per file:
 *   - Has <h1>?
 *   - Has descriptive <title>?
 *   - Has <meta name="description">?
 *   - Has Schema.org JSON-LD?
 *   - Body text length > 500 chars?
 *
 * Run via:  npm run verify-prerender
 */

import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const DIST_DIR = path.resolve('dist');

const ROUTES = [
  '/',
  '/services',
  '/services/facelift',
  '/services/body-contouring',
  '/services/breast-procedures',
  '/services/reconstructive',
  '/about',
  '/gallery',
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
];

const issues = [];

console.log('🔍 Verifying prerendered HTML...');
console.log('');
console.log('Route'.padEnd(45) + 'H1  Title  Meta  JSON-LD  Body  Status');
console.log('─'.repeat(85));

for (const route of ROUTES) {
  const filePath =
    route === '/'
      ? path.join(DIST_DIR, 'index.html')
      : path.join(DIST_DIR, ...route.split('/').filter(Boolean), 'index.html');

  if (!existsSync(filePath)) {
    console.log(`${route.padEnd(45)}MISSING file: ${filePath}`);
    issues.push({ route, error: 'missing file' });
    continue;
  }

  const html = await readFile(filePath, 'utf8');

  const hasH1 = /<h1[\s>][^]*?<\/h1>/i.test(html);
  const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
  const hasGoodTitle = titleMatch && titleMatch[1].length > 20;
  const hasMetaDesc = /<meta\s+name=["']description["'][^>]+content=["'][^"']{20,}/i.test(html);
  const hasJsonLd = /<script\s+type=["']application\/ld\+json["'][^>]*>/i.test(html);

  // Strip tags to estimate body text
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const bodyText = bodyMatch ? bodyMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';
  const bodyLen = bodyText.length;
  const hasBodyContent = bodyLen > 500;

  const passing = hasH1 && hasGoodTitle && hasMetaDesc && hasJsonLd && hasBodyContent;
  const status = passing ? '✅' : '⚠️';

  if (!passing) {
    issues.push({
      route,
      missing: [
        !hasH1 && 'h1',
        !hasGoodTitle && 'title',
        !hasMetaDesc && 'meta-desc',
        !hasJsonLd && 'json-ld',
        !hasBodyContent && `body(${bodyLen}chars)`,
      ].filter(Boolean),
    });
  }

  console.log(
    route.padEnd(45) +
      (hasH1 ? ' ✓ ' : ' ✗ ').padEnd(4) +
      (hasGoodTitle ? '  ✓  ' : '  ✗  ').padEnd(7) +
      (hasMetaDesc ? '  ✓  ' : '  ✗  ').padEnd(6) +
      (hasJsonLd ? '   ✓   ' : '   ✗   ').padEnd(9) +
      (hasBodyContent ? `${String(bodyLen).padStart(5)} ` : ` ${String(bodyLen).padStart(5)} `).padEnd(7) +
      ' ' + status
  );
}

console.log('');
if (issues.length === 0) {
  console.log('✅ All routes prerendered correctly.');
} else {
  console.log(`⚠️  ${issues.length} route(s) have issues:`);
  for (const i of issues) {
    console.log(`   - ${i.route}: missing ${i.missing ? i.missing.join(', ') : i.error}`);
  }
  process.exit(1);
}
