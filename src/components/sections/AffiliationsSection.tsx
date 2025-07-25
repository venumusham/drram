import React from 'react';
import { Award } from 'lucide-react';

const affiliations = [
  {
    name: 'National Medical Commission',
    logo: '/images/affiliations/nmc.png',
    alt: 'National Medical Commission Logo',
    description: 'Regulatory body for medical education and practice in India'
  },
  {
    name: 'Telangana State Medical Council',
    logo: '/images/affiliations/tsmc.png',
    alt: 'Telangana State Medical Council Logo',
    description: 'State medical regulatory authority'
  },
  {
    name: 'Indian Association of Aesthetic Plastic Surgeons',
    logo: '/images/affiliations/iaaps.png',
    alt: 'IAAPS Logo',
    description: 'Premier organization for aesthetic plastic surgeons in India'
  },
  {
    name: 'Association of Plastic Surgeons of India',
    logo: '/images/affiliations/apsi.png',
    alt: 'APSI Logo',
    description: 'National body representing plastic surgeons across India'
  }
];

const AffiliationsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Professional Affiliations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dr. Ram Prabhu is affiliated with prestigious medical organizations, ensuring the highest standards of practice and continuous professional development.
          </p>
        </div>
        <div className="flex overflow-x-auto gap-6 pb-4 px-1 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-primary-50">
          {affiliations.map((affiliation, index) => (
            <div
              key={index}
              className="min-w-[260px] max-w-xs bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 snap-center"
            >
              <div className="w-24 h-24 mb-4 flex items-center justify-center bg-primary-50 rounded-full overflow-hidden">
                <img
                  src={affiliation.logo}
                  alt={affiliation.alt}
                  className="w-full h-full object-contain"
                  onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.appendChild(document.createElement('span')).appendChild(document.createTextNode('🏅')); }}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{affiliation.name}</h3>
              <p className="text-sm text-gray-600">{affiliation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliationsSection; 