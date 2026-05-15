import React from 'react';
import FAQAccordion from '../components/FAQAccordion';
import ProceduresAccordion from '../components/ProceduresAccordion';
import SEO from '../components/SEO';
import { PHONE_INTL, WHATSAPP_INTL, MAPS_URL } from '../components/FloatingSocialBar';

/**
 * Gynecomastia money page — targets the highest-value commercial query.
 *
 * Target queries:
 *   - "gynecomastia hyderabad"            (currently rank 5, 0 CTR)
 *   - "gynecomastia surgery in hyderabad"
 *   - "best gynecomastia surgery in hyderabad"
 *   - "gynecomastia surgery cost hyderabad"
 *   - "male chest reduction hyderabad"
 *   - "man boobs surgery hyderabad"
 *   - "scarless gynecomastia surgery"
 *   - "bodybuilder gynecomastia surgery in hyderabad"
 *
 * Page sections (SEO-mapped):
 *   1. Hero with H1 + trust signals + 3 conversion CTAs
 *   2. What is gynecomastia (educational, schema-friendly)
 *   3. Causes & symptoms (long-tail keyword capture)
 *   4. Grades 1-4 with visual breakdown (high-value content)
 *   5. Procedures accordion (4 surgical options)
 *   6. Cost table (₹50K-₹1.5L by grade)         <- highest-converting section
 *   7. Step-by-step procedure walkthrough
 *   8. Recovery timeline (Day 1 -> Month 3)
 *   9. Why Dr. Ram Prabhu (E-E-A-T signals)
 *   10. Before & after gallery
 *   11. Video testimonial / explainer
 *   12. FAQs (12 questions, FAQPage schema)
 *   13. Booking form (Formspree)
 *   14. Location & contact
 */

const GYNECOMASTIA_FAQS = [
  {
    q: 'What is gynecomastia and what causes it?',
    a: 'Gynecomastia is the abnormal enlargement of male breast tissue, caused by an imbalance between oestrogen and testosterone. Common triggers include puberty hormonal changes, ageing, certain medications (steroids, anti-androgens, antidepressants), liver or kidney disease, marijuana or alcohol use, and obesity. In about 25% of adult men, no specific cause is found.',
  },
  {
    q: 'How do I know if I have gynecomastia or just chest fat (pseudogynecomastia)?',
    a: 'True gynecomastia involves firm glandular tissue under the nipple — you can usually feel a rubbery disc. Pseudogynecomastia is purely fat with no gland enlargement. A clinical examination by Dr. Ram Prabhu (and occasionally an ultrasound) confirms the diagnosis.',
  },
  {
    q: 'How experienced is Dr. Ram Prabhu in gynecomastia surgery?',
    a: 'Dr. M. Ram Prabhu has 16+ years of experience and has performed 1,000+ gynecomastia procedures across all four grades, including bodybuilder and steroid-induced cases. He holds DNB (Super Speciality) Plastic Surgery from the National Board of Examinations.',
  },
  {
    q: 'What surgical techniques are used?',
    a: 'Treatment is tailored to your grade. Grade 1 is usually managed with VASER or laser-assisted liposuction alone. Grades 2-3 need liposuction PLUS gland excision through a hidden peri-areolar incision. Grade 4 with significant skin excess may need additional skin tightening.',
  },
  {
    q: 'How much does gynecomastia surgery cost in Hyderabad?',
    a: 'Cost ranges from ₹50,000 to ₹1,50,000 depending on the grade, technique, anaesthesia type, and hospital stay. Grade 1 (liposuction only) starts at ₹50,000. Grade 2-3 (combined approach) typically ₹70,000-₹1,00,000. Grade 4 ₹1,00,000-₹1,50,000. 0% interest EMI is available.',
  },
  {
    q: 'How long is the recovery and when can I return to work?',
    a: 'Most patients walk out the same day or after one night observation. Light desk work resumes in 2-4 days. Driving in 5-7 days. Gym (cardio) in 3 weeks; chest workouts in 6 weeks. Final results visible by 8-12 weeks.',
  },
  {
    q: 'Will there be visible scars after gynecomastia surgery?',
    a: 'No — modern gynecomastia surgery is essentially scarless. Liposuction is done through 2-3 mm incisions hidden in the armpit fold or nipple edge. By 3-6 months, scars are usually invisible.',
  },
  {
    q: 'Is gynecomastia surgery painful?',
    a: 'Discomfort is mild to moderate, similar to an intense chest workout. The procedure itself is done under general anaesthesia (Grade 2+) or local with sedation (Grade 1). Post-op pain is managed with oral medication for 3-5 days.',
  },
  {
    q: 'Can gynecomastia come back after surgery?',
    a: 'Recurrence is rare (under 5%) when the gland is properly removed. However, anabolic steroids, certain medications, or significant weight gain can cause fatty enlargement (pseudogynecomastia). Avoiding triggers gives lasting results.',
  },
  {
    q: 'Is gynecomastia surgery covered by insurance in India?',
    a: 'Most cosmetic gynecomastia surgery is not covered by insurance. However, if there is significant pain, asymmetry, or psychological distress documented by a physician, partial coverage may be available.',
  },
  {
    q: 'Can I have gynecomastia surgery as a bodybuilder or steroid user?',
    a: 'Yes — Dr. Ram Prabhu has performed many bodybuilder gynecomastia corrections. We require steroids to be discontinued at least 4-6 weeks before surgery. The technique focuses on removing the dense steroid-induced gland fully while preserving chest muscle definition.',
  },
  {
    q: 'How do I book a consultation?',
    a: 'Call or WhatsApp 9949808628 to schedule a consultation. The clinic is at 1st Floor, Idea Clinic, 61B, 3rd Street, Sri Ram Nagar, Kondapur, Hyderabad (PIN: 500084) — Mon-Sat, 10AM-12PM and 7PM-8PM. Online consultations are available for patients outside Hyderabad.',
  },
];

const COST_TABLE = [
  {
    grade: 'Grade 1 — Mild',
    description: 'Small, localized chest enlargement, mostly fatty',
    technique: 'VASER / Laser Liposuction',
    duration: '60-90 min',
    anesthesia: 'Local + sedation',
    stay: 'Same-day discharge',
    price: '₹50,000 — ₹70,000',
  },
  {
    grade: 'Grade 2 — Moderate',
    description: 'Visible enlargement, true glandular component',
    technique: 'Liposuction + Gland Excision',
    duration: '90-120 min',
    anesthesia: 'General',
    stay: '1 day',
    price: '₹70,000 — ₹85,000',
  },
  {
    grade: 'Grade 3 — Moderate-Severe',
    description: 'Significant enlargement, fat + gland combined',
    technique: '360° Combined Approach',
    duration: '2-3 hours',
    anesthesia: 'General',
    stay: '1 day',
    price: '₹85,000 — ₹1,10,000',
  },
  {
    grade: 'Grade 4 — Severe',
    description: 'Skin excess after weight loss or long-standing case',
    technique: 'Excision + Skin Tightening',
    duration: '3-4 hours',
    anesthesia: 'General',
    stay: '1-2 days',
    price: '₹1,10,000 — ₹1,50,000',
  },
];

const RECOVERY_TIMELINE = [
  { when: 'Day 0', title: 'Surgery day', detail: 'Procedure under anaesthesia. Compression garment applied. Same-day discharge for Grade 1; one-night stay for Grade 2+. Mild soreness manageable with pain medication.' },
  { when: 'Day 1-3', title: 'Initial recovery', detail: 'Rest at home. Compression garment 24/7. Walking encouraged to prevent clots. Mild bruising and swelling peak around Day 3.' },
  { when: 'Day 4-7', title: 'Return to work', detail: 'Most desk-job patients return to work. Driving cleared after 5-7 days. Stitches removed (or absorbable). Bruising fading visibly.' },
  { when: 'Week 2-3', title: 'Light activity', detail: 'Walking, light cardio cleared. Compression garment continues full-time. Most swelling resolves. Chest contour starting to show.' },
  { when: 'Week 4-6', title: 'Garment off', detail: 'Compression garment ends. Light gym/cardio okay. Full chest workouts still restricted. Scar massage begins for any visible incisions.' },
  { when: 'Month 2-3', title: 'Full recovery', detail: 'Heavy weight training resumed. Final aesthetic shape visible as last residual swelling settles. Scars rapidly fading.' },
  { when: 'Month 6+', title: 'Final result', detail: 'Scars typically invisible at conversational distance. Permanent gland removal — no recurrence with normal lifestyle.' },
];

const GynecomastiaLanding: React.FC = () => {
  // Schema 1: MedicalProcedure with Offer + AggregateRating
  const procedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    '@id': 'https://drramprabhu.com/gynecomastia#procedure',
    name: 'Gynecomastia Surgery in Hyderabad',
    alternateName: ['Male Chest Reduction Surgery', 'Male Breast Reduction', 'Gynecomastia Treatment'],
    url: 'https://drramprabhu.com/gynecomastia',
    image: 'https://drramprabhu.com/images/breast/Gynecomastia.jpg',
    description:
      'Endoscopic and scarless gynecomastia surgery in Kondapur, Hyderabad — VASER liposuction with gland excision. Performed by Dr. M. Ram Prabhu (DNB Super Speciality, 16+ years, 1,000+ cases). Cost from ₹50,000 with 0% EMI.',
    medicalSpecialty: 'PlasticSurgery',
    procedureType: 'https://schema.org/SurgicalProcedure',
    bodyLocation: 'Chest',
    preparation:
      'Stop steroids and blood-thinners at least 2-6 weeks before surgery. Pre-op blood work and ECG required. No food or water 6 hours before surgery.',
    followup: 'Compression garment for 4-6 weeks. Follow-up visits at Day 7, Week 4, and Month 3. Free post-op consultations included.',
    howPerformed:
      'Procedure performed under general or local anaesthesia. VASER ultrasonic liposuction emulsifies fat through 2-3mm incisions. Glandular tissue is excised through a hidden peri-areolar incision. Skin is closed with absorbable sutures.',
    areaServed: ['Hyderabad', 'Kondapur', 'Gachibowli', 'Madhapur', 'Hitech City', 'Telangana'],
    performer: { '@id': 'https://drramprabhu.com/#physician' },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '50000',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '50000',
        priceCurrency: 'INR',
        valueAddedTaxIncluded: true,
        minPrice: '50000',
        maxPrice: '150000',
      },
      url: 'https://drramprabhu.com/gynecomastia',
    },
  };

  // Schema 2: FAQPage matching the rendered FAQ content
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: GYNECOMASTIA_FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  // Schema 3: BreadcrumbList for SERP breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://drramprabhu.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://drramprabhu.com/services' },
      { '@type': 'ListItem', position: 3, name: 'Gynecomastia Surgery', item: 'https://drramprabhu.com/gynecomastia' },
    ],
  };

  const waUrl = `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(
    'Hello Dr. Ram Prabhu, I would like to book a gynecomastia consultation. Please share available slots and pricing.'
  )}`;

  return (
    <>
      <SEO
        title="Gynecomastia Surgery Hyderabad ★ Scarless from ₹50K | Dr. Ram Prabhu"
        description="Scarless gynecomastia surgery in Kondapur Hyderabad from ₹50,000. VASER liposuction + gland removal, 1-2 day recovery, 0% EMI. Dr. Ram Prabhu, DNB, 1,000+ cases. Call 9949808628."
        keywords={[
          'gynecomastia surgery hyderabad',
          'gynecomastia surgery cost hyderabad',
          'best gynecomastia surgeon hyderabad',
          'male chest reduction hyderabad',
          'man boobs surgery hyderabad',
          'scarless gynecomastia surgery',
          'bodybuilder gynecomastia surgery hyderabad',
          'vaser liposuction gynecomastia',
          'gynecomastia treatment kondapur',
        ]}
        image="https://drramprabhu.com/images/breast/Gynecomastia.jpg"
        url="https://drramprabhu.com/gynecomastia"
        type="article"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="relative min-h-screen bg-white">
        {/* ================= 1. HERO ================= */}
        <section className="pt-8 pb-10 px-4 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
          <div className="max-w-4xl mx-auto">
            <nav className="text-xs text-primary-200 mb-3" aria-label="Breadcrumb">
              <a href="/" className="hover:text-white">Home</a>
              <span className="mx-2">›</span>
              <a href="/services" className="hover:text-white">Services</a>
              <span className="mx-2">›</span>
              <span className="text-white">Gynecomastia Surgery</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Gynecomastia Surgery in Hyderabad — Scarless Male Chest Reduction by Dr. Ram Prabhu
            </h1>
            <p className="text-primary-100 text-base md:text-lg mb-5 max-w-2xl">
              VASER liposuction + gland excision performed by a DNB Super Speciality Plastic Surgeon with 1,000+ gynecomastia cases. All four grades treated. Same-day discharge. Final results in 8-12 weeks.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-primary-700 px-3 py-1 rounded-full text-xs font-semibold">★ DNB Plastic Surgery</span>
              <span className="bg-primary-700 px-3 py-1 rounded-full text-xs font-semibold">1,000+ Cases</span>
              <span className="bg-primary-700 px-3 py-1 rounded-full text-xs font-semibold">Scarless Technique</span>
              <span className="bg-primary-700 px-3 py-1 rounded-full text-xs font-semibold">All 4 Grades</span>
              <span className="bg-primary-700 px-3 py-1 rounded-full text-xs font-semibold">Bodybuilder Specialist</span>
              <span className="bg-primary-700 px-3 py-1 rounded-full text-xs font-semibold">0% EMI</span>
            </div>
            <div className="bg-yellow-300 text-primary-900 inline-block px-4 py-2 rounded-lg font-bold text-lg mb-6">
              Surgery from ₹50,000 — Free Consultation
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
              <a
                href={`tel:${PHONE_INTL}`}
                className="bg-white text-primary-900 font-semibold px-4 py-3 rounded-lg shadow text-center hover:bg-primary-50 transition"
                data-conversion="gyno_hero_call"
              >
                📞 Call 9949808628
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white font-semibold px-4 py-3 rounded-lg shadow text-center hover:bg-green-600 transition"
                data-conversion="gyno_hero_whatsapp"
              >
                💬 WhatsApp Now
              </a>
              <a
                href="#booking"
                className="bg-yellow-400 text-primary-900 font-semibold px-4 py-3 rounded-lg shadow text-center hover:bg-yellow-300 transition"
                data-conversion="gyno_hero_form"
              >
                📅 Book Online
              </a>
            </div>
          </div>
        </section>

        {/* ================= 2. WHAT IS GYNECOMASTIA ================= */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">What Is Gynecomastia?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Gynecomastia</strong> is the medical term for the abnormal enlargement of male breast tissue. It affects an estimated <strong>30-65% of men</strong> at some point in life, ranging from a small disc of glandular tissue under the nipple to a fully enlarged, breast-like chest. Despite how common it is, gynecomastia carries significant psychological burden — many men avoid removing their shirts, struggle with intimacy, and experience anxiety in social settings like swimming pools or gyms.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Surgery — known as <strong>male chest reduction</strong> or <strong>gynecomastia correction</strong> — is the only permanent solution for true glandular gynecomastia. Diet, exercise, and hormonal supplements may reduce surrounding fat but cannot remove glandular tissue. Modern techniques use a combination of <em>VASER ultrasonic liposuction</em> for fat and a small <em>peri-areolar incision</em> for gland excision, leaving virtually invisible scars.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At our Kondapur clinic, Dr. Ram Prabhu has performed over 1,000 gynecomastia procedures across all four grades — including challenging cases in bodybuilders, post-bariatric patients, and steroid users.
            </p>
          </div>
        </section>

        {/* ================= 3. CAUSES & SYMPTOMS ================= */}
        <section className="py-12 px-4 bg-primary-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">Causes & Symptoms of Gynecomastia</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-primary-800 mb-3">Common Causes</h3>
                <ul className="text-gray-700 space-y-2 list-disc pl-5">
                  <li><strong>Hormonal imbalance</strong> — most common; oestrogen-testosterone ratio shift</li>
                  <li><strong>Puberty</strong> — affects 50-60% of teenage boys; usually resolves but can persist</li>
                  <li><strong>Anabolic steroids</strong> — bodybuilders' #1 cause; gland is dense and fibrous</li>
                  <li><strong>Medications</strong> — anti-androgens, antidepressants, antibiotics, ulcer drugs</li>
                  <li><strong>Health conditions</strong> — liver disease, kidney failure, hyperthyroidism, tumours</li>
                  <li><strong>Substance use</strong> — alcohol, marijuana, opioids</li>
                  <li><strong>Obesity</strong> — increases oestrogen production from fat tissue</li>
                  <li><strong>Idiopathic</strong> — about 25% of cases have no identifiable cause</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-primary-800 mb-3">Signs & Symptoms</h3>
                <ul className="text-gray-700 space-y-2 list-disc pl-5">
                  <li>Visibly enlarged breast area on one or both sides</li>
                  <li>Firm, rubbery disc of tissue felt directly under the nipple</li>
                  <li>Tenderness or sensitivity around the nipple-areolar complex</li>
                  <li>Asymmetry — one side often larger than the other</li>
                  <li>Puffy nipples even at low body fat percentages</li>
                  <li>Skin sagging in long-standing or post-weight-loss cases</li>
                  <li>Psychological distress, social anxiety, avoidance of shirtless activities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 4. GRADES ================= */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">The Four Grades of Gynecomastia</h2>
            <p className="text-gray-700 mb-6">
              Treatment is dictated by the grade. Dr. Ram Prabhu personally examines each patient to determine the correct classification and tailored surgical approach.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {COST_TABLE.map((c) => (
                <div key={c.grade} className="bg-white border-2 border-primary-100 rounded-lg p-5 hover:shadow-lg transition">
                  <h3 className="text-lg font-bold text-primary-800">{c.grade}</h3>
                  <p className="text-sm text-gray-600 mb-3">{c.description}</p>
                  <p className="text-sm text-gray-700"><strong>Technique:</strong> {c.technique}</p>
                  <p className="text-sm text-gray-700"><strong>Duration:</strong> {c.duration}</p>
                  <p className="text-sm text-gray-700"><strong>Stay:</strong> {c.stay}</p>
                  <div className="mt-3 text-primary-700 font-bold">{c.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 5. PROCEDURES ================= */}
        <section className="py-12 px-4 bg-primary-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6 text-center">Surgical Techniques We Offer</h2>
            <ProceduresAccordion />
          </div>
        </section>

        {/* ================= 6. COST TABLE (DETAILED) ================= */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">Gynecomastia Surgery Cost in Hyderabad</h2>
            <p className="text-gray-700 mb-6">
              Cost depends on grade, technique, anaesthesia type, hospital stay, and pre-op investigations. We offer transparent fixed-package pricing with <strong>no hidden charges</strong>. 0% interest EMI is available for 6, 9, and 12 months.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-sm">
                <thead className="bg-primary-100 text-primary-900">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Grade</th>
                    <th className="px-3 py-2 text-left font-semibold">Technique</th>
                    <th className="px-3 py-2 text-left font-semibold">Anaesthesia</th>
                    <th className="px-3 py-2 text-left font-semibold">Stay</th>
                    <th className="px-3 py-2 text-left font-semibold">Price (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  {COST_TABLE.map((c, i) => (
                    <tr key={c.grade} className={i % 2 === 0 ? 'bg-white' : 'bg-primary-50'}>
                      <td className="px-3 py-2 font-semibold">{c.grade}</td>
                      <td className="px-3 py-2">{c.technique}</td>
                      <td className="px-3 py-2">{c.anesthesia}</td>
                      <td className="px-3 py-2">{c.stay}</td>
                      <td className="px-3 py-2 font-bold text-primary-700">{c.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Pricing valid for Kondapur clinic. Includes surgeon fee, anaesthesia, OT charges, post-op compression garment, and three follow-up visits. Excludes pre-op investigations (~₹3,000-5,000).
            </p>
          </div>
        </section>

        {/* ================= 7. PROCEDURE WALKTHROUGH ================= */}
        <section className="py-12 px-4 bg-primary-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">What Happens on the Day of Surgery</h2>
            <ol className="space-y-4">
              <li className="bg-white rounded-lg shadow p-5">
                <span className="font-bold text-primary-800">Step 1 — Arrival & Pre-op (30 min)</span>
                <p className="text-gray-700 mt-1">You arrive 1 hour before scheduled time. Final consent, vitals check, and pre-op photographs. Surgical markings are made while you are standing.</p>
              </li>
              <li className="bg-white rounded-lg shadow p-5">
                <span className="font-bold text-primary-800">Step 2 — Anaesthesia (15 min)</span>
                <p className="text-gray-700 mt-1">For Grade 1 — local anaesthesia with light sedation. For Grade 2-4 — short general anaesthesia administered by a board-certified anaesthetist.</p>
              </li>
              <li className="bg-white rounded-lg shadow p-5">
                <span className="font-bold text-primary-800">Step 3 — VASER Liposuction (45 min)</span>
                <p className="text-gray-700 mt-1">Through 2-3 mm hidden incisions, VASER ultrasonic energy emulsifies fat which is then suctioned. Provides smooth contouring and chest definition.</p>
              </li>
              <li className="bg-white rounded-lg shadow p-5">
                <span className="font-bold text-primary-800">Step 4 — Gland Excision (30 min, if needed)</span>
                <p className="text-gray-700 mt-1">A 2-3 cm incision along the lower border of the areola allows direct removal of the firm glandular disc. The excised tissue is sent for routine pathology.</p>
              </li>
              <li className="bg-white rounded-lg shadow p-5">
                <span className="font-bold text-primary-800">Step 5 — Closure & Garment (15 min)</span>
                <p className="text-gray-700 mt-1">Skin closed with absorbable sutures. Drain placed in some Grade 3-4 cases. Compression garment applied immediately.</p>
              </li>
              <li className="bg-white rounded-lg shadow p-5">
                <span className="font-bold text-primary-800">Step 6 — Recovery & Discharge (2-4 hours)</span>
                <p className="text-gray-700 mt-1">Observation in recovery, pain medication, light meal. Grade 1 patients walk out same day; Grade 2-4 stay overnight for monitoring.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* ================= 8. RECOVERY TIMELINE ================= */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">Recovery Timeline — Day 0 to Month 6</h2>
            <div className="space-y-3">
              {RECOVERY_TIMELINE.map((r) => (
                <div key={r.when} className="flex gap-4 bg-white border-l-4 border-primary-600 shadow-sm p-4 rounded">
                  <div className="flex-shrink-0 w-20 font-bold text-primary-700">{r.when}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{r.title}</h3>
                    <p className="text-gray-700 text-sm">{r.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 9. WHY DR. RAM PRABHU ================= */}
        <section className="py-12 px-4 bg-primary-900 text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Dr. Ram Prabhu for Gynecomastia Surgery?</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-primary-800 p-5 rounded-lg">
                <h3 className="font-bold mb-2">DNB Super Speciality Plastic Surgery</h3>
                <p className="text-primary-100 text-sm">National Board of Examinations, New Delhi (2019). The same recognition as MCh Plastic Surgery per the National Medical Commission.</p>
              </div>
              <div className="bg-primary-800 p-5 rounded-lg">
                <h3 className="font-bold mb-2">1,000+ Gynecomastia Cases</h3>
                <p className="text-primary-100 text-sm">Among the highest-volume gynecomastia surgeons in Hyderabad. All four grades, including challenging bodybuilder and steroid-induced cases.</p>
              </div>
              <div className="bg-primary-800 p-5 rounded-lg">
                <h3 className="font-bold mb-2">16+ Years Experience</h3>
                <p className="text-primary-100 text-sm">MBBS 2009, DNB 2019. 6,000+ total procedures. TSMC License No. 66931. Member of IAAPS and APSI.</p>
              </div>
              <div className="bg-primary-800 p-5 rounded-lg">
                <h3 className="font-bold mb-2">VASER & Endoscopic Techniques</h3>
                <p className="text-primary-100 text-sm">Up-to-date with the latest scarless approaches — ultrasonic liposuction, endoscopic gland excision, micro-cannulae.</p>
              </div>
              <div className="bg-primary-800 p-5 rounded-lg">
                <h3 className="font-bold mb-2">Transparent Pricing</h3>
                <p className="text-primary-100 text-sm">Fixed packages, no hidden costs, 0% interest EMI. Detailed cost breakup shared before surgery.</p>
              </div>
              <div className="bg-primary-800 p-5 rounded-lg">
                <h3 className="font-bold mb-2">Privacy & Discretion</h3>
                <p className="text-primary-100 text-sm">All consultations are confidential. Photographs are anonymized. Online consult available for outstation patients.</p>
              </div>
            </div>
          </div>
        </section>



        {/* ================= 11. VIDEO ================= */}
        <section className="py-12 px-4 bg-primary-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4 text-center">Watch: Endoscopic Scarless Gynecomastia Surgery</h2>
            <p className="text-gray-700 text-center mb-6">
              Educational video showing the modern endoscopic approach to gynecomastia correction.
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/aIgr0I-RnM4"
                title="Endoscopic Scarless Gynecomastia Surgery — Dr. Ram Prabhu"
                allow="encrypted-media; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full aspect-video rounded-lg border-0"
              />
            </div>
          </div>
        </section>

        {/* ================= 12. FAQs ================= */}
        <section id="faq" className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6 text-center">Frequently Asked Questions</h2>
            <FAQAccordion items={GYNECOMASTIA_FAQS.map((f) => ({ question: f.q, answer: f.a }))} />
          </div>
        </section>

        {/* ================= 13. BOOKING FORM ================= */}
        <section id="booking" className="py-12 px-4 bg-primary-50">
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold text-primary-900 mb-2 text-center">
              Book Your Free Gynecomastia Consultation
            </h2>
            <p className="text-sm text-gray-600 text-center mb-5">
              Reply within 1 working hour. All details kept confidential.
            </p>
            <form
              className="flex flex-col gap-4"
              action="https://formspree.io/f/mvgabrkw"
              method="POST"
            >
              <input type="hidden" name="_source" value="gynecomastia-landing" />
              <input type="hidden" name="_subject" value="New Gynecomastia Consultation Request" />
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (WhatsApp preferred) *"
                pattern="[0-9+\s-]{10,15}"
                className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <select
                name="grade"
                className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                defaultValue=""
              >
                <option value="" disabled>Suspected Grade (optional)</option>
                <option value="grade-1">Grade 1 — Mild / Mostly Fatty</option>
                <option value="grade-2">Grade 2 — Moderate / Visible Gland</option>
                <option value="grade-3">Grade 3 — Significant Enlargement</option>
                <option value="grade-4">Grade 4 — Severe with Skin Excess</option>
                <option value="not-sure">Not Sure — Need Examination</option>
              </select>
              <textarea
                name="message"
                placeholder="Anything else we should know? (optional)"
                className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                rows={3}
              />
              <button
                type="submit"
                className="bg-primary-700 text-white font-semibold px-6 py-3 rounded shadow hover:bg-primary-800 transition"
              >
                Book Free Consultation
              </button>
              <p className="text-xs text-gray-500 text-center">
                Or call <a href={`tel:${PHONE_INTL}`} className="text-primary-700 font-semibold">9949808628</a> directly.
              </p>
            </form>
          </div>
        </section>

        {/* ================= 14. LOCATION & CONTACT ================= */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">Visit Our Clinic in Kondapur</h2>
            <address className="not-italic text-gray-700 mb-3 leading-relaxed">
              1st Floor, Idea Clinic, 61B<br />
              3rd Street, Near Burfighar Sweetshop<br />
              Sri Ram Nagar, Kondapur<br />
              Hyderabad, Telangana 500084
            </address>
            <p className="text-gray-700 mb-4">
              <strong>Hours:</strong> Mon-Sat, 10:00 AM – 12:00 PM and 7:00 PM – 8:00 PM
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-white px-5 py-2 rounded shadow hover:bg-yellow-600 transition"
              >
                Get Directions
              </a>
              <a
                href={`tel:${PHONE_INTL}`}
                className="bg-primary-700 text-white px-5 py-2 rounded shadow hover:bg-primary-800 transition"
              >
                Call 9949808628
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-5 py-2 rounded shadow hover:bg-green-600 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GynecomastiaLanding;
