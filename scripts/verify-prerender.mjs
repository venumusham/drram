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
  '/faq',
  '/contact',
  '/book-appointment',
  '/privacy-policy',
  '/terms-of-service',
  '/sitemap',
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
  '/one-sided-male-breast-enlargement-hyderabad',
  '/asymmetric-gynecomastia-unequal-male-chest',
  '/teenage-gynecomastia-treatment-hyderabad',
  // Medical tourism (Step 7)
  '/medical-tourism-india',
  // Blog (Step 7)
  '/blog',
  '/blog/puffy-nipples-fat-vs-gynecomastia-gland-hyderabad',
  '/blog/painful-foot-neuroma-excision-hyderabad',
  '/blog/ear-lobe-glue-vs-surgical-repair-hyderabad',
  '/blog/breast-augmentation-myths-implant-facts-hyderabad',
  '/blog/prominent-ear-correction-otoplasty-hyderabad',
  '/blog/skin-retraction-after-gynecomastia-surgery-hyderabad',
  '/blog/fingertip-crush-injury-plastic-surgeon-hyderabad',
  '/blog/diabetic-foot-ulcer-prevention-neuropathy-hyderabad',
  '/blog/axillary-breast-reduction-underarm-tissue-removal-hyderabad',
  '/blog/achilles-tear-child-heel-injury-hyderabad',
  '/blog/breast-augmentation-natural-results-safety-hyderabad',
  '/blog/sebaceous-cyst-minimal-scar-removal-hyderabad',
  '/blog/spongy-bug-injury-skin-infection-hyderabad',
  '/blog/male-chest-contouring-minimal-scar-hyderabad',
  '/blog/breast-reduction-surgery-telugu-hyderabad',
  '/blog/breast-lift-surgery-telugu-hyderabad',
  '/blog/breast-augmentation-surgery-telugu-hyderabad',
  '/blog/dr-ramprabhu-plastic-surgery-clinic-consultation',
  '/blog/breast-surgery-types-dr-ramprabhu-hyderabad',
  '/blog/plastic-surgery-clinic-july-2025-short',
  '/blog/gynecomastia-myths-hyderabad',
  '/blog/gynecomastia-short-explainer-hyderabad',
  '/blog/wrist-swelling-tenosynovitis-ganglion-cyst-hyderabad',
  '/blog/forehead-av-malformation-not-lipoma-hyderabad',
  '/blog/ganglion-cyst-surgery-gold-standard-hyderabad',
  '/blog/hair-transplant-prerequisite-medical-therapy-hyderabad',
  '/blog/skin-glue-deep-wounds-suturing-hyderabad',
  '/blog/ingrown-toenail-pain-pus-treatment-hyderabad',
  '/blog/av-fistula-dialysis-access-hyderabad',
  '/blog/gynecomastia-surgery-hyderabad',
  '/blog/sebaceous-cyst-removal-treatment-hyderabad',
  '/blog/breast-surgery-augmentation-reduction-lift-hyderabad',
  '/blog/what-is-plastic-surgery-reconstructive-cosmetic-hyderabad',
  '/blog/diabetic-foot-ulcer-amputation-prevention-hyderabad',
  '/blog/glomus-tumour-nail-pain-treatment-hyderabad',
  '/blog/keloid-scar-treatment-surgery-hyderabad',
  '/blog/forehead-lump-removal-no-visible-scar-hyderabad',
  '/blog/massage-after-gynecomastia-surgery-hyderabad',
  '/blog/endoscopic-scarless-gynecomastia-surgery-hyderabad',
  '/blog/gynecomastia-surgery-psychology-man-boobs-hyderabad',
  '/blog/multiple-gynecomastia-surgeries-precision-planning-hyderabad',
  '/blog/what-is-gynecomastia-male-breast-enlargement-hyderabad',
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
