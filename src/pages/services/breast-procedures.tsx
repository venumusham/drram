import React from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';
import SEO from '../../components/SEO';

const procedures = [
  {
    title: 'Breast Augmentation',
    description: 'Enhances breast size and shape using implants or fat transfer for a fuller, more balanced appearance.',
    details: [
      'Customized implant selection based on your body type and goals',
      'Options for silicone or saline implants',
      'Fat transfer augmentation available for natural results',
      'Minimal scarring with advanced surgical techniques',
      'Personalized recovery plan for optimal results'
    ],
    image: '/images/breast/Breast-Augmentation.jpg',
  },
  {
    title: 'Breast Reduction',
    description: 'Reduces breast size to improve comfort, posture, and overall body proportion.',
    details: [
      'Relieves back, neck, and shoulder pain',
      'Improves posture and physical activity comfort',
      'Creates a more balanced body proportion',
      'Reduces skin irritation and rashes',
      'Enhances clothing fit and style options'
    ],
    image: '/images/breast/Breast-reduction.jpg',
  },
  {
    title: 'Mastopexy',
    description: 'Lifts and reshapes sagging breasts to restore a more youthful position and contour.',
    details: [
      'Corrects breast ptosis (sagging)',
      'Improves breast shape and position',
      'Can be combined with augmentation or reduction',
      'Minimizes scarring with advanced techniques',
      'Restores youthful breast appearance'
    ],
    image: '/images/breast/Mastopexy.jpg',
  },
  {
    title: 'Breast Reconstruction',
    description: 'Restores breast shape and volume after mastectomy or other breast surgeries.',
    details: [
      'Immediate or delayed reconstruction options',
      'Natural-looking results with advanced techniques',
      'Symmetrical breast appearance',
      'Minimal scarring with careful incision placement',
      'Comprehensive post-surgery support'
    ],
    image: '/images/breast/Breast-Reconstruction.jpg',
  },
  {
    title: 'Gynecomastia',
    description: 'Reduces excess breast tissue in men for a more masculine chest contour.',
    details: [
      'Removes excess glandular tissue and fat',
      'Improves chest contour and definition',
      'Boosts confidence and self-image',
      'Minimal scarring with advanced techniques',
      'Quick recovery with proper care'
    ],
    image: '/images/breast/Gynecomastia.jpg',
  },
];

const BreastProceduresPage: React.FC = () => {
  useScrollToTop();

  return (
    <>
      <SEO
        title="Breast Surgery in Hyderabad | Augmentation, Lift & Reconstruction"
        description="Explore breast augmentation, reduction, lift, reconstruction, and gynecomastia procedures by Dr. Ram Prabhu with personalized surgical plans in Hyderabad."
        keywords={[
          'breast augmentation hyderabad',
          'breast reduction telangana',
          'mastopexy surgeon hyderabad',
          'breast reconstruction india',
          'male breast reduction doctor'
        ]}
        image="/images/breast/breast-hero.jpg"
        url="https://drramprabhu.com/services/breast-procedures"
        type="article"
      />
      <div className="bg-white min-h-screen pb-12">
        {/* Hero Section */}
        <div className="relative w-full h-64 md:h-80 bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url(/images/breast/breast-hero.jpg)'}}>
          <div className="absolute inset-0 bg-black/60"></div>
          <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white px-6 py-3 rounded">Breast Procedures</h1>
        </div>

        {/* Description */}
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4 text-primary-800">Comprehensive Breast Surgery Solutions</h2>
          <p className="mb-4 text-gray-800">
            Dr. Ram Prabhu offers a complete range of breast surgery procedures to help you achieve your desired look. Each procedure is customized to your unique needs, ensuring natural-looking results that enhance your confidence and well-being.
          </p>
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
                src="/images/breast/Gynecomastia-before-after.jpeg" 
                alt="Before and After Results" 
                className="rounded-lg shadow-lg w-full max-w-lg" 
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

export default BreastProceduresPage; 