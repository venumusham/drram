import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import FAQAccordion from "../components/FAQAccordion";
import {
  PHONE_INTL,
  WHATSAPP_INTL,
  MAPS_URL,
} from "../components/FloatingSocialBar";

/**
 * Medical Tourism / NRI Landing — captures 710+ wasted international
 * impressions/quarter (UAE, UK, US, Qatar, Australia) at avg pos 5-6.
 *
 * Target audience:
 *   - NRI Indians visiting home for surgery
 *   - Gulf-region Indians traveling for cosmetic procedures
 *   - International patients seeking quality + value
 *
 * Target queries:
 *   - "plastic surgery in india"
 *   - "best plastic surgeon india for nri"
 *   - "cosmetic surgery cost india vs uae/uk/us"
 *   - "rhinoplasty cost india for foreigners"
 *   - "gynecomastia surgery india for nri"
 *   - "plastic surgery medical tourism hyderabad"
 */

const FAQS = [
  {
    q: "How much can I save by getting plastic surgery in India vs USA, UK, or UAE?",
    a: "Cost savings are typically 60-75% compared to USA/UK and 40-60% compared to UAE. Example: Rhinoplasty in USA $8,000-$15,000 vs India ₹70,000-₹1,80,000 ($850-$2,200). Liposuction in UK £4,000-£8,000 vs India ₹60,000-₹2,00,000 ($720-$2,400). Even with travel, accommodation, and post-op care included, total cost is significantly lower.",
  },
  {
    q: "Is plastic surgery in India safe and up to international standards?",
    a: "Yes. Dr. Ram Prabhu holds DNB (Super Speciality) Plastic Surgery from the National Board of Examinations — recognised internationally as equivalent to MCh in India and post-graduate plastic surgery boards abroad. The clinic uses FDA-approved silicone implants, modern VASER/laser equipment, and follows international safety protocols. Hospitals affiliated for major procedures are NABH-accredited.",
  },
  {
    q: "How long do I need to stay in Hyderabad for surgery and recovery?",
    a: "Minimum stay varies by procedure: Earlobe repair (2-3 days). Lipoma/Sebaceous cyst (3-5 days). Gynecomastia (5-7 days). Liposuction (7-10 days). Rhinoplasty (10-14 days). Tummy tuck (14-21 days). Facelift (14-21 days). Mommy makeover (21+ days). We schedule consultation Day 1, surgery Day 2-3, follow-ups before departure, and remote follow-up after return.",
  },
  {
    q: "Can I have a remote video consultation before traveling?",
    a: "Yes — we offer pre-travel video consultations via WhatsApp, Google Meet, or Zoom. Send 4-5 clinical photographs in advance, and Dr. Ram Prabhu will provide a preliminary assessment, suggested approach, total cost estimate, and recommended length of stay. Final assessment requires in-person examination.",
  },
  {
    q: "What documents do I need as an NRI patient?",
    a: "Indian-origin NRIs: PIO/OCI card, passport, recent medical reports (if any). Foreign nationals: passport with valid medical visa (M visa), letter from home doctor (recommended). For OCI cardholders, no medical visa is needed for short-term medical treatment.",
  },
  {
    q: "Where should I stay during my visit?",
    a: "Our clinic is in Kondapur — adjacent to Hitech City and Gachibowli, the IT hub of Hyderabad. We recommend serviced apartments or hotels within 3-5 km: ITC Kohenur, Trident Hyderabad, The Park Hyatt, Marriott Hyderabad, or budget options like Lemon Tree, Ginger, and dozens of furnished service apartments. We provide a curated accommodation list based on your budget and length of stay.",
  },
  {
    q: "Can family members travel with me and stay during recovery?",
    a: "Absolutely encouraged. A companion is highly recommended for the first 5-7 days post-surgery. Hyderabad is a major tourist hub with attractions like Charminar, Golconda Fort, Ramoji Film City, and excellent shopping and cuisine — your family can enjoy the city while you recover.",
  },
  {
    q: "How do I pay if I am paying from abroad?",
    a: "We accept international wire transfers, all major credit cards (Visa, Mastercard, Amex), UPI, and cash payment in Indian Rupees. A 30-50% deposit secures your surgery date; balance is due before procedure. We provide official invoices for insurance reimbursement requests in your home country.",
  },
  {
    q: "What if I need a medical complication after returning home?",
    a: "We provide 90 days of remote post-operative support via WhatsApp video. For any concern, message us anytime — Dr. Ram Prabhu personally reviews. If a complication requires in-person care, we coordinate with a local plastic surgeon in your home city. Most complications, when caught early via remote review, can be managed conservatively.",
  },
  {
    q: "Is medical tourism to India tax-deductible in my home country?",
    a: "In some countries (USA, Canada, parts of EU), qualifying medical expenses including travel can be tax-deductible if they exceed a threshold. We provide all documentation needed (procedure details, official invoices, medical necessity letter where applicable). Consult your home tax advisor for specifics.",
  },
  {
    q: "Can you arrange airport pickup, accommodation, and translator?",
    a: "Yes — we provide a concierge service for international patients. Airport pickup, accommodation booking, local SIM card, multilingual translator (Arabic, French, Russian, Mandarin available), and even sightseeing arrangements. This service is complimentary for procedures over ₹1,00,000.",
  },
  {
    q: "Why choose Hyderabad over Mumbai, Delhi, or Bangalore for plastic surgery?",
    a: "Hyderabad offers excellent quality at lower cost than Mumbai/Delhi (15-20% less typically). It has international airport with direct flights from UAE, UK, USA, Singapore. The IT hub area (Kondapur/Gachibowli) where we are located is modern, English-speaking, and has world-class hospitals. The city has lower air pollution than Delhi and milder weather year-round.",
  },
];

const COUNTRY_COMPARISONS = [
  {
    country: "India (Kondapur, Hyderabad)",
    currency: "USD",
    rhinoplasty: "$850 - $2,200",
    liposuction: "$720 - $2,400",
    gynecomastia: "$600 - $1,800",
    tummyTuck: "$1,700 - $3,400",
    facelift: "$1,450 - $3,600",
  },
  {
    country: "UAE (Dubai)",
    currency: "USD",
    rhinoplasty: "$5,000 - $9,000",
    liposuction: "$3,500 - $8,000",
    gynecomastia: "$3,500 - $6,000",
    tummyTuck: "$8,000 - $12,000",
    facelift: "$8,000 - $14,000",
  },
  {
    country: "UK",
    currency: "USD",
    rhinoplasty: "$5,500 - $10,000",
    liposuction: "$5,000 - $10,000",
    gynecomastia: "$4,500 - $8,000",
    tummyTuck: "$8,000 - $13,000",
    facelift: "$9,000 - $15,000",
  },
  {
    country: "USA",
    currency: "USD",
    rhinoplasty: "$8,000 - $15,000",
    liposuction: "$6,000 - $12,000",
    gynecomastia: "$4,000 - $8,500",
    tummyTuck: "$10,000 - $16,000",
    facelift: "$11,000 - $20,000",
  },
];

const PROCEDURES = [
  {
    name: "Rhinoplasty",
    priceUSD: "$850 - $2,200",
    priceINR: "₹70,000 - ₹1,80,000",
    stay: "10-14 days",
    link: "/rhinoplasty-hyderabad",
  },
  {
    name: "Gynecomastia Surgery",
    priceUSD: "$600 - $1,800",
    priceINR: "₹50,000 - ₹1,50,000",
    stay: "5-7 days",
    link: "/gynecomastia",
  },
  {
    name: "Liposuction",
    priceUSD: "$720 - $2,400",
    priceINR: "₹60,000 - ₹2,00,000",
    stay: "7-10 days",
    link: "/liposuction-hyderabad",
  },
  {
    name: "Facelift",
    priceUSD: "$1,450 - $3,600",
    priceINR: "₹1,20,000 - ₹3,00,000",
    stay: "14-21 days",
    link: "/facelift-hyderabad",
  },
  {
    name: "Breast Augmentation",
    priceUSD: "$1,450 - $3,000",
    priceINR: "₹1,20,000 - ₹2,50,000",
    stay: "7-10 days",
    link: "/breast-augmentation-hyderabad",
  },
  {
    name: "Tummy Tuck",
    priceUSD: "$1,700 - $3,400",
    priceINR: "₹1,40,000 - ₹2,80,000",
    stay: "14-21 days",
    link: "/tummy-tuck-hyderabad",
  },
];

const ITINERARY = [
  {
    day: "Day 1",
    activity:
      "Arrival in Hyderabad. Airport pickup arranged. Check-in at chosen accommodation. Rest day.",
  },
  {
    day: "Day 2",
    activity:
      "In-person consultation with Dr. Ram Prabhu (1-2 hours). Pre-op investigations: blood work, ECG, ultrasound if needed. Pre-op photographs.",
  },
  {
    day: "Day 3",
    activity:
      "Surgery day. Same-day discharge for minor procedures; overnight observation for major ones.",
  },
  {
    day: "Day 4-5",
    activity:
      "Post-op recovery at accommodation. WhatsApp follow-up + one in-person follow-up at the clinic.",
  },
  {
    day: "Day 6-7",
    activity:
      "Suture removal (if applicable). Final follow-up consultation. Discharge summary with home-country care plan.",
  },
  {
    day: "Day 8+",
    activity:
      "Departure for home country (varies by procedure). Light tourism if comfortable: Charminar, Golconda Fort, Ramoji Film City.",
  },
  {
    day: "Post-arrival",
    activity:
      "90 days of WhatsApp follow-up support. Dr. Ram Prabhu personally reviews all post-op concerns.",
  },
];

const MedicalTourismIndia: React.FC = () => {
  const url = "https://drramprabhu.com/medical-tourism-india";
  const waMessage =
    "Hello Dr. Ram Prabhu, I am an international patient interested in plastic surgery in India. Please share details about consultation and travel.";
  const waUrl = `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(waMessage)}`;

  // Schema 1: Service for medical tourism
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Plastic Surgery Medical Tourism in India",
    url,
    description:
      "Plastic surgery for NRI and international patients in Kondapur, Hyderabad — by Dr. Ram Prabhu, DNB Plastic Surgery. Cost savings 60-75% vs USA/UK, 40-60% vs UAE. Concierge service included.",
    provider: { "@id": "https://drramprabhu.com/#physician" },
    areaServed: [
      "United States",
      "United Kingdom",
      "United Arab Emirates",
      "Qatar",
      "Australia",
      "Canada",
      "Singapore",
      "Saudi Arabia",
      "Oman",
      "Bahrain",
      "Kuwait",
      "New Zealand",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

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
        name: "Medical Tourism India",
        item: url,
      },
    ],
  };

  return (
    <>
      <SEO
        title="Plastic Surgery in India for NRI ★ Save 60-75% | Dr. Ram Prabhu"
        description="Medical tourism plastic surgery for NRI & international patients in Hyderabad. Save 60-75% vs USA/UK, 40-60% vs UAE. DNB Plastic Surgeon, FDA implants, concierge service. WhatsApp 7969084444."
        keywords={[
          "plastic surgery india for nri",
          "medical tourism india plastic surgery",
          "rhinoplasty cost india for foreigners",
          "gynecomastia surgery india nri",
          "best plastic surgeon india for foreigners",
          "cosmetic surgery india vs uae",
          "plastic surgery hyderabad medical tourism",
          "india plastic surgery cost in usd",
          "plastic surgery india tax deductible",
        ]}
        image="https://drramprabhu.com/images/breast/Gynecomastia.webp"
        url={url}
        type="article"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
        {/* HERO */}
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
              <span className="text-white">Medical Tourism India</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Plastic Surgery in India — Save 60-75% vs USA / UK with Dr. Ram
              Prabhu
            </h1>
            <p className="text-primary-100 text-base md:text-lg mb-5 max-w-2xl">
              Premium plastic surgery for NRI and international patients in
              Hyderabad. DNB Super Speciality Plastic Surgeon. FDA-approved
              implants. Full concierge service: airport pickup, accommodation,
              translator, follow-up.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                ★ DNB Plastic Surgery
              </span>
              <span className="bg-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                FDA-Approved Implants
              </span>
              <span className="bg-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                Concierge Service
              </span>
              <span className="bg-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                90-Day Remote Follow-up
              </span>
              <span className="bg-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                English / Hindi / Telugu
              </span>
            </div>
            <div className="bg-yellow-300 text-primary-900 inline-block px-4 py-2 rounded-lg font-bold text-lg mb-6">
              Free Video Consultation — WhatsApp 7969084444
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white font-semibold px-4 py-3 rounded-lg shadow text-center hover:bg-green-600 transition"
                data-conversion="medtourism_hero_whatsapp"
              >
                💬 WhatsApp Consult
              </a>
              <a
                href="#booking"
                className="bg-yellow-400 text-primary-900 font-semibold px-4 py-3 rounded-lg shadow text-center hover:bg-yellow-300 transition"
                data-conversion="medtourism_hero_form"
              >
                📅 Request Quote
              </a>
              <a
                href={`tel:${PHONE_INTL}`}
                className="bg-white text-primary-900 font-semibold px-4 py-3 rounded-lg shadow text-center hover:bg-primary-50 transition"
                data-conversion="medtourism_hero_call"
              >
                📞 Call 07969084439
              </a>
            </div>
          </div>
        </section>

        {/* WHY INDIA */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
              Why International Patients Choose India for Plastic Surgery
            </h2>
            <p className="text-gray-700 mb-4">
              Over 2 million international patients travel to India annually for
              medical care, with plastic surgery being one of the
              fastest-growing specialties. The reasons are simple:{" "}
              <strong>same quality at 25-40% the cost</strong>,
              internationally-trained surgeons, modern hospital infrastructure,
              English-speaking staff, and short waiting times.
            </p>
            <p className="text-gray-700 mb-4">
              For NRI Indians, the calculation is even more favourable —
              combining a homeland visit with high-quality medical care, often
              paid for from accumulated NRE/NRO accounts. Hyderabad specifically
              attracts patients from the UAE (3-hour flight), UK, USA,
              Australia, and across Southeast Asia.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-primary-50 p-5 rounded-lg">
                <h3 className="font-bold text-primary-800 mb-2">
                  💰 60-75% Cost Savings
                </h3>
                <p className="text-sm text-gray-700">
                  Even with airfare and accommodation, total cost is far below
                  US/UK prices.
                </p>
              </div>
              <div className="bg-primary-50 p-5 rounded-lg">
                <h3 className="font-bold text-primary-800 mb-2">
                  🏥 International Standards
                </h3>
                <p className="text-sm text-gray-700">
                  DNB-qualified surgeon, NABH hospitals, FDA-approved implants,
                  modern equipment.
                </p>
              </div>
              <div className="bg-primary-50 p-5 rounded-lg">
                <h3 className="font-bold text-primary-800 mb-2">
                  ⏱️ No Waiting List
                </h3>
                <p className="text-sm text-gray-700">
                  Surgery scheduled within days, not months. Direct access to
                  senior surgeon.
                </p>
              </div>
              <div className="bg-primary-50 p-5 rounded-lg">
                <h3 className="font-bold text-primary-800 mb-2">
                  🗣️ English-Speaking Care
                </h3>
                <p className="text-sm text-gray-700">
                  Surgeon and full clinic staff fluent in English, Hindi, and
                  Telugu.
                </p>
              </div>
              <div className="bg-primary-50 p-5 rounded-lg">
                <h3 className="font-bold text-primary-800 mb-2">
                  🛬 Easy Connectivity
                </h3>
                <p className="text-sm text-gray-700">
                  Hyderabad airport with direct flights from UAE, UK, USA,
                  Singapore, Doha.
                </p>
              </div>
              <div className="bg-primary-50 p-5 rounded-lg">
                <h3 className="font-bold text-primary-800 mb-2">
                  📱 90-Day Remote Care
                </h3>
                <p className="text-sm text-gray-700">
                  Personal WhatsApp follow-up with Dr. Ram Prabhu after you
                  return home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COST COMPARISON */}
        <section className="py-12 px-4 bg-primary-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">
              Cost Comparison: India vs USA, UK, UAE
            </h2>
            <p className="text-gray-700 mb-6">
              All prices in USD for direct comparison. Indian prices include
              surgeon fee, anaesthesia, OT, hospital stay, and follow-up.
            </p>
            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="min-w-full text-sm">
                <thead className="bg-primary-700 text-white">
                  <tr>
                    <th className="px-3 py-3 text-left font-semibold">
                      Country
                    </th>
                    <th className="px-3 py-3 text-left font-semibold">
                      Rhinoplasty
                    </th>
                    <th className="px-3 py-3 text-left font-semibold">
                      Liposuction
                    </th>
                    <th className="px-3 py-3 text-left font-semibold">
                      Gynecomastia
                    </th>
                    <th className="px-3 py-3 text-left font-semibold">
                      Tummy Tuck
                    </th>
                    <th className="px-3 py-3 text-left font-semibold">
                      Facelift
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COUNTRY_COMPARISONS.map((c, i) => (
                    <tr
                      key={c.country}
                      className={
                        i === 0
                          ? "bg-yellow-50 font-semibold"
                          : i % 2 === 0
                            ? "bg-white"
                            : "bg-primary-50"
                      }
                    >
                      <td className="px-3 py-3">{c.country}</td>
                      <td className="px-3 py-3">{c.rhinoplasty}</td>
                      <td className="px-3 py-3">{c.liposuction}</td>
                      <td className="px-3 py-3">{c.gynecomastia}</td>
                      <td className="px-3 py-3">{c.tummyTuck}</td>
                      <td className="px-3 py-3">{c.facelift}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Sources: International Medical Travel Journal estimates, Patients
              Beyond Borders 2024 cost data. Indian prices reflect Dr. Ram
              Prabhu's transparent fixed packages. 1 USD ≈ ₹83 at time of
              writing.
            </p>
          </div>
        </section>

        {/* PROCEDURES */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">
              Most Popular Procedures for International Patients
            </h2>
            <p className="text-gray-700 mb-6">
              All-inclusive packages — surgeon, anaesthesia, OT, hospital,
              follow-up. EMI available for OCI/PIO cardholders.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {PROCEDURES.map((p) => (
                <Link
                  key={p.name}
                  to={p.link}
                  className="block bg-white border-2 border-primary-100 rounded-lg p-5 hover:shadow-lg hover:border-primary-300 transition"
                >
                  <h3 className="text-lg font-bold text-primary-800 mb-2">
                    {p.name}
                  </h3>
                  <div className="text-2xl font-bold text-primary-700 mb-1">
                    {p.priceUSD}
                  </div>
                  <div className="text-sm text-gray-500 mb-2">
                    ({p.priceINR})
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>Recommended stay:</strong> {p.stay}
                  </div>
                  <div className="mt-3 text-primary-600 text-sm font-semibold">
                    View details →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ITINERARY */}
        <section className="py-12 px-4 bg-primary-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">
              Your Typical Visit — Day-by-Day
            </h2>
            <div className="space-y-3">
              {ITINERARY.map((s) => (
                <div
                  key={s.day}
                  className="flex gap-4 bg-white border-l-4 border-primary-600 shadow-sm p-4 rounded"
                >
                  <div className="flex-shrink-0 w-28 font-bold text-primary-700">
                    {s.day}
                  </div>
                  <div className="text-gray-700 text-sm">{s.activity}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONCIERGE */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">
              Our International Patient Concierge Service
            </h2>
            <p className="text-gray-700 mb-6">
              Complimentary for procedures over ₹1,00,000. Optional fee-based
              service otherwise.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-primary-100 rounded-lg p-5">
                <h3 className="font-bold text-primary-800 mb-2">
                  🛬 Travel Support
                </h3>
                <ul className="text-gray-700 text-sm space-y-1 list-disc pl-4">
                  <li>Airport pickup and drop</li>
                  <li>Local SIM with data plan</li>
                  <li>Currency exchange guidance</li>
                  <li>Medical visa documentation</li>
                </ul>
              </div>
              <div className="bg-white border border-primary-100 rounded-lg p-5">
                <h3 className="font-bold text-primary-800 mb-2">
                  🏨 Accommodation
                </h3>
                <ul className="text-gray-700 text-sm space-y-1 list-disc pl-4">
                  <li>Curated 5★, 4★, and budget hotel options</li>
                  <li>Serviced apartments for longer stays</li>
                  <li>All within 3-5 km of clinic</li>
                  <li>Companion-friendly rooms</li>
                </ul>
              </div>
              <div className="bg-white border border-primary-100 rounded-lg p-5">
                <h3 className="font-bold text-primary-800 mb-2">
                  🗣️ Language Support
                </h3>
                <ul className="text-gray-700 text-sm space-y-1 list-disc pl-4">
                  <li>English, Hindi, Telugu (clinic staff)</li>
                  <li>Arabic, French translator on request</li>
                  <li>WhatsApp video consult pre-travel</li>
                  <li>Written instructions in your language</li>
                </ul>
              </div>
              <div className="bg-white border border-primary-100 rounded-lg p-5">
                <h3 className="font-bold text-primary-800 mb-2">
                  🌆 Tourism (Optional)
                </h3>
                <ul className="text-gray-700 text-sm space-y-1 list-disc pl-4">
                  <li>Charminar & Old City</li>
                  <li>Golconda Fort</li>
                  <li>Ramoji Film City (world's largest film studio)</li>
                  <li>Hyderabadi cuisine recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DOCTOR */}
        <section className="py-12 px-4 bg-primary-900 text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Your Surgeon — Dr. M. Ram Prabhu
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-primary-800 p-5 rounded-lg">
                <h3 className="font-bold mb-2">
                  🎓 DNB Super Speciality Plastic Surgery
                </h3>
                <p className="text-primary-100 text-sm">
                  National Board of Examinations, New Delhi (2019). Recognised
                  internationally as equivalent to MCh in India.
                </p>
              </div>
              <div className="bg-primary-800 p-5 rounded-lg">
                <h3 className="font-bold mb-2">📅 16+ Years Experience</h3>
                <p className="text-primary-100 text-sm">
                  MBBS 2009. 6,000+ procedures across cosmetic and
                  reconstructive surgery.
                </p>
              </div>
              <div className="bg-primary-800 p-5 rounded-lg">
                <h3 className="font-bold mb-2">🏛️ TSMC Reg #66931</h3>
                <p className="text-primary-100 text-sm">
                  Telangana State Medical Council. NMC registered. IAAPS & APSI
                  member.
                </p>
              </div>
              <div className="bg-primary-800 p-5 rounded-lg">
                <h3 className="font-bold mb-2">⭐ 140+ Google Reviews</h3>
                <p className="text-primary-100 text-sm">
                  Read verified patient experiences on the Google Business
                  Profile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6 text-center">
              Frequently Asked Questions — Medical Tourism
            </h2>
            <FAQAccordion
              items={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
            />
          </div>
        </section>

        {/* BOOKING */}
        <section id="booking" className="py-12 px-4 bg-primary-50">
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold text-primary-900 mb-2 text-center">
              Request International Patient Quote
            </h2>
            <p className="text-sm text-gray-600 text-center mb-5">
              Reply within 24 hours. Free video consultation.
            </p>
            <form
              className="flex flex-col gap-4"
              action="https://formspree.io/f/mvgabrkw"
              method="POST"
            >
              <input type="hidden" name="_source" value="medical-tourism" />
              <input
                type="hidden"
                name="_subject"
                value="New International Patient Inquiry"
              />
              <input
                type="text"
                name="name"
                placeholder="Your Full Name *"
                className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone / WhatsApp (with country code) *"
                className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <input
                type="text"
                name="country"
                placeholder="Country of Residence *"
                className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <select
                name="procedure"
                className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Procedure of Interest *
                </option>
                <option value="rhinoplasty">Rhinoplasty</option>
                <option value="gynecomastia">Gynecomastia Surgery</option>
                <option value="liposuction">Liposuction</option>
                <option value="facelift">Facelift</option>
                <option value="breast-augmentation">Breast Augmentation</option>
                <option value="tummy-tuck">Tummy Tuck</option>
                <option value="mommy-makeover">Mommy Makeover</option>
                <option value="multiple">Multiple Procedures</option>
                <option value="not-sure">Not Sure — Need Consultation</option>
              </select>
              <textarea
                name="message"
                placeholder="Tell us your concerns and timeline (optional)"
                className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                rows={3}
              />
              <button
                type="submit"
                className="bg-primary-700 text-white font-semibold px-6 py-3 rounded shadow hover:bg-primary-800 transition"
              >
                Request Free Video Consultation
              </button>
              <p className="text-xs text-gray-500 text-center">
                Or WhatsApp{" "}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-700 font-semibold"
                >
                  07969084439
                </a>{" "}
                for instant response.
              </p>
            </form>
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
              Visit Our Clinic in Hyderabad
            </h2>
            <address className="not-italic text-gray-700 mb-3 leading-relaxed">
              Lux Hospitals, Plot No.116 Lumbini Avenue,<br />Gachibowli Near IKEA,<br />Hyderabad – 500081
            </address>
            <p className="text-gray-700 mb-4">
              <strong>Hours:</strong> Mon-Sat, 10AM-12PM and 7PM-8PM (IST)
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

export default MedicalTourismIndia;
