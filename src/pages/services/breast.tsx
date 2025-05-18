import React from 'react';
import { Link } from 'react-router-dom';

const procedures = [
  {
    title: 'Breast Augmentation',
    description: 'Enhances breast size and shape using implants or fat transfer for a fuller, more balanced appearance.',
    image: '/images/breast/Breast-Augmentation.jpg',
  },
  {
    title: 'Breast Reduction',
    description: 'Reduces breast size to improve comfort, posture, and overall body proportion.',
    image: '/images/breast/Breast-reduction.jpg',
  },
  {
    title: 'Mastopexy',
    description: 'Lifts and reshapes sagging breasts to restore a more youthful position and contour.',
    image: '/images/breast/Mastopexy.jpg',
  },
  {
    title: 'Breast Reconstruction',
    description: 'Restores breast shape and volume after mastectomy or other breast surgeries.',
    image: '/images/breast/Breast-Reconstruction.jpg',
  },
  {
    title: 'Gynecomastia',
    description: 'Reduces excess breast tissue in men for a more masculine chest contour.',
    image: '/images/breast/Gynecomastia.jpg',
  },
];

const BreastPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url(/images/breast/breast-hero.jpg)'}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white px-6 py-3 rounded">Breast Surgery</h1>
      </div>

      {/* Description */}
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-primary-800">Achieve Your Desired Breast Shape</h2>
        <p className="mb-4 text-gray-800">
          Dr. Ram Prabhu offers a comprehensive range of breast surgery procedures to enhance your natural beauty and confidence. Whether you're looking to increase size, reduce volume, lift sagging breasts, or reconstruct after medical procedures, we provide personalized solutions tailored to your goals.
        </p>
      </div>

      {/* Procedures */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-primary-800">Breast Surgery Procedures</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((proc, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg shadow p-4 flex flex-col items-center">
              <img src={proc.image} alt={proc.title} className="rounded mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-semibold mb-2 text-primary-700">{proc.title}</h3>
              <p className="text-gray-700 text-center">{proc.description}</p>
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
  );
};

export default BreastPage; 