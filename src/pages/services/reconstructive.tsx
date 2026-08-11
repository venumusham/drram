import React from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';
import SEO from '../../components/SEO';

const procedures = [
  {
    title: 'Scar Revision',
    description: 'Improves the appearance of scars to make them less noticeable and more consistent with your skin tone.',
    details: [
      'Reduces scar visibility and improves texture',
      'Enhances skin color and tone',
      'Minimizes functional limitations',
      'Improves self-confidence',
      'Advanced techniques for optimal results'
    ],
    image: '/images/reconstruction/Scar-Revision.webp',
  },
  {
    title: 'Post-Trauma Reconstruction',
    description: 'Restores function and appearance after accidents, injuries, or trauma.',
    details: [
      'Restores natural appearance',
      'Improves functionality',
      'Minimizes scarring',
      'Addresses complex injuries',
      'Personalized treatment plans'
    ],
    image: '/images/reconstruction/Post-Trauma-Reconstruction.webp',
  },
  {
    title: 'Cancer Reconstruction',
    description: 'Rebuilds areas affected by cancer surgery, restoring both form and function.',
    details: [
      'Comprehensive reconstruction options',
      'Natural-looking results',
      'Improved quality of life',
      'Minimal scarring techniques',
      'Ongoing support and care'
    ],
    image: '/images/reconstruction/Cancer-Reconstruction.webp',
  },
  {
    title: 'Congenital Reconstruction',
    description: 'Corrects birth defects and developmental abnormalities to improve function and appearance.',
    details: [
      'Early intervention options',
      'Age-appropriate treatments',
      'Minimally invasive techniques',
      'Comprehensive care approach',
      'Long-term follow-up care'
    ],
    image: '/images/reconstruction/congenital-reconstruction.webp',
  },
  {
    title: 'Microsurgery',
    description: 'Advanced techniques for tissue transfer and reattachment of severed body parts.',
    details: [
      'Precise tissue reconstruction',
      'Minimal scarring',
      'Improved functionality',
      'Natural-looking results',
      'Comprehensive rehabilitation'
    ],
    image: '/images/reconstruction/Microsurgery.webp',
  },
];

export const ReconstructivePage: React.FC = () => {
  useScrollToTop();

  return (
    <>
      <SEO
        title="Reconstructive Plastic Surgery Hyderabad | Microsurgery | Dr. Ram Prabhu"
        description="Reconstructive surgery in Kondapur Hyderabad — scar revision, post-trauma repair, cancer reconstruction, cleft lip & palate, microvascular surgery. Dr. Ram Prabhu, DNB. 07969084439."
        keywords={[
          'reconstructive surgery hyderabad',
          'scar revision specialist',
          'cancer reconstruction hyderabad',
          'microsurgery india',
          'post trauma reconstruction dr ram'
        ]}
        image="/images/reconstruction/reconstructive-hero.webp"
        url="https://drramprabhu.com/services/reconstructive"
        type="article"
      />
      <div className="bg-white min-h-screen pb-12">
        {/* Hero Section */}
        <div className="relative w-full h-64 md:h-80 bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url(/images/reconstruction/reconstructive-hero.webp)'}}>
          <div className="absolute inset-0 bg-black/60"></div>
          <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white px-6 py-3 rounded">Reconstructive Surgery</h1>
        </div>

        {/* Description */}
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4 text-primary-800">Restore Function and Appearance</h2>
          <p className="mb-4 text-gray-800">
            Dr. Ram Prabhu specializes in reconstructive surgery procedures that restore both function and appearance. Whether you're dealing with scars, burns, trauma, or congenital conditions, our comprehensive approach helps you achieve the best possible outcomes.
          </p>
          <div className="mt-6 rounded-xl border border-primary-100 bg-primary-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">Published reconstructive case report</p>
            <h3 className="mb-2 text-lg font-bold text-primary-900">Nasal Reconstruction Using Two Staged Nasolabial Flap</h3>
            <p className="mb-3 text-sm leading-7 text-gray-700">
              Dr. Ramprabhu Musham authored this 2023 case report on full-thickness nasal tip, alar, columellar, and upper-lip trauma managed with wound debridement, lip repair, a superiorly based nasolabial flap, staged flap division, and revision under local anaesthesia.
            </p>
            <a
              href="https://www.medicalandresearch.com/previous_view/1242"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary-800 underline decoration-primary-300 underline-offset-4 hover:text-primary-950"
            >
              Read the published paper
            </a>
          </div>
        </div>

        {/* Procedures */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.map((proc, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                <img src={proc.image} alt={proc.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-primary-700">{proc.title}</h3>
                  <p className="text-gray-700 mb-3 text-sm">{proc.description}</p>
                  <ul className="space-y-1">
                    {proc.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="flex items-start text-sm">
                        <span className="text-primary-600 mr-2">•</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Before & After Gallery */}
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-primary-800">Before & After</h2>
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="/images/reconstruction/before-after.webp" 
                alt="Before and After Results" 
                className="rounded-lg shadow-lg w-full max-w-md" 
              />
              <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded">Before</div>
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded">After</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="container mx-auto px-4 py-8 text-center">
          <Link to="/contact" className="bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition">
            Schedule a Consultation
          </Link>
          <div className="mt-4">
            <Link to="/services" className="text-primary-700 hover:underline">Back to Services</Link>
          </div>
        </div>
      </div>
    </>
  );
}; 
