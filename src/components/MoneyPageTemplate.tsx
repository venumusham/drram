import React from "react";
import { Link } from "react-router-dom";
import SEO from "./SEO";
import FAQAccordion from "./FAQAccordion";
import { PHONE_INTL, WHATSAPP_INTL, MAPS_URL } from "./FloatingSocialBar";
import WhatsappLink from "./ui/WhatsappLink";

/**
 * Reusable template for service "money pages" — long-form, SEO-optimized
 * landing pages built from the gynecomastia template.
 *
 * Each page passes a structured `MoneyPageData` object; this component handles
 * layout, schema generation, conversion CTAs, and all SEO scaffolding.
 *
 * Pages using this:
 *   - rhinoplasty-hyderabad
 *   - liposuction-hyderabad
 *   - facelift-hyderabad
 *   - breast-augmentation-hyderabad
 *   - tummy-tuck-hyderabad
 *   - lipoma-removal-hyderabad
 *   - earlobe-repair-kondapur
 */

export interface ProcedureCard {
  /** e.g., "Open Rhinoplasty" */
  title: string;
  /** Short description shown in the card */
  description: string;
  /** Best fit / indication */
  bestFor?: string;
  /** Approx duration like "2-3 hours" */
  duration?: string;
  /** Anaesthesia type */
  anesthesia?: string;
  /** Hospital stay */
  stay?: string;
  /** Price range like "₹70,000 — ₹1,00,000" */
  price?: string;
}

export interface RecoveryStep {
  /** e.g., "Day 1-3" */
  when: string;
  /** Short title like "Initial recovery" */
  title: string;
  /** Detail paragraph */
  detail: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface MoneyPageData {
  /** URL slug like "rhinoplasty-hyderabad" */
  slug: string;
  /** Procedure name like "Rhinoplasty" */
  procedureName: string;
  /** SERP title like "Rhinoplasty Hyderabad ★ from ₹70K | Dr. Ram Prabhu" */
  seoTitle: string;
  /** Meta description (≤160 chars) */
  seoDescription: string;
  /** Keyword array for the SEO component */
  seoKeywords: string[];
  /** Hero H1 — full descriptive headline */
  h1: string;
  /** Hero subheadline (2-3 lines) */
  heroSubheadline: string;
  /** Pill-shaped trust badges in hero (4-6 items) */
  heroBadges: string[];
  /** Starting price band like "from ₹50,000" */
  heroPriceBand: string;
  /** Hero image URL (used in OG + schema) */
  heroImage: string;
  /** Schema.org price min/max as string numbers */
  priceMin: string;
  priceMax: string;
  /**
   * "What is X" section — 2-4 paragraphs of educational content.
   * Plain strings; HTML supported via `dangerouslySetInnerHTML`-style escapes
   * are NOT supported here — write clean prose. For bold/strong markup, use
   * the helper renderers in the page or add a `richIntro` if needed.
   */
  whatIsParagraphs: string[];
  /** Optional "Causes" list (8-10 items) */
  causes?: string[];
  /** Optional "Symptoms / Signs" list */
  symptoms?: string[];
  /** Procedure types/cards (3-6 entries) */
  procedures: ProcedureCard[];
  /** Step-by-step procedure walkthrough (5-7 steps) */
  walkthrough: { step: string; title: string; detail: string }[];
  /** Recovery timeline (5-7 entries) */
  recovery: RecoveryStep[];
  /** Before/after image URL */
  beforeAfterImage: string;
  /** Optional: video embed URL */
  videoEmbedUrl?: string;
  /** FAQs (8-12 items) — also become FAQPage schema */
  faqs: FAQ[];
  /** Suggested grades / select options for the form (optional) */
  formGradeOptions?: string[];
  /** Subject line for Formspree email */
  formSubject: string;
  /** Pre-filled WhatsApp message */
  whatsappMessage: string;
  /** Internal links to related pages (footer-of-content cluster) */
  relatedPages?: { url: string; label: string }[];
}

const MoneyPageTemplate: React.FC<{ data: MoneyPageData }> = ({ data }) => {
  const url = `https://drramprabhu.com/${data.slug}`;
  const waUrl = `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(data.whatsappMessage)}`;

  // Schema 1: MedicalProcedure
  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${url}#procedure`,
    name: data.procedureName + " in Hyderabad",
    url,
    image: data.heroImage,
    description: data.seoDescription,
    medicalSpecialty: "PlasticSurgery",
    procedureType: "https://schema.org/SurgicalProcedure",
    areaServed: [
      "Hyderabad",
      "Kondapur",
      "Gachibowli",
      "Madhapur",
      "Hitech City",
      "Telangana",
    ],
    performer: { "@id": "https://drramprabhu.com/#physician" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: data.priceMin,
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        minPrice: data.priceMin,
        maxPrice: data.priceMax,
        valueAddedTaxIncluded: true,
      },
      url,
    },
  };

  // Schema 2: FAQPage matches the rendered FAQ content exactly.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // Schema 3: BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://drramprabhu.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://drramprabhu.com/services",
      },
      { "@type": "ListItem", position: 3, name: data.procedureName, item: url },
    ],
  };

  return (
    <>
      <SEO
        title={data.seoTitle}
        description={data.seoDescription}
        keywords={data.seoKeywords}
        image={data.heroImage}
        url={url}
        type="article"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="relative min-h-screen bg-white">
        {/* ============ 1. HERO ============ */}
        <section className="pt-8 pb-10 px-4 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
          <div className="max-w-4xl mx-auto">
            <nav
              className="text-xs text-primary-200 mb-3"
              aria-label="Breadcrumb"
            >
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">›</span>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
              <span className="mx-2">›</span>
              <span className="text-white">{data.procedureName}</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {data.h1}
            </h1>
            <p className="text-primary-100 text-base md:text-lg mb-5 max-w-2xl">
              {data.heroSubheadline}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {data.heroBadges.map((b) => (
                <span
                  key={b}
                  className="bg-primary-700 px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {b}
                </span>
              ))}
            </div>
            <div className="bg-yellow-300 text-primary-900 inline-block px-4 py-2 rounded-lg font-bold text-lg mb-6">
              {data.heroPriceBand} — Free Consultation
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
              <a
                href={`tel:${PHONE_INTL}`}
                className="bg-white text-primary-900 font-semibold px-4 py-3 rounded-lg shadow text-center hover:bg-primary-50 transition"
                data-conversion={`${data.slug}_hero_call`}
              >
                📞 Call 07969084439
              </a>
              <WhatsappLink
                href={waUrl}
                formType="Money Page Hero WhatsApp"
                condition={data.procedureName}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white font-semibold px-4 py-3 rounded-lg shadow text-center hover:bg-green-600 transition"
                data-conversion={`${data.slug}_hero_whatsapp`}
              >
                💬 WhatsApp Now
              </WhatsappLink>
              <a
                href="#booking"
                className="bg-yellow-400 text-primary-900 font-semibold px-4 py-3 rounded-lg shadow text-center hover:bg-yellow-300 transition"
                data-conversion={`${data.slug}_hero_form`}
              >
                📅 Book Online
              </a>
            </div>
          </div>
        </section>

        {/* ============ 2. WHAT IS ============ */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
              What Is {data.procedureName}?
            </h2>
            {data.whatIsParagraphs.map((p, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* ============ 3. CAUSES & SYMPTOMS (optional) ============ */}
        {(data.causes || data.symptoms) && (
          <section className="py-12 px-4 bg-primary-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">
                Causes & Indications
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {data.causes && (
                  <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold text-primary-800 mb-3">
                      Common Causes
                    </h3>
                    <ul className="text-gray-700 space-y-2 list-disc pl-5">
                      {data.causes.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {data.symptoms && (
                  <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold text-primary-800 mb-3">
                      Signs You May Need {data.procedureName}
                    </h3>
                    <ul className="text-gray-700 space-y-2 list-disc pl-5">
                      {data.symptoms.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ============ 4. PROCEDURE TYPES ============ */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">
              Types of {data.procedureName} We Offer
            </h2>
            <p className="text-gray-700 mb-6">
              Each technique is selected based on your anatomy, goals, and
              clinical examination by Dr. Ram Prabhu.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.procedures.map((p) => (
                <div
                  key={p.title}
                  className="bg-white border-2 border-primary-100 rounded-lg p-5 hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-bold text-primary-800">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{p.description}</p>
                  {p.bestFor && (
                    <p className="text-sm text-gray-700">
                      <strong>Best for:</strong> {p.bestFor}
                    </p>
                  )}
                  {p.duration && (
                    <p className="text-sm text-gray-700">
                      <strong>Duration:</strong> {p.duration}
                    </p>
                  )}
                  {p.anesthesia && (
                    <p className="text-sm text-gray-700">
                      <strong>Anaesthesia:</strong> {p.anesthesia}
                    </p>
                  )}
                  {p.stay && (
                    <p className="text-sm text-gray-700">
                      <strong>Stay:</strong> {p.stay}
                    </p>
                  )}
                  {p.price && (
                    <div className="mt-3 text-primary-700 font-bold">
                      {p.price}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 5. COST TABLE ============ */}
        <section className="py-12 px-4 bg-primary-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">
              {data.procedureName} Cost in Hyderabad
            </h2>
            <p className="text-gray-700 mb-6">
              Transparent fixed-package pricing.{" "}
              <strong>No hidden charges.</strong> 0% interest EMI available for
              6, 9, and 12 months.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-sm bg-white">
                <thead className="bg-primary-100 text-primary-900">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">
                      Procedure Type
                    </th>
                    <th className="px-3 py-2 text-left font-semibold">
                      Best For
                    </th>
                    <th className="px-3 py-2 text-left font-semibold">
                      Duration
                    </th>
                    <th className="px-3 py-2 text-left font-semibold">
                      Price (INR)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.procedures.map((p, i) => (
                    <tr
                      key={p.title}
                      className={i % 2 === 0 ? "bg-white" : "bg-primary-50"}
                    >
                      <td className="px-3 py-2 font-semibold">{p.title}</td>
                      <td className="px-3 py-2">{p.bestFor || "—"}</td>
                      <td className="px-3 py-2">{p.duration || "—"}</td>
                      <td className="px-3 py-2 font-bold text-primary-700">
                        {p.price || "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Pricing valid for the Kondapur clinic. Includes surgeon fee,
              anaesthesia, OT charges, and follow-up visits. Excludes pre-op
              investigations (~₹3,000-5,000).
            </p>
          </div>
        </section>

        {/* ============ 6. PROCEDURE WALKTHROUGH ============ */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">
              What Happens on the Day of {data.procedureName}
            </h2>
            <ol className="space-y-4">
              {data.walkthrough.map((s) => (
                <li
                  key={s.step}
                  className="bg-white border-l-4 border-primary-600 shadow-sm p-5 rounded"
                >
                  <span className="font-bold text-primary-800">
                    {s.step} — {s.title}
                  </span>
                  <p className="text-gray-700 mt-1">{s.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ 7. RECOVERY TIMELINE ============ */}
        <section className="py-12 px-4 bg-primary-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">
              Recovery Timeline
            </h2>
            <div className="space-y-3">
              {data.recovery.map((r) => (
                <div
                  key={r.when}
                  className="flex gap-4 bg-white border-l-4 border-primary-600 shadow-sm p-4 rounded"
                >
                  <div className="flex-shrink-0 w-20 font-bold text-primary-700">
                    {r.when}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{r.title}</h3>
                    <p className="text-gray-700 text-sm">{r.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 8. WHY DR. RAM PRABHU ============ */}
        <section className="py-12 px-4 bg-primary-900 text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Why Choose Dr. Ram Prabhu for {data.procedureName}?
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-primary-800 p-5 rounded-lg">
                <h3 className="font-bold mb-2">
                  DNB Super Speciality Plastic Surgery
                </h3>
                <p className="text-primary-100 text-sm">
                  National Board of Examinations, New Delhi (2019). Recognised
                  by NMC as equivalent to MCh Plastic Surgery.
                </p>
              </div>
              <div className="bg-primary-800 p-5 rounded-lg">
                <h3 className="font-bold mb-2">16+ Years Experience</h3>
                <p className="text-primary-100 text-sm">
                  MBBS 2009, DNB 2019. 6,000+ total procedures across the
                  spectrum of cosmetic and reconstructive surgery.
                </p>
              </div>
              <div className="bg-primary-800 p-5 rounded-lg">
                <h3 className="font-bold mb-2">Member of IAAPS & APSI</h3>
                <p className="text-primary-100 text-sm">
                  Indian Association of Aesthetic Plastic Surgeons and
                  Association of Plastic Surgeons of India. TSMC License No.
                  66931.
                </p>
              </div>
              <div className="bg-primary-800 p-5 rounded-lg">
                <h3 className="font-bold mb-2">Modern Techniques</h3>
                <p className="text-primary-100 text-sm">
                  Up-to-date with the latest techniques, equipment, and
                  post-operative protocols. Continuous learning at conferences
                  and workshops.
                </p>
              </div>
              <div className="bg-primary-800 p-5 rounded-lg">
                <h3 className="font-bold mb-2">Transparent Pricing</h3>
                <p className="text-primary-100 text-sm">
                  Fixed packages, no hidden costs, 0% interest EMI. Detailed
                  cost breakup shared before surgery.
                </p>
              </div>
              <div className="bg-primary-800 p-5 rounded-lg">
                <h3 className="font-bold mb-2">140+ Google Reviews</h3>
                <p className="text-primary-100 text-sm">
                  Read patient experiences and outcomes on our verified Google
                  Business Profile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 10. VIDEO (optional) ============ */}
        {data.videoEmbedUrl && (
          <section className="py-12 px-4 bg-primary-50">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4 text-center">
                Watch: {data.procedureName} Explained
              </h2>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={data.videoEmbedUrl}
                  title={`${data.procedureName} — Dr. Ram Prabhu`}
                  allow="encrypted-media; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="w-full aspect-video rounded-lg border-0"
                />
              </div>
            </div>
          </section>
        )}

        {/* ============ 11. FAQs ============ */}
        <section id="faq" className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion
              items={data.faqs.map((f) => ({ question: f.q, answer: f.a }))}
            />
          </div>
        </section>

        {/* ============ 12. BOOKING FORM ============ */}
        <section id="booking" className="py-12 px-4 bg-primary-50">
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold text-primary-900 mb-2 text-center">
              Book Your Free {data.procedureName} Consultation
            </h2>
            <p className="text-sm text-gray-600 text-center mb-5">
              Reply within 1 working hour. All details kept confidential.
            </p>
            <form
              className="flex flex-col gap-4"
              action="https://formspree.io/f/mvgabrkw"
              method="POST"
            >
              <input type="hidden" name="_source" value={data.slug} />
              <input type="hidden" name="_subject" value={data.formSubject} />
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
              {data.formGradeOptions && data.formGradeOptions.length > 0 && (
                <select
                  name="variant"
                  className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Procedure variant (optional)
                  </option>
                  {data.formGradeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              )}
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
                Book Consultation
              </button>
              <p className="text-xs text-gray-500 text-center">
                Or call{" "}
                <a
                  href={`tel:${PHONE_INTL}`}
                  className="text-primary-700 font-semibold"
                >
                  07969084439
                </a>{" "}
                directly.
              </p>
            </form>
          </div>
        </section>

        {/* ============ 13. RELATED PAGES (internal linking) ============ */}
        {data.relatedPages && data.relatedPages.length > 0 && (
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-primary-900 mb-4 text-center">
                Related Procedures
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {data.relatedPages.map((r) => (
                  <Link
                    key={r.url}
                    to={r.url}
                    className="bg-white border-2 border-primary-200 text-primary-700 font-semibold px-5 py-2 rounded-full hover:bg-primary-50 transition"
                  >
                    {r.label} →
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============ 14. LOCATION & CONTACT ============ */}
        <section className="py-12 px-4 bg-primary-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
              Visit Our Clinic in Gachobowli
            </h2>
            <address className="not-italic text-gray-700 mb-3 leading-relaxed">
              Lux Hospitals, Plot No.116 Lumbini Avenue,<br />Gachibowli Near IKEA,<br />Hyderabad – 500081
            </address>
            <p className="text-gray-700 mb-4">
              <strong>Hours:</strong> Mon-Sat, 10:00 AM – 12:00 PM and 7:00 PM –
              8:00 PM
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
                Call 07969084439
              </a>
              <WhatsappLink
                href={waUrl}
                formType="Money Page Footer WhatsApp"
                condition={data.procedureName}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-5 py-2 rounded shadow hover:bg-green-600 transition"
              >
                WhatsApp
              </WhatsappLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MoneyPageTemplate;
