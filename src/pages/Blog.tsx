import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../data/blog-posts';

const BlogIndex: React.FC = () => {
  // Sort newest first
  const posts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const absoluteImage = (image: string) => (image.startsWith('http') ? image : `https://drramprabhu.com${image}`);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://drramprabhu.com/blog#blog',
    name: 'Dr. Ramprabhu Plastic Surgery Blog',
    description:
      'Educational articles about plastic surgery procedures, costs, recovery, and patient guidance — by Dr. M. Ram Prabhu, DNB Plastic Surgery, Hyderabad.',
    url: 'https://drramprabhu.com/blog',
    publisher: { '@id': 'https://drramprabhu.com/#clinic' },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.excerpt,
      url: `https://drramprabhu.com/blog/${p.slug}`,
      datePublished: p.publishedAt,
      author: { '@type': 'Person', name: p.author },
      image: absoluteImage(p.image),
    })),
  };

  return (
    <>
      <SEO
        title="Plastic Surgery Blog | Cost, Recovery, Procedures | Dr. Ram Prabhu"
        description="Plastic surgery articles by Dr. M. Ram Prabhu, DNB. Cost guides, recovery timelines, procedure explanations, and patient education for Hyderabad and India."
        keywords={[
          'plastic surgery blog hyderabad',
          'cosmetic surgery articles',
          'gynecomastia recovery info',
          'plastic surgery cost guide',
        ]}
        url="https://drramprabhu.com/blog"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      <div className="min-h-screen bg-white">
        <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
          <div className="max-w-4xl mx-auto">
            <nav className="text-xs text-primary-200 mb-3" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Blog</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Plastic Surgery Blog</h1>
            <p className="text-primary-100 text-base md:text-lg max-w-2xl">
              Honest, in-depth articles about plastic surgery procedures, costs, recovery, and patient guidance — from Dr. M. Ram Prabhu's 16+ years of clinical practice.
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            {posts.length === 0 ? (
              <p className="text-gray-700 text-center">No articles yet. Check back soon.</p>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {posts.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    aria-label={`Read article: ${p.title}`}
                    className="group block bg-white border-2 border-primary-100 rounded-lg overflow-hidden hover:shadow-lg hover:border-primary-300 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    <img
                      src={p.image}
                      alt={p.imageAlt ?? `${p.title} — featured image`}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="p-5">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {p.categories.map((c) => (
                          <span key={c} className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">
                            {c}
                          </span>
                        ))}
                      </div>
                      <h2 className="font-bold text-primary-900 text-lg mb-2 leading-tight">{p.title}</h2>
                      <p className="text-gray-600 text-sm mb-3">{p.excerpt}</p>
                      <div className="text-xs text-gray-500">
                        {new Date(p.publishedAt).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}{' '}
                        · {p.readMin} min read · {p.author}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogIndex;
