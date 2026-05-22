import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/ui/PageHeader';
import { BLOG_POSTS } from '../data/blog-posts';

const pageGroups = [
  {
    title: 'Main Pages',
    links: [
      ['Home', '/'],
      ['About Dr. Ram Prabhu', '/about'],
      ['Services', '/services'],
      ['Blog', '/blog'],
      ['FAQ', '/faq'],
      ['Book Appointment', '/book-appointment'],
      ['Contact', '/contact'],
    ],
  },
  {
    title: 'Service Pages',
    links: [
      ['Facelift & Facial Surgery', '/services/facelift'],
      ['Body Contouring', '/services/body-contouring'],
      ['Breast Procedures', '/services/breast-procedures'],
      ['Reconstructive Surgery', '/services/reconstructive'],
    ],
  },
  {
    title: 'Procedure Guides',
    links: [
      ['Gynecomastia Surgery', '/gynecomastia'],
      ['Rhinoplasty Hyderabad', '/rhinoplasty-hyderabad'],
      ['Liposuction Hyderabad', '/liposuction-hyderabad'],
      ['Facelift Hyderabad', '/facelift-hyderabad'],
      ['Breast Augmentation Hyderabad', '/breast-augmentation-hyderabad'],
      ['Tummy Tuck Hyderabad', '/tummy-tuck-hyderabad'],
      ['Lipoma Removal Hyderabad', '/lipoma-removal-hyderabad'],
      ['Earlobe Repair Kondapur', '/earlobe-repair-kondapur'],
      ['Stapler Circumcision Hyderabad', '/stapler-circumcision-hyderabad'],
      ['Medical Tourism India', '/medical-tourism-india'],
    ],
  },
  {
    title: 'Location Pages',
    links: [
      ['Plastic Surgeon Hyderabad', '/plastic-surgeon-hyderabad'],
      ['Plastic Surgery Kondapur', '/plastic-surgery-kondapur'],
      ['Cosmetic Surgeon Madhapur', '/cosmetic-surgeon-madhapur'],
      ['Plastic Surgeon Gachibowli', '/plastic-surgeon-gachibowli'],
      ['Plastic Surgeon Hitech City', '/plastic-surgeon-hitech-city'],
    ],
  },
  {
    title: 'Legal',
    links: [
      ['Privacy Policy', '/privacy-policy'],
      ['Terms of Service', '/terms-of-service'],
      ['XML Sitemap', '/sitemap.xml'],
    ],
  },
  {
    title: 'Popular Treatments',
    links: [
      ['Gynecomastia', '/gynecomastia'],
      ['Liposuction', '/liposuction-hyderabad'],
      ['Breast Procedures', '/services/breast-procedures'],
      ['Lipoma Treatment', '/lipoma-removal-hyderabad'],
      ['Sebaceous Cyst', '/blog/sebaceous-cyst-removal-treatment-hyderabad'],
      ['Aesthetic Procedures', '/services'],
    ],
  },
];

const SitemapPage: React.FC = () => {
  const blogLinks = BLOG_POSTS.map((post) => [post.title, `/blog/${post.slug}`]);

  return (
    <>
      <SEO
        title="Sitemap | Dr Ramprabhu Clinic"
        description="Find all main pages, services, procedure guides, location pages, and blog articles on the Dr Ramprabhu Clinic website."
        keywords={['dr ramprabhu sitemap', 'plastic surgery clinic sitemap']}
        url="https://drramprabhu.com/sitemap"
      />
      <PageHeader title="Sitemap" description="A quick index of pages on drramprabhu.com." />
      <main className="bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pageGroups.map((group) => (
              <section key={group.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-bold text-primary-900">{group.title}</h2>
                <ul className="space-y-2">
                  {group.links.map(([label, href]) => (
                    <li key={href}>
                      {href.startsWith('/') && href !== '/sitemap.xml' ? (
                        <Link to={href} className="text-primary-700 hover:text-primary-900 hover:underline">
                          {label}
                        </Link>
                      ) : (
                        <a href={href} className="text-primary-700 hover:text-primary-900 hover:underline">
                          {label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="mt-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-primary-900">Blog Articles</h2>
            <ul className="grid gap-x-8 gap-y-2 md:grid-cols-2">
              {blogLinks.map(([label, href]) => (
                <li key={href}>
                  <Link to={href} className="text-primary-700 hover:text-primary-900 hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};

export default SitemapPage;
