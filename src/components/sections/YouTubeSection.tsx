import React from 'react';

const videos = [
  {
    id: 'Hs_YwZuFNw4',
    title: 'Hair Transplant Surgery | Dr Ram Prabhu | Hair Transplant in Chennai',
    description: 'Expert hair transplant procedures for natural-looking results'
  },
  {
    id: 'qXI8NqhcsJ4',
    title: 'Rhinoplasty Surgery | Dr Ram Prabhu | Nose Surgery in Chennai',
    description: 'Advanced techniques in nose reshaping surgery'
  },
  {
    id: 'vQZg7RDJZhY',
    title: 'Liposuction Surgery | Dr Ram Prabhu | Best Plastic Surgeon in Chennai',
    description: 'Modern approaches to body contouring'
  },
  {
    id: 'kGvk4ap6kZY',
    title: 'Breast Surgery | Dr Ram Prabhu | Plastic Surgery in Chennai',
    description: 'Comprehensive breast enhancement procedures'
  }
];

const YouTubeSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-accent-500 flex-grow max-w-[80px]"></div>
            <h2 className="text-accent-600 font-semibold mx-3 text-sm uppercase tracking-wider">Video Gallery</h2>
            <div className="h-px bg-accent-500 flex-grow max-w-[80px]"></div>
          </div>
          
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Educational Videos & Patient Stories
          </h3>
          
          <p className="text-gray-700 leading-relaxed">
            Watch our informative videos about various procedures and hear from patients about their transformation journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  {video.title}
                </h4>
                <p className="text-gray-600">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;