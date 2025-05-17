import React from 'react';
import { Link } from 'react-router-dom';

const procedures = [
  {
    title: 'Liposuction',
    description: 'Removes stubborn fat deposits from specific areas of the body for a slimmer contour.',
    image: 'https://via.placeholder.com/400x250?text=Liposuction',
  },
  {
    title: 'Tummy Tuck (Abdominoplasty)',
    description: 'Removes excess skin and fat from the abdomen and tightens abdominal muscles.',
    image: 'https://via.placeholder.com/400x250?text=Tummy+Tuck',
  },
  {
    title: 'Body Lift',
    description: 'Improves the shape and tone of the underlying tissue that supports skin and fat.',
    image: 'https://via.placeholder.com/400x250?text=Body+Lift',
  },
  {
    title: 'Arm Lift (Brachioplasty)',
    description: 'Reduces excess sagging skin and fat from the upper arms.',
    image: 'https://via.placeholder.com/400x250?text=Arm+Lift',
  },
  {
    title: 'Thigh Lift',
    description: 'Reshapes the thighs by reducing excess skin and fat for smoother contours.',
    image: 'https://via.placeholder.com/400x250?text=Thigh+Lift',
  },
];

const BodyContouringPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url(https://via.placeholder.com/1200x400?text=Body+Contouring)'}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white px-6 py-3 rounded">Body Contouring</h1>
      </div>

      {/* Description */}
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-primary-800">Achieve Your Ideal Shape</h2>
        <p className="mb-4 text-gray-800">
          Body contouring procedures help reshape and tone the body by removing excess fat and skin. These procedures are ideal for patients who have achieved significant weight loss or want to improve their body shape in specific areas. Dr. Ram Prabhu offers advanced body contouring solutions tailored to your unique goals, ensuring natural-looking and long-lasting results.
        </p>
      </div>

      {/* Procedures */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-primary-800">Our Body Contouring Procedures</h2>
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

export default BodyContouringPage; 