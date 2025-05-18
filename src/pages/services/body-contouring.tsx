import React from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';

const procedures = [
  {
    title: 'Liposuction',
    description: 'Removes stubborn fat deposits to sculpt and contour your body shape.',
    image: '/images/body/lipo.jpg',
  },
  {
    title: 'Tummy Tuck',
    description: 'Tightens abdominal muscles and removes excess skin for a flatter, firmer midsection.',
    image: '/images/body/tummy.jpg',
  },
  {
    title: 'Body Lift',
    description: 'Comprehensive procedure to address excess skin and fat throughout the body.',
    image: '/images/body/bodfylift.jpg',
  },
  {
    title: 'Brachioplasty',
    description: 'Removes excess skin and fat from the upper arms for a more toned appearance.',
    image: '/images/body/Brachioplasty.jpg',
  },
  {
    title: 'Thigh Lift',
    description: 'Improves the shape and tone of the thighs by removing excess skin and fat.',
    image: '/images/body/thighlift.jpg',
  },
];

const BodyContouringPage: React.FC = () => {
  useScrollToTop();

  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url(/images/body/body-contouring.jpg)'}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white px-6 py-3 rounded">Body Contouring</h1>
      </div>

      {/* Description */}
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-primary-800">Achieve Your Ideal Body Shape</h2>
        <p className="mb-4 text-gray-800">
          Body contouring procedures help sculpt and refine your body shape by removing excess fat and skin. Dr. Ram Prabhu offers a range of body contouring techniques tailored to your specific needs, helping you achieve a more toned and defined physique.
        </p>
      </div>

      {/* Procedures */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-primary-800">Body Contouring Procedures</h2>
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
              src="/images/body/before-after.jpg" 
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

export default BodyContouringPage; 