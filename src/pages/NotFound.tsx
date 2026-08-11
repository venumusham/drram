import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => {
  // Tell prerender + monitoring tools this is a 404 (they sniff for this meta).
  useEffect(() => {
    document
      .querySelector('meta[name="prerender-status-code"]')
      ?.setAttribute('content', '404');
  }, []);

  return (
    <>
      <SEO
        title="Page Not Found | Dr. Ram Prabhu Plastic Surgery Clinic Kondapur"
        description="The page you're looking for doesn't exist. Browse plastic surgery services, book a consultation, or call Dr. Ram Prabhu at 07969084439."
        url="https://drramprabhu.com/404"
      />
      {/* This meta tag is read by prerender services (and we set content via JS above) */}
      <meta name="prerender-status-code" content="404" />
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-xl text-center">
          <p className="text-accent-600 font-semibold tracking-widest text-sm uppercase mb-3">
            404 — Page Not Found
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We couldn't find that page
          </h1>
          <p className="text-gray-700 mb-8">
            The link may be broken or the page may have moved. Here's where to go next:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
            <Link
              to="/"
              className="bg-primary-700 text-white font-semibold px-6 py-3 rounded shadow hover:bg-primary-800 transition"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="bg-white border-2 border-primary-700 text-primary-700 font-semibold px-6 py-3 rounded hover:bg-primary-50 transition"
            >
              All Services
            </Link>
            <Link
              to="/gynecomastia"
              className="bg-white border-2 border-primary-700 text-primary-700 font-semibold px-6 py-3 rounded hover:bg-primary-50 transition"
            >
              Gynecomastia
            </Link>
            <Link
              to="/contact"
              className="bg-white border-2 border-primary-700 text-primary-700 font-semibold px-6 py-3 rounded hover:bg-primary-50 transition"
            >
              Contact
            </Link>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            Or call us directly:{' '}
            <a href="tel:07969084439" className="text-primary-700 font-semibold">
              07969084439
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
