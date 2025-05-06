import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import BeforeAfterGallery from '../components/sections/BeforeAfterGallery';
import GalleryCategories from '../components/sections/GalleryCategories';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const GalleryPage: React.FC = () => {
  return (
    <div className="GalleryPage">
      <PageHeader 
        title="Before & After Gallery" 
        description="See real results from our satisfied patients"
      />
      <div className="container mx-auto px-4 py-12">
        <GalleryCategories />
        <BeforeAfterGallery />
        <TestimonialsSection />
      </div>
    </div>
  );
};

export default GalleryPage;