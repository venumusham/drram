import React from 'react';
import { Link } from 'react-router-dom';

const procedures = [
  {
    title: 'Traditional Facelift',
    description: 'Addresses sagging skin, deep creases, and loss of muscle tone in the face and neck.',
    image: 'https://via.placeholder.com/400x250?text=Traditional+Facelift',
  },
  {
    title: 'Mini Facelift',
    description: 'A less invasive option for mild to moderate sagging, focusing on the lower face and jawline.',
    image: 'https://via.placeholder.com/400x250?text=Mini+Facelift',
  },
  {
    title: 'Neck Lift',
    description: 'Targets loose neck skin and excess fat for a smoother, more youthful neck contour.',
    image: 'https://via.placeholder.com/400x250?text=Neck+Lift',
  },
  {
    title: 'Mid-Facelift',
    description: 'Lifts and tightens the cheeks and mid-face area for a refreshed appearance.',
    image: 'https://via.placeholder.com/400x250?text=Mid+Facelift',
  },
];

const FaceliftPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url(https://via.placeholder.com/1200x400?text=Facelift)'}}>
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
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div>
            <img src="https://via.placeholder.com/350x350?text=Before" alt="Before" className="rounded-lg shadow-lg w-full max-w-xs" />
            <p className="text-center mt-2 text-gray-700">Before</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/350x350?text=After" alt="After" className="rounded-lg shadow-lg w-full max-w-xs" />
            <p className="text-center mt-2 text-gray-700">After</p>
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