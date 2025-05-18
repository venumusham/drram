import React from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';

const procedures = [
  {
    title: 'Traditional Facelift',
    description: 'Addresses sagging skin, deep creases, and loss of muscle tone in the face and neck.',
    image: '/images/facelift/facelift.jpg',
  },
  {
    title: 'Mini Facelift',
    description: 'A less invasive option for mild to moderate sagging, focusing on the lower face and jawline.',
    image: '/images/facelift/mini-facelift.jpg',
  },
  {
    title: 'Neck Lift',
    description: 'Targets loose neck skin and excess fat for a smoother, more youthful neck contour.',
    image: '/images/facelift/neck-facelift.jpg',
  },
  {
    title: 'Mid-Facelift',
    description: 'Lifts and tightens the cheeks and mid-face area for a refreshed appearance.',
    image: '/images/facelift/mid-facelift.jpg',
  },
];

const FaceliftPage: React.FC = () => {
  useScrollToTop();

  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url(/images/facelift/fg.jpg)'}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white px-6 py-3 rounded">Facelift</h1>
      </div>

      {/* Description */}
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-primary-800">Restore a Youthful, Refreshed Look</h2>
        <p className="mb-4 text-gray-800">
          A facelift is a surgical procedure designed to reduce visible signs of aging in the face and neck. Dr. Ram Prabhu offers a range of facelift techniques tailored to your unique facial structure and aesthetic goals, ensuring natural-looking and long-lasting results.
        </p>
      </div>

      {/* Procedures */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-primary-800">Facelift Procedures</h2>
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
              src="/images/facelift/before-after.jpg" 
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

export default FaceliftPage; 