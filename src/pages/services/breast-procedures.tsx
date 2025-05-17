import React from 'react';
import { Link } from 'react-router-dom';

const procedures = [
  {
    title: 'Breast Augmentation',
    description: 'Enhances breast size and shape using implants or fat transfer for a fuller, natural look.',
    image: 'https://via.placeholder.com/400x250?text=Breast+Augmentation',
  },
  {
    title: 'Breast Reduction',
    description: 'Removes excess breast tissue and skin to achieve a breast size in proportion with your body.',
    image: 'https://via.placeholder.com/400x250?text=Breast+Reduction',
  },
  {
    title: 'Breast Lift (Mastopexy)',
    description: 'Raises and firms the breasts by removing excess skin and tightening surrounding tissue.',
    image: 'https://via.placeholder.com/400x250?text=Breast+Lift',
  },
  {
    title: 'Breast Reconstruction',
    description: 'Restores breast shape after mastectomy or injury, using implants or your own tissue.',
    image: 'https://via.placeholder.com/400x250?text=Breast+Reconstruction',
  },
  {
    title: 'Male Breast Reduction (Gynecomastia)',
    description: 'Removes excess breast tissue in men for a flatter, more masculine chest.',
    image: 'https://via.placeholder.com/400x250?text=Gynecomastia',
  },
];

const BreastProceduresPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url(https://via.placeholder.com/1200x400?text=Breast+Procedures)'}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white px-6 py-3 rounded">Breast Procedures</h1>
      </div>

      {/* Description */}
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-primary-800">Enhance, Restore, and Rejuvenate</h2>
        <p className="mb-4 text-gray-800">
          Breast procedures can help you achieve your desired breast shape and size, restore symmetry, and improve confidence. Dr. Ram Prabhu offers a full range of breast surgeries tailored to your unique needs and goals, ensuring natural-looking and long-lasting results.
        </p>
      </div>

      {/* Procedures */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-primary-800">Our Breast Procedures</h2>
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

export default BreastProceduresPage; 