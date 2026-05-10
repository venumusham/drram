/**
 * Blog post registry. Each entry produces:
 *   - A card on /blog index
 *   - A detail page at /blog/<slug>
 *   - A sitemap entry (when added to public/sitemap.xml)
 *   - A prerender route (when added to scripts/prerender.mjs)
 *
 * Adding a new post:
 *   1. Add an entry here (slug must be URL-safe)
 *   2. Create src/pages/blog/<ComponentName>.tsx
 *   3. Add route in src/App.tsx
 *   4. Add URL to public/sitemap.xml
 *   5. Add URL to scripts/prerender.mjs ROUTES
 */

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  /** Author name */
  author: string;
  /** ISO date string */
  publishedAt: string;
  /** Estimated read time in minutes */
  readMin: number;
  /** Hero / OG image */
  image: string;
  /** Categories (used for filtering on /blog) */
  categories: string[];
  /** Money page this post should link readers towards */
  pillarPage: string;
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: 'gynecomastia-surgery-cost-hyderabad-2026-guide',
    title: 'Gynecomastia Surgery Cost in Hyderabad — Complete 2026 Guide',
    excerpt:
      'A transparent breakdown of gynecomastia surgery costs across all four grades — what is included, hidden charges to watch out for, EMI and insurance options.',
    author: 'Dr. M. Ram Prabhu',
    publishedAt: '2026-05-12',
    readMin: 8,
    image: '/images/breast/Gynecomastia.jpg',
    categories: ['Gynecomastia', 'Cost Guide'],
    pillarPage: '/gynecomastia',
  },
  // Add the remaining 11 posts following the same structure (Week 2-12 of the
  // content plan in marketing/blog-content-plan.md). Each post needs a
  // corresponding component file in src/pages/blog/.
];
