import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import OptimizedImage from '../ui/OptimizedImage';

const procedures = [
  { name: 'Gynecomastia Surgery', group: 'Chest contouring', image: '/images/breast/Gynecomastia.webp', href: '/gynecomastia', alt: 'Gynecomastia surgery chest contouring service by Dr. Ram Prabhu in Hyderabad' },
  { name: 'Liposuction', group: 'Body contouring', image: '/images/body/lipo.webp', href: '/liposuction-hyderabad', alt: 'Liposuction body contouring treatment service at Dr Ramprabhu Clinic Hyderabad' },
  { name: 'Lipoma / Cyst Excision', group: 'Day-care surgery', image: '/images/blog/lipoma-removal-thumbnail.webp', href: '/lipoma-removal-hyderabad', alt: 'Lipoma and sebaceous cyst removal day-care surgery service by Dr. Ram Prabhu' },
  { name: 'Diabetic Foot Care', group: 'Reconstructive care', image: '/images/blog/diabetic-foot-reconstruction-thumbnail.webp', href: '/services/reconstructive', alt: 'Diabetic foot wound reconstruction care service by Dr. Ram Prabhu' },
  { name: 'Breast Augmentation', group: 'Breast procedures', image: '/images/breast/Breast-Augmentation.webp', href: '/breast-augmentation-hyderabad', alt: 'Breast augmentation plastic surgery service in Hyderabad by Dr. Ram Prabhu' },
  { name: 'Axillary Breast Reduction', group: 'Breast procedures', image: '/images/breast/breast-hero.webp', href: '/services/breast-procedures', alt: 'Axillary breast and breast procedure consultation at Dr Ramprabhu Clinic' },
  { name: 'Circumcision Surgery', group: 'Stapler circumcision', image: '/images/stapler-circumcision/illustration.webp', href: '/stapler-circumcision-hyderabad', alt: 'Stapler circumcision surgery service in Hyderabad by Dr. Ram Prabhu' },
  { name: 'Scar / Mole Excision', group: 'Scar revision', image: '/images/reconstruction/Scar-Revision.webp', href: '/services/reconstructive', alt: 'Scar revision and mole excision reconstructive surgery service by Dr. Ram Prabhu' },
  { name: 'Tummy Tuck', group: 'Abdominoplasty', image: '/images/body/tummy.webp', href: '/tummy-tuck-hyderabad', alt: 'Tummy tuck abdominoplasty body contouring surgery service in Hyderabad' },
  { name: 'Facial & Body Contouring', group: 'Aesthetic surgery', image: '/images/services/body.webp', href: '/services', alt: 'Facial and body contouring aesthetic surgery service at Dr Ramprabhu Clinic' },
  { name: 'Cosmetic Rhinoplasty', group: 'Facial aesthetics', image: '/images/facelift/face-background.webp', href: '/rhinoplasty-hyderabad', alt: 'Cosmetic rhinoplasty nose surgery service by Dr. Ram Prabhu Hyderabad' },
  { name: 'Prominent Ear Correction', group: 'Otoplasty', image: '/images/facelift/facelift.webp', href: '/services/facelift', alt: 'Prominent ear correction otoplasty service by plastic surgeon Dr. Ram Prabhu' },
];

const videos = [
  { id: '5enhG0sLuZM', label: 'Gynecomastia' },
  { id: 'jj7sczx84OU', label: 'Hand Surgery' },
  { id: 'nk8yYK-CHp8', label: 'Case Planning' },
  { id: 'HbHZubsiHKA', label: 'Scar Revision' },
  { id: 'u1_TWQy8W7k', label: 'Scarless Surgery' },
];

const slides = [
  {
    navLabel: 'Clinic',
    eyebrow: "Hyderabad's trusted plastic surgeon",
    title: 'Expertise in Aesthetic & Reconstructive Surgery',
    text: 'Dr. M. Ram Prabhu, DNB Plastic Surgery. 16+ years, 6,000+ procedures, Kondapur, Hyderabad.',
    image: '/images/hero-clinic-premium.webp',
    imagePosition: 'center center',
    mobileImagePosition: '67% center',
    primary: 'Book Free Consultation',
    primaryHref: '/book-appointment',
    secondary: 'Explore Procedures',
    secondaryHref: '/services',
    imageAlt: 'Premium clinic consultation environment for Dr Ramprabhu Plastic Surgery Clinic in Kondapur Hyderabad',
  },
  {
    navLabel: 'Gynecomastia',
    eyebrow: 'Specialist procedure',
    title: 'Gynecomastia Surgery in Hyderabad',
    text: 'Confidential evaluation, chest contouring, gland removal planning, and recovery guidance for natural-looking results.',
    image: '/images/breast/Gynecomastia.webp',
    mobileImagePosition: '58% center',
    primary: 'View Gynecomastia',
    primaryHref: '/gynecomastia',
    secondary: 'Ask on WhatsApp',
    secondaryHref: 'https://wa.me/919949808628?text=Hello%20Dr.%20Ram%20Prabhu%2C%20I%20would%20like%20to%20know%20about%20gynecomastia%20surgery.',
    externalSecondary: true,
    imageAlt: 'Gynecomastia chest contouring consultation and treatment planning by Dr. Ram Prabhu',
  },
  {
    navLabel: 'Reviews',
    eyebrow: 'Patient proof',
    title: '5.0 Google Rating',
    text: 'Recent Google Business Profile reviews from patients across cosmetic, reconstructive, and minor surgical care.',
    image: '/images/hero-reviews.webp',
    imagePosition: '72% center',
    mobileImagePosition: '78% center',
    primary: 'Read Reviews',
    primaryHref: 'https://share.google/jmiDUr3EofEfv2aZv',
    externalPrimary: true,
    secondary: 'Book Consultation',
    secondaryHref: '/book-appointment',
    imageAlt: 'Verified Google patient reviews for Dr Ramprabhu Plastic Surgery Clinic Hyderabad',
  },
  {
    navLabel: 'Videos',
    eyebrow: 'Patient education',
    title: 'Watch Procedure Explainers',
    text: 'YouTube videos by Dr. Ram Prabhu covering gynecomastia, wound care, reconstructive surgery, and recovery guidance.',
    image: 'https://img.youtube.com/vi/5enhG0sLuZM/hqdefault.jpg',
    mobileImagePosition: '62% center',
    primary: 'Watch Videos',
    primaryHref: 'https://youtube.com/@drramprabhumusham',
    externalPrimary: true,
    secondary: 'View Services',
    secondaryHref: '/services',
    imageAlt: 'YouTube patient education video thumbnail by Dr. Ram Prabhu on plastic surgery procedures',
  },
  {
    navLabel: 'Credentials',
    eyebrow: 'Credentials',
    title: 'Qualified Care, Clear Guidance',
    text: 'DNB Plastic Surgery, TSMC registration, professional affiliations, and safety-first treatment planning.',
    image: '/images/hero-credentials.webp',
    imagePosition: '76% center',
    mobileImagePosition: '82% center',
    primary: 'Meet the Doctor',
    primaryHref: '/about',
    secondary: 'Contact Clinic',
    secondaryHref: '/book-appointment',
    imageAlt: 'Medical credentials and professional affiliations of Dr. M. Ram Prabhu Plastic Surgeon',
  },
];

const proofStats = [
  { value: '16+', label: 'Years' },
  { value: '6,000+', label: 'Procedures' },
  { value: '140+', label: 'Reviews' },
  { value: '5.0', label: 'Rating' },
];

const procedureLoop = [...procedures, ...procedures];

type SlideLinkProps = {
  children: React.ReactNode;
  className: string;
  href: string;
  external?: boolean;
};

function SlideLink({ children, className, href, external = false }: SlideLinkProps) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}

const HeroSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeHeroVideo, setActiveHeroVideo] = useState<string | null>(null);
  const slide = slides[activeSlide];

  const goToSlide = (index: number) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  const openHeroVideo = (videoId: string) => {
    setActiveHeroVideo(videoId);
    window.dispatchEvent(new CustomEvent('hero-video-select', { detail: { videoId, autoplay: false } }));
  };

  const activeHeroVideoTitle = videos.find((video) => video.id === activeHeroVideo)?.label ?? 'Procedure video';

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      goToSlide(activeSlide + 1);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [activeSlide, isPaused]);

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#0d0d14]"
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {slides.map((item, index) => (
        <div
          key={item.title}
          className={`absolute inset-0 transition-opacity duration-700 ${
            activeSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={activeSlide !== index}
          style={{ background: item.background ?? '#0d0d14' }}
        >
          <OptimizedImage
            src={item.image}
            alt={item.imageAlt}
            className="hero-slide-image h-full w-full object-cover"
            priority={index === 0}
            sizes="100vw"
            style={{
              objectFit: item.imageFit ?? 'cover',
              opacity: item.imageOpacity ?? 1,
              '--image-position': item.imagePosition ?? 'center center',
              '--mobile-image-position': item.mobileImagePosition ?? item.imagePosition ?? 'center center',
            } as React.CSSProperties}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20"
            style={{
              '--mobile-hero-gradient':
                'linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.76) 54%, rgba(0,0,0,0.44) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        </div>
      ))}

      <div className="absolute left-0 right-0 top-[72px] z-30 md:hidden">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-full border border-white/10 bg-black/25 py-2 backdrop-blur-md">
            <div className="hero-procedure-track flex w-max gap-2 px-2">
              {procedureLoop.map((procedure, index) => (
                <Link
                  key={`${procedure.name}-${index}`}
                  to={procedure.href}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 py-1 pl-1 pr-3 text-left text-white/80 transition hover:border-accent-300/60 hover:text-accent-200"
                >
                  <OptimizedImage src={procedure.image} alt={procedure.alt} className="h-8 w-8 rounded-full object-cover" sizes="32px" />
                  <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.08em]">
                    {procedure.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-2 overflow-x-auto rounded-2xl border border-white/10 bg-black/25 py-2 backdrop-blur-md">
            <div className="flex w-max gap-3 px-2">
              {videos.map((video) => (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => openHeroVideo(video.id)}
                  className="relative h-16 w-32 overflow-hidden rounded-xl border border-white/10 bg-white/10 text-left text-white transition hover:border-accent-300/60"
                >
                  <OptimizedImage
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={`${video.label} educational video thumbnail by Dr. Ram Prabhu`}
                    className="absolute inset-0 h-full w-full object-cover"
                    sizes="128px"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <span className="absolute bottom-2 left-2 right-8 line-clamp-2 text-[11px] font-semibold uppercase leading-3 tracking-[0.04em] text-white">
                    {video.label}
                  </span>
                  <span className="absolute bottom-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 text-black">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <aside className="absolute right-6 top-1/2 z-10 hidden w-[230px] -translate-y-1/2 xl:block">
        <div className="rounded-2xl border border-white/12 bg-black/30 p-3 backdrop-blur-md">
          <p className="mb-3 px-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-300">
            Procedures
          </p>
          <div className="space-y-2">
            {procedures.slice(0, 5).map((procedure) => (
              <Link
                key={procedure.name}
                to={procedure.href}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-2 transition hover:border-accent-300/50 hover:bg-white/15"
              >
                <OptimizedImage src={procedure.image} alt={procedure.alt} className="h-12 w-14 rounded-lg object-cover" sizes="56px" />
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-[#f5f0e8]">{procedure.name}</span>
                  <span className="block truncate text-[11px] text-white/45 group-hover:text-accent-200">{procedure.group}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </aside>

      <div className="container relative z-10 mx-auto flex min-h-screen flex-col justify-end px-4 pb-24 pt-24 md:pb-16 md:pt-32">
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex rounded-full border border-accent-300/50 bg-black/30 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-300 backdrop-blur">
            {slide.eyebrow}
          </p>
          <h1 className="max-w-2xl font-serif text-[clamp(2rem,7vw,4.5rem)] font-normal leading-tight text-[#f5f0e8]">
            {slide.title}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#f5f0e8]/75 md:text-lg md:leading-8">
            {slide.text}
          </p>

          {slide.navLabel === 'Reviews' && (
            <div className="mt-6 grid max-w-xl grid-cols-4 overflow-hidden rounded-xl border border-white/15 bg-black/35 backdrop-blur md:flex md:w-fit md:flex-wrap md:gap-0">
              {proofStats.map((item, index) => (
                <div
                  key={item.label}
                  className={`min-w-0 px-2 py-3 text-center md:px-5 ${
                    index < proofStats.length - 1 ? 'border-r border-white/15' : ''
                  }`}
                >
                  <div className="font-serif text-lg font-semibold leading-none text-accent-300 md:text-2xl">
                    {item.value}
                  </div>
                  <div className="mt-1 truncate text-[8px] font-semibold uppercase tracking-[0.08em] text-[#f5f0e8]/65 md:text-[10px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 grid max-w-sm grid-cols-1 gap-3 sm:flex sm:max-w-none sm:flex-wrap">
            <SlideLink
              href={slide.primaryHref}
              external={slide.externalPrimary}
              className="rounded-lg bg-accent-500 px-7 py-3 text-center text-sm font-semibold text-black transition hover:bg-accent-400"
            >
              {slide.primary}
            </SlideLink>
            <SlideLink
              href={slide.secondaryHref}
              external={slide.externalSecondary}
              className="rounded-lg border border-white/30 bg-white/10 px-7 py-3 text-center text-sm font-semibold text-[#f5f0e8] backdrop-blur transition hover:bg-white/15"
            >
              {slide.secondary}
            </SlideLink>
          </div>
        </div>

        <div className="mt-8 border-t border-white/15 pt-4 md:mt-12">
          <div className="mb-4 grid grid-cols-5 gap-2" aria-label="Hero slide timeline">
            {slides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => goToSlide(index)}
                className="group min-w-0 text-left"
                aria-label={`Show ${item.title}`}
              >
                <span className="mb-2 block h-1 overflow-hidden rounded-full bg-white/25">
                  <span
                    className={`block h-full rounded-full bg-accent-400 ${
                      activeSlide === index && !isPaused ? 'hero-timeline-fill' : ''
                    } ${activeSlide === index && isPaused ? 'w-full' : ''} ${activeSlide !== index ? 'w-0' : ''}`}
                  />
                </span>
                <span className={`block truncate text-[10px] font-semibold uppercase tracking-[0.08em] transition md:text-xs ${
                  activeSlide === index ? 'text-accent-300' : 'text-white/50 group-hover:text-white/75'
                }`}>
                  {item.navLabel}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => goToSlide(activeSlide - 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur transition hover:bg-white/10"
                aria-label="Previous hero slide"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => goToSlide(activeSlide + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur transition hover:bg-white/10"
                aria-label="Next hero slide"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="text-right text-xs font-medium text-white/55">
              {String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-slide-image {
          object-position: var(--image-position);
        }
        .hero-procedure-track {
          animation: heroProcedureScroll 42s linear infinite;
        }
        .hero-procedure-track:hover,
        .hero-procedure-track:focus-within {
          animation-play-state: paused;
        }
        @keyframes heroProcedureScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .hero-timeline-fill {
          width: 100%;
          transform-origin: left;
          animation: heroTimeline 5500ms linear forwards;
        }
        @keyframes heroTimeline {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-timeline-fill {
            animation: none;
          }
          .hero-procedure-track {
            animation: none;
          }
        }
        @media (max-width: 640px) {
          .hero-slide-image {
            object-position: var(--mobile-image-position);
          }
          section > div > .bg-gradient-to-t {
            background: var(--mobile-hero-gradient);
          }
        }
      `}</style>

      {activeHeroVideo && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activeHeroVideoTitle}
          onClick={() => setActiveHeroVideo(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveHeroVideo(null)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            <div className="relative overflow-hidden rounded-2xl bg-black pb-[56.25%] shadow-2xl shadow-black/60">
              <iframe
                className="absolute inset-0 h-full w-full border-0"
                src={`https://www.youtube.com/embed/${activeHeroVideo}?autoplay=1&rel=0&modestbranding=1`}
                title={activeHeroVideoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
