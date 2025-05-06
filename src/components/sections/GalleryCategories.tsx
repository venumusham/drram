import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 'facial',
    title: 'Facial Procedures',
    description: 'Transform your facial features with precision procedures',
    image: 'https://images.pexels.com/photos/3812743/pexels-photo-3812743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 18
  },
  {
    id: 'breast',
    title: 'Breast Procedures',
    description: 'Enhance, reduce, or lift for balanced proportions',
    image: 'https://images.pexels.com/photos/6303563/pexels-photo-6303563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 24
  },
  {
    id: 'body',
    title: 'Body Procedures',
    description: 'Contour and refine your silhouette',
    image: 'https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 32
  },
  {
    id: 'non-surgical',
    title: 'Non-Surgical',
    description: 'Rejuvenate without surgery using advanced techniques',
    image: 'https://images.pexels.com/photos/7446145/pexels-photo-7446145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 15
  }
];

const GalleryCategories: React.FC = () => {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/gallery#${category.id}`}
            className="group block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-48">
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-serif text-xl font-bold">{category.title}</h3>
                <p className="text-sm text-gray-200 mt-1">{category.count} Cases</p>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-700 text-sm">{category.description}</p>
              <div className="mt-2 flex items-center text-primary-600 text-sm font-medium group-hover:text-primary-700 transition-colors">
                View Gallery
                <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default GalleryCategories;