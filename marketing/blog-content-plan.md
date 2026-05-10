# 12-Week Blog Content Plan

**Cadence:** 1 post per week × 12 weeks = 12 long-form blog posts
**Length:** 1,500-2,500 words each
**Goal:** Capture long-tail informational queries that drive traffic to money pages

## Why Blogs Matter for Plastic Surgery SEO

Money pages (gynecomastia, rhinoplasty, etc.) target **commercial queries** ("rhinoplasty cost hyderabad"). Blog posts target **informational queries** ("how long does rhinoplasty recovery take"). Together they form a "content cluster":

```
Pillar page (money page) ↔ Blog posts (link to money page)
   /gynecomastia    ←   /blog/gynecomastia-cost-guide-2026
                    ←   /blog/recovery-after-gynecomastia-day-by-day
                    ←   /blog/bodybuilder-gynecomastia-truth
```

Each blog drives readers to its pillar money page, increasing both traffic and conversion.

## Blog Setup (Technical)

You don't have a blog infrastructure yet. Two paths:

### Option A: Add `/blog` route to existing React app (recommended for now)
- Create `src/pages/blog/[slug].tsx` for each post
- Static markdown rendered to JSX (use `react-markdown` or just write JSX directly)
- Each post is a route → prerendered like other pages
- Add `/blog` index page listing all posts
- ~2 hours to set up, then 4-6 hours per post to write

### Option B: Migrate to a blog-friendly stack later
- Astro, Next.js, or WordPress as a separate `blog.drramprabhu.com`
- More work upfront but better long-term content management

**Recommendation: Start with Option A** — the React + prerender setup we built handles blogs perfectly.

---

## 📅 12-Week Calendar

Each entry has: target query, outline, internal links, expected ranking timeline.

---

### Week 1 — `gynecomastia-surgery-cost-hyderabad-2026-guide`

**Target query:** `gynecomastia surgery cost in hyderabad` (currently rank 15.67)
**Estimated search volume:** 200-500/month

**Outline (1,800 words):**
1. **Intro** — why cost varies (300 words)
2. **Cost by grade** — Grade 1: ₹50K-70K | Grade 2: ₹70K-85K | Grade 3: ₹85K-1.1L | Grade 4: ₹1.1L-1.5L (300 words)
3. **What's included in the package** — surgeon, OT, anaesthesia, garments, follow-up (200 words)
4. **What's NOT included** — pre-op tests (~₹3-5K), revision if needed (200 words)
5. **EMI options & insurance** — 0% EMI, criteria for partial coverage (200 words)
6. **Hidden costs to watch out for** — quack clinics, "starting from ₹15,000" traps (300 words)
7. **Hyderabad vs Mumbai/Delhi/Bangalore comparison** — table (200 words)
8. **How to choose value vs cheap** — DNB credentials, NABH facility, clear contracts (200 words)
9. **Conclusion + CTA** → /gynecomastia (100 words)

**Internal links to:** `/gynecomastia`, `/about`, `/faq`, `/contact`

**Expected impact:** Captures "cost"-driven searches who become high-intent leads.

---

### Week 2 — `recovery-after-gynecomastia-day-by-day-timeline`

**Target query:** `gynecomastia recovery time` and variants
**Estimated SV:** 300-600/month

**Outline (2,000 words):**
1. **What recovery feels like overall** — soreness vs pain, expectations (200 words)
2. **Day 0 — Surgery day** — what to expect from anaesthesia, garment, transport home (300 words)
3. **Day 1-3 — Initial recovery** — peak swelling, bruising, pain medication (300 words)
4. **Day 4-7 — Return to work** — activities allowed, what to avoid (300 words)
5. **Week 2-3 — Light activity** — driving, light cardio (200 words)
6. **Week 4-6 — Garment off, back to gym** — chest workout caution (200 words)
7. **Month 2-3 — Full recovery** — final swelling resolves, scars start fading (200 words)
8. **6 months & beyond** — final result, no recurrence with normal lifestyle (150 words)
9. **Red flags — when to call the doctor** — infection, hematoma signs (200 words)
10. **Recovery do's and don'ts checklist** (150 words)

**Internal links:** `/gynecomastia` (multiple), related: liposuction recovery

---

### Week 3 — `how-to-choose-best-plastic-surgeon-hyderabad`

**Target query:** `best plastic surgeon hyderabad` and variants
**Estimated SV:** 1,000-2,000/month
**Difficulty:** High (commercial intent + competition) but lots of impressions

**Outline (2,200 words):**
1. **Why choosing right matters** — botched surgery stories without naming names (300 words)
2. **The 4 essential credentials** — DNB/MCh, MCI/NMC, IAAPS/APSI, hospital privileges (400 words)
3. **Red flags to spot a quack** — 7 warning signs (300 words)
4. **Questions to ask in consultation** — 12 questions every patient should ask (400 words)
5. **How to verify credentials** — MCI website, state council, hospital affiliation check (200 words)
6. **What "before/after" galleries should show** — diversity, similar grade to yours (200 words)
7. **Pricing red flags** — too cheap, hidden costs, pressure tactics (200 words)
8. **Reviews — how to read them critically** — pattern recognition, recent vs old (150 words)
9. **Trust your gut at consultation** — chemistry matters (50 words)

**Internal links:** `/about`, `/faq`, `/services`

**SEO note:** This is a "trust" article that builds E-E-A-T even if it doesn't rank #1. Will earn backlinks.

---

### Week 4 — `liposuction-vs-tummy-tuck-which-do-you-need`

**Target query:** `liposuction vs tummy tuck`
**Estimated SV:** 200-400/month

**Outline (1,800 words):**
1. **Two procedures, one common goal — but different problems** (200 words)
2. **What liposuction does** — fat removal only, small incisions (300 words)
3. **What tummy tuck does** — fat + skin + muscle (300 words)
4. **Comparison table** — incision, anaesthesia, recovery, cost, scar, results (300 words)
5. **The "pinch test"** — how to self-diagnose (200 words)
6. **Common scenarios** — post-pregnancy → tuck; gym-stubborn fat → lipo (300 words)
7. **Combined procedures** — when both are needed (200 words)
8. **Cost comparison** — lipo ₹60K-2L, tuck ₹1.4-2.8L (200 words)

**Internal links:** `/liposuction-hyderabad`, `/tummy-tuck-hyderabad`

---

### Week 5 — `gynecomastia-grades-1-2-3-4-treatment-guide`

**Target query:** `gynecomastia grades` and variants
**Estimated SV:** 200-400/month

**Outline (1,800 words):**
1. **The 4-grade Simon classification** (200 words)
2. **Grade 1 — Mild** — characteristics, treatment, cost, recovery (350 words)
3. **Grade 2 — Moderate without skin excess** — true gland, gland excision needed (350 words)
4. **Grade 3 — Moderate with skin excess** — combined approach (350 words)
5. **Grade 4 — Severe with significant skin** — staged procedures (300 words)
6. **How to self-assess your grade** — finger pinch test, visual signs (200 words)
7. **Why grade determines technique and cost** (200 words)
8. **CTA: Schedule examination** (100 words)

**Internal links:** `/gynecomastia` (multiple), `/contact`

---

### Week 6 — `mommy-makeover-india-procedures-cost-recovery`

**Target query:** `mommy makeover india`, `mommy makeover hyderabad`
**Estimated SV:** 300-600/month

**Outline (2,000 words):**
1. **What is a mommy makeover?** (200 words)
2. **The 3 core procedures** — tummy tuck, breast lift/aug, lipo (400 words)
3. **Optional add-ons** — vaginal rejuvenation, fat transfer to face (200 words)
4. **Best timing — when after baby?** (300 words)
5. **Cost breakdown** — combined vs separate procedures (300 words)
6. **Recovery — week by week** (300 words)
7. **Post-recovery: future pregnancies, breastfeeding** (200 words)
8. **Realistic expectations + before/after gallery placeholder** (100 words)

**Internal links:** `/tummy-tuck-hyderabad`, `/breast-augmentation-hyderabad`, `/liposuction-hyderabad`

---

### Week 7 — `scarless-gynecomastia-surgery-endoscopic-technique-explained`

**Target query:** `scarless gynecomastia surgery`
**Estimated SV:** 100-300/month

**Outline (1,500 words):**
1. **What "scarless" actually means** (200 words)
2. **Why traditional gland excision leaves a peri-areolar scar** (200 words)
3. **The endoscopic / VASER scarless approach** — incisions in armpit only (300 words)
4. **Who is a candidate?** — Grade 1-2 typically (200 words)
5. **Limitations and trade-offs** — slightly longer surgery, learning curve (200 words)
6. **Cost difference** (100 words)
7. **Visual: incision locations** — diagram (200 words)
8. **CTA** (100 words)

**Internal links:** `/gynecomastia`

---

### Week 8 — `cleft-lip-and-palate-surgery-india-comprehensive-guide`

**Target query:** `cleft lip surgery india`, `cleft lip surgery hyderabad` (currently rank 19)
**Estimated SV:** 200-500/month
**Note:** This is reconstructive, partial insurance coverage often available

**Outline (2,000 words):**
1. **What is cleft lip and palate?** (300 words)
2. **Causes and incidence in India** (200 words)
3. **Multidisciplinary care** — plastic surgeon, ENT, orthodontist, speech therapist (300 words)
4. **Surgery timeline by age** — lip at 3-6 months, palate at 9-18 months (400 words)
5. **Adult cleft surgery** — secondary repairs, rhinoplasty (200 words)
6. **Insurance & charity programs** — Smile Train, government schemes (200 words)
7. **Cost in India** — much lower than abroad (200 words)
8. **Expected outcomes + scar minimization** (200 words)

**Internal links:** `/services/reconstructive`, `/medical-tourism-india`

---

### Week 9 — `microvascular-reconstructive-surgery-hyderabad-cases`

**Target query:** `microvascular reconstructive surgery`, `microvascular reconstructive` (rank 14)
**Estimated SV:** 100-200/month
**Difficulty:** Medium, builds authority

**Outline (1,800 words):**
1. **What is microvascular surgery?** (300 words)
2. **Common indications** — trauma, cancer reconstruction, replantation (400 words)
3. **How free flaps work** — donor site, recipient vessels (300 words)
4. **Common flaps** — radial forearm, fibula, ALT, DIEP, gracilis (300 words)
5. **Outcomes and recovery** (300 words)
6. **Why this requires specialist training** — DNB Plastic Surgery includes microsurgery training (200 words)

**Internal links:** `/services/reconstructive`

---

### Week 10 — `revision-rhinoplasty-when-and-why`

**Target query:** `revision rhinoplasty`
**Estimated SV:** 100-300/month

**Outline (1,800 words):**
1. **What is revision rhinoplasty?** (200 words)
2. **5 reasons people seek revision** — unsatisfactory result, breathing issue, asymmetry, deformity, contracture (400 words)
3. **Why it's harder than primary** — scar tissue, weakened cartilage, blood supply (300 words)
4. **Cartilage grafting** — ear, septum, rib (300 words)
5. **Timing — wait at least 12 months after first surgery** (200 words)
6. **Realistic expectations** — partial improvement, may need 2-3 revisions (200 words)
7. **Cost premium for revision** (100 words)
8. **CTA** (100 words)

**Internal links:** `/rhinoplasty-hyderabad`

---

### Week 11 — `earlobe-repair-after-heavy-earrings-pet-tugs-piercings`

**Target query:** `earlobe repair near me` (currently good but can grow), `torn earlobe`
**Estimated SV:** 200-400/month

**Outline (1,500 words):**
1. **The earlobe problem — why it tears** (200 words)
2. **3 common causes** — heavy earrings, accidents, gauging (300 words)
3. **Why repair is simple** — local anaesthesia, 30-min walk-in (300 words)
4. **What to expect — step by step** (300 words)
5. **Re-piercing — when, how, and where** (200 words)
6. **Preventing future tears** — light earrings, position, sleep habits (200 words)

**Internal links:** `/earlobe-repair-kondapur`

---

### Week 12 — `plastic-surgery-for-men-india-trends-procedures`

**Target query:** `plastic surgery for men india`, `male cosmetic surgery`
**Estimated SV:** 200-400/month
**Note:** Men are 25%+ of cosmetic surgery patients in India and growing fast

**Outline (1,800 words):**
1. **The rise of men in plastic surgery** (200 words)
2. **Top 5 procedures men ask for** — gyno, rhinoplasty, lipo (chin/abdomen), HD lipo, hair transplant (500 words)
3. **What's different about male anatomy** — masculine angles, muscle preservation (200 words)
4. **Bodybuilder considerations** — steroid history, gland density (300 words)
5. **Cost ranges** (200 words)
6. **Common myths men hold** (200 words)
7. **Why discretion matters & how clinic ensures it** (200 words)

**Internal links:** `/gynecomastia`, `/rhinoplasty-hyderabad`, `/liposuction-hyderabad`

---

## 🛠️ Blog Setup — Concrete Code Plan

If you'd like, in a follow-up I can scaffold:

1. `src/pages/Blog.tsx` — index page listing all blog posts (with thumbnails, categories, search)
2. `src/data/blog-posts.ts` — array of post metadata (slug, title, date, excerpt, category, image)
3. `src/pages/blog/[Slug].tsx` files — one component per post, content as JSX or imported markdown
4. Add `/blog` and `/blog/:slug` routes in App.tsx
5. Wire each new post into sitemap.xml + prerender.mjs (one per week as you publish)
6. Schema.org `BlogPosting` for each
7. RSS feed at `/blog/rss.xml`

## SEO Tips for Each Post

- Use the **target query exactly in H1** and once in first paragraph
- Include the query (or close variant) in URL slug
- Add 1-3 high-quality external authority links (e.g., to Smile Train for cleft article)
- Internal-link to **at least one money page** (the conversion target)
- 1 hero image + 2-3 supporting images (use Unsplash, Wikimedia Commons, or original)
- Add `BlogPosting` schema with author, datePublished, image, headline
- 8-12 H2/H3 subheadings (Google likes structure)
- End with CTA section and breadcrumbs

## Promotion (Off-Page)

For each post:
- Share on LinkedIn (Dr. Ram Prabhu's profile)
- 3-5 days later, share again with a different angle
- Pull a quote → make Instagram carousel post
- Reference in WhatsApp Business broadcast (newsletter)
- Submit best 3 posts to HARO for journalist citations
- Pitch as guest content to TheHealthSite, Onlymyhealth, HexaHealth (with backlink)

## Realistic Timeline

Posts published over 12 weeks. Indexing in Google takes 1-3 weeks. Ranking improvements typically visible at 8-12 weeks per post. Cumulative effect compounds — by Month 6, blog should drive 30-50% of organic traffic.

## Tracking

In GSC, set up a property folder for `/blog/` and track:
- Impressions per post per week
- Average position trend
- Click-through rate (target ≥3% for blog content)
- Top queries each post ranks for

This is the closest equivalent to a content marketing autopilot — slow at first, then accelerating.
