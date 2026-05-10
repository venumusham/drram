import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import BeforeAfterGallery from '../components/sections/BeforeAfterGallery';
import GalleryCategories from '../components/sections/GalleryCategories';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import SEO from '../components/SEO';

const GalleryPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Before & After Gallery | Real Results | Dr. Ram Prabhu Hyderabad"
        description="Real before-and-after photos: gynecomastia, liposuction, rhinoplasty, facelift, breast surgery, body contouring & reconstructive procedures by Dr. Ram Prabhu, Kondapur Hyderabad. 6,000+ procedures."
        keywords={[
          'plastic surgery gallery hyderabad',
          'before and after dr ram prabhu',
          'cosmetic surgery results india',
          'body contouring photos hyderabad',
          'breast surgery results dr ram'
        ]}
        image="/images/body/before-after.jpg"
        url="https://drramprabhu.com/gallery"
      />
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
    </>
  );
};

export default GalleryPage;