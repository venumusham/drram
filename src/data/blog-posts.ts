/**
 * Blog post registry. Each entry produces:
 *   - A card on /blog index
 *   - Detail page at /blog/<slug> (markdown in `src/content/blog/<slug>.md` **or** a dedicated TSX route)
 *   - Sitemap + prerender (keep `scripts/prerender.mjs` in sync)
 *
 */

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  /** Optional schema / freshness date (ISO) */
  dateModified?: string;
  readMin: number;
  image: string;
  imageAlt?: string;
  /** Shown under hero image; defaults to excerpt */
  heroCaption?: string;
  categories: string[];
  pillarPage: string;
  /** Short label in article breadcrumb */
  breadcrumbLabel?: string;
  /** SEO keywords for markdown-driven posts */
  keywords?: string[];
  pillarCtaTitle?: string;
  pillarCtaBody?: string;
  pillarButtonLabel?: string;
  whatsappPrefill?: string;
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: 'gynecomastia-recovery-timeline-hyderabad',
    title: 'Gynecomastia Recovery Timeline — Week by Week (Hyderabad)',
    excerpt:
      'Day-by-day and week-by-week recovery after gynecomastia surgery: garment use, return to work and gym, swelling, red flags, and follow-up milestones.',
    author: 'Dr. M. Ram Prabhu',
    publishedAt: '2026-05-13',
    readMin: 10,
    image: '/images/breast/gynecomastia-recovery-timeline-thumbnail.png',
    imageAlt:
      'Gynecomastia recovery timeline — compression garment and week-by-week healing after male chest reduction surgery.',
    categories: ['Gynecomastia', 'Recovery'],
    pillarPage: '/gynecomastia',
    breadcrumbLabel: 'Recovery',
    keywords: ['gynecomastia recovery', 'gynecomastia recovery time', 'male breast reduction recovery hyderabad'],
    pillarCtaTitle: 'Plan your surgery with clear milestones',
    pillarCtaBody:
      'Book a consultation to map recovery around your work schedule and fitness goals. We provide written instructions and follow-up access.',
    pillarButtonLabel: 'Gynecomastia procedure hub',
    whatsappPrefill:
      'Hello Dr. Ram Prabhu, I read your gynecomastia recovery timeline article and have questions about healing after surgery.',
  },
  {
    slug: 'gynecomastia-surgery-cost-hyderabad-2026-guide',
    title: 'Gynecomastia Surgery Cost in Hyderabad — Complete 2026 Guide',
    excerpt:
      'A transparent breakdown of gynecomastia surgery costs across all four grades — what is included, hidden charges to watch out for, EMI and insurance options.',
    author: 'Dr. M. Ram Prabhu',
    publishedAt: '2026-05-12',
    readMin: 8,
    image: '/images/breast/gynecomastia-cost-guide-thumbnail.png',
    imageAlt:
      'Gynecomastia surgery cost guide — transparent grade-wise pricing for male chest reduction in Hyderabad.',
    categories: ['Gynecomastia', 'Cost Guide'],
    pillarPage: '/gynecomastia',
    breadcrumbLabel: 'Cost Guide',
    keywords: ['gynecomastia surgery cost hyderabad', 'gynecomastia cost india', 'male chest reduction price'],
    pillarCtaTitle: 'Get Your Personalised Quote',
    pillarCtaBody:
      'Free consultation with Dr. Ram Prabhu, DNB Plastic Surgery. Grade examination, photographs, and exact package quote in a single visit.',
    pillarButtonLabel: 'Full procedure page',
    whatsappPrefill:
      'Hello Dr. Ram Prabhu, I read your gynecomastia cost guide and would like to book a consultation.',
  },
  {
    slug: 'laser-liposuction-in-hyderabad--a-guide-to-idea-clinics-kondapur',
    title: 'Laser Liposuction in Hyderabad: A Guide to Idea Clinics Kondapur',
    excerpt:
      'How laser liposuction differs from traditional lipo, benefits, who it suits, what to expect at Idea Clinics Kondapur, and recovery basics.',
    author: 'Dr. M. Ram Prabhu',
    publishedAt: '2025-05-14',
    readMin: 7,
    image: '/images/body/lipo.jpg',
    imageAlt: 'Body contouring and liposuction concept — targeted fat reduction.',
    categories: ['Body contouring', 'Liposuction'],
    pillarPage: '/liposuction-hyderabad',
    breadcrumbLabel: 'Laser liposuction',
    keywords: ['laser liposuction hyderabad', 'lipo kondapur', 'idea clinics liposuction'],
    pillarButtonLabel: 'Liposuction in Hyderabad',
  },
  {
    slug: 'revitalize-your-confidence--discover-the-art-of-cosmetic-surgery',
    title: 'Revitalize Your Confidence: Discover the Art of Cosmetic Surgery',
    excerpt:
      'An overview of cosmetic surgery goals, benefits, how to choose a surgeon, and what to expect when you are ready for a change.',
    author: 'Dr. M. Ram Prabhu',
    publishedAt: '2024-05-12',
    readMin: 6,
    image: '/images/services/face.jpg',
    imageAlt: 'Cosmetic facial surgery and aesthetic consultation concept.',
    categories: ['Cosmetic surgery', 'Education'],
    pillarPage: '/services',
    breadcrumbLabel: 'Cosmetic surgery',
    keywords: ['cosmetic surgery hyderabad', 'plastic surgery confidence', 'aesthetic surgery india'],
    pillarButtonLabel: 'Browse services',
  },
  {
    slug: 'lipomas-and-plastic-surgery--exploring-treatment-options-and-considerations',
    title: 'Lipomas and Plastic Surgery: Exploring Treatment Options and Considerations',
    excerpt:
      'What lipomas are, when removal is appropriate, surgical vs observation, risks, and how a plastic surgeon plans excision with cosmesis in mind.',
    author: 'Dr. M. Ram Prabhu',
    publishedAt: '2024-05-12',
    readMin: 6,
    image: '/images/services/body.jpg',
    imageAlt: 'Soft tissue lump evaluation — lipoma treatment discussion.',
    categories: ['Lipoma', 'Skin & soft tissue'],
    pillarPage: '/lipoma-removal-hyderabad',
    breadcrumbLabel: 'Lipomas',
    keywords: ['lipoma removal hyderabad', 'lipoma surgery', 'fat lump removal'],
    pillarButtonLabel: 'Lipoma removal Hyderabad',
  },
  {
    slug: 'goodbye-gynecomastia--how-a-skilled-plastic-surgeon-can-help',
    title: 'Goodbye Gynecomastia: How a Skilled Plastic Surgeon Can Help',
    excerpt:
      'How gynecomastia surgery works, the consultation process, benefits beyond appearance, recovery expectations, and choosing a qualified surgeon.',
    author: 'Dr. M. Ram Prabhu',
    publishedAt: '2024-05-12',
    readMin: 7,
    image: '/images/breast/Gynecomastia.jpg',
    imageAlt: 'Male chest contouring — gynecomastia treatment overview.',
    categories: ['Gynecomastia', 'Education'],
    pillarPage: '/gynecomastia',
    breadcrumbLabel: 'Gynecomastia',
    keywords: ['gynecomastia surgery hyderabad', 'male breast reduction', 'gynaecomastia surgeon'],
    pillarButtonLabel: 'Gynecomastia hub',
  },
  {
    slug: 'the-ultimate-guide-to-nose-rhinoplasty--everything-you-need-to-know',
    title: 'The Ultimate Guide to Nose Rhinoplasty: Everything You Need to Know',
    excerpt:
      'Types of rhinoplasty, preparation, procedure overview, recovery, choosing a surgeon, and cost considerations for nose reshaping.',
    author: 'Dr. M. Ram Prabhu',
    publishedAt: '2024-05-12',
    readMin: 7,
    image: '/images/facelift/face-background.jpg',
    imageAlt: 'Facial profile and nasal aesthetics — rhinoplasty education.',
    categories: ['Rhinoplasty', 'Face'],
    pillarPage: '/rhinoplasty-hyderabad',
    breadcrumbLabel: 'Rhinoplasty',
    keywords: ['rhinoplasty hyderabad', 'nose job india', 'nose surgery recovery'],
    pillarButtonLabel: 'Rhinoplasty Hyderabad',
  },
  {
    slug: 'reclaiming-your-confidence--the-power-of-a-tummy-tuck',
    title: 'Reclaiming Your Confidence: The Power of a Tummy Tuck',
    excerpt:
      'What abdominoplasty achieves, benefits for contour and posture, how the procedure works, recovery, and who is a suitable candidate.',
    author: 'Dr. M. Ram Prabhu',
    publishedAt: '2024-05-12',
    readMin: 6,
    image: '/images/body/tummy.jpg',
    imageAlt: 'Abdominal contouring — tummy tuck (abdominoplasty) overview.',
    categories: ['Body contouring', 'Tummy tuck'],
    pillarPage: '/tummy-tuck-hyderabad',
    breadcrumbLabel: 'Tummy tuck',
    keywords: ['tummy tuck hyderabad', 'abdominoplasty india', 'excess skin abdomen'],
    pillarButtonLabel: 'Tummy tuck Hyderabad',
  },
  {
    slug: 'enhancing-confidence--the-ultimate-guide-to-breast-implant-surgery',
    title: 'Enhancing Confidence: The Ultimate Guide to Breast Implant Surgery',
    excerpt:
      'Choosing a surgeon, saline vs silicone implants, preparing for augmentation, recovery, risks, and long-term follow-up after breast implants.',
    author: 'Dr. M. Ram Prabhu',
    publishedAt: '2024-05-12',
    readMin: 7,
    image: '/images/breast/Breast-Augmentation.jpg',
    imageAlt: 'Breast augmentation — implant surgery education.',
    categories: ['Breast', 'Augmentation'],
    pillarPage: '/breast-augmentation-hyderabad',
    breadcrumbLabel: 'Breast implants',
    keywords: ['breast augmentation hyderabad', 'breast implants india', 'implant surgery recovery'],
    pillarButtonLabel: 'Breast augmentation Hyderabad',
  },
  {
    slug: 'navigating-advanced-lymphedema--understanding-treatment-options-and-support',
    title: 'Navigating Advanced Lymphedema: Understanding Treatment Options and Support',
    excerpt:
      'Medical and surgical options for advanced lymphedema, self-care, emotional support, lifestyle changes, and long-term management.',
    author: 'Dr. M. Ram Prabhu',
    publishedAt: '2024-05-12',
    readMin: 7,
    image: '/images/reconstruction/reconstructive-hero.jpg',
    imageAlt: 'Reconstructive surgery and lymphatic treatment concept.',
    categories: ['Reconstructive', 'Lymphedema'],
    pillarPage: '/services/reconstructive',
    breadcrumbLabel: 'Lymphedema',
    keywords: ['lymphedema treatment india', 'reconstructive plastic surgery', 'lymphatic surgery'],
    pillarButtonLabel: 'Reconstructive services',
  },
  {
    slug: 'restoring-hope--the-power-of-plastic-surgery-reconstruction-for-diabetic-foot',
    title: 'Restoring Hope: The Power of Plastic Surgery Reconstruction for Diabetic Foot',
    excerpt:
      'How diabetic foot ulcers progress, when reconstruction helps preserve limb function, benefits, timing, and choosing an experienced team.',
    author: 'Dr. M. Ram Prabhu',
    publishedAt: '2024-05-12',
    readMin: 6,
    image: '/images/reconstruction/Post-Trauma-Reconstruction.jpg',
    imageAlt: 'Reconstructive surgery for complex wounds and diabetic foot complications.',
    categories: ['Reconstructive', 'Diabetic foot'],
    pillarPage: '/services/reconstructive',
    breadcrumbLabel: 'Diabetic foot',
    keywords: ['diabetic foot ulcer surgery', 'reconstructive surgery hyderabad', 'limb salvage'],
    pillarButtonLabel: 'Reconstructive services',
  },
  {
    slug: 'revolutionizing-skin-repair--the-science-of-skin-grafting',
    title: 'Revolutionizing Skin Repair: The Science of Skin Grafting',
    excerpt:
      'What skin grafting is, split- vs full-thickness grafts, conditions treated, benefits, and why specialist plastic surgical care matters.',
    author: 'Dr. M. Ram Prabhu',
    publishedAt: '2024-05-12',
    readMin: 5,
    image: '/images/reconstruction/Microsurgery.jpg',
    imageAlt: 'Microsurgery and reconstructive skin grafting — medical illustration context.',
    categories: ['Reconstructive', 'Skin grafting'],
    pillarPage: '/services/reconstructive',
    breadcrumbLabel: 'Skin grafting',
    keywords: ['skin grafting', 'burn reconstruction', 'split thickness graft'],
    pillarButtonLabel: 'Reconstructive services',
  },
  {
    slug: 'the-evolution-of-plastic-surgery-techniques--insights-from-a-leading-plastic-surgeon-in-hyderabad',
    title:
      'The Evolution of Plastic Surgery Techniques: Insights from a Leading Plastic Surgeon in Hyderabad',
    excerpt:
      'From historical repair techniques to minimally invasive and technology-assisted surgery — how modern plastic surgery in Hyderabad has advanced.',
    author: 'Dr. M. Ram Prabhu',
    publishedAt: '2024-05-03',
    readMin: 9,
    image: '/images/services/breast.jpg',
    imageAlt: 'Plastic surgery consultation — modern techniques and patient-centred care.',
    categories: ['Plastic surgery', 'Hyderabad'],
    pillarPage: '/plastic-surgeon-hyderabad',
    breadcrumbLabel: 'Evolution of techniques',
    keywords: ['plastic surgeon hyderabad', 'cosmetic surgery techniques', 'minimally invasive plastic surgery'],
    pillarButtonLabel: 'Plastic surgeon Hyderabad',
  },
];
