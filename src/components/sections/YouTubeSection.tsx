import React from 'react';

const YouTubeSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-accent-500 flex-grow max-w-[80px]"></div>
            <h2 className="text-accent-600 font-semibold mx-3 text-sm uppercase tracking-wider">Videos</h2>
            <div className="h-px bg-accent-500 flex-grow max-w-[80px]"></div>
          </div>
          
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Watch Our Latest Videos
          </h3>
          
          <p className="text-gray-700 leading-relaxed">
            Stay updated with our latest procedures, patient testimonials, and educational content.
          </p>
        </div>

        <iframe src="https://feed.mikle.com/widget/v2/172882/?preloader-text=Loading&" height="484px" width="100%" className="fw-iframe" scrolling="no" frameBorder="0"></iframe>
      </div>
    </section>
  );
};

export default YouTubeSection;
