import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const GOOGLE_PROFILE_URL = 'https://share.google/jmiDUr3EofEfv2aZv';

const reviews = [
  { initials: 'ST', name: 'Srinivas T', date: '13 May 2026', procedure: 'Family Care', rating: 5, bg: '#EAF3DE', color: '#27500A', text: 'Had a very good experience for my wife and kid with Dr. Ramprabhu and the clinic staff. The doctor was very supportive throughout the visit.' },
  { initials: 'AK', name: 'aman kumar', date: '12 May 2026', procedure: 'Gynecomastia', rating: 5, bg: '#E6F1FB', color: '#0C447C', text: 'I underwent gynecomastia surgery, and the entire experience went very well. Dr. Ramprabhu was extremely professional and reassuring.' },
  { initials: 'AR', name: 'Anusha Rama', date: '8 May 2026', procedure: 'Ganglion Cyst', rating: 5, bg: '#E1F5EE', color: '#085041', text: 'My husband recently had a ganglion cyst removed by Dr. Ram Prabhu and the entire experience was smooth from consultation to recovery.' },
  { initials: 'RK', name: 'Rohit Kumar', date: '4 May 2026', procedure: 'Consultation', rating: 5, bg: '#EEEDFE', color: '#3C3489', text: 'I consulted Dr. Ramprabhu and had a very positive experience. He took time to explain the procedure clearly and answer every question.' },
  { initials: 'AA', name: 'Ameer Ali', date: '29 Apr 2026', procedure: 'Gynecomastia', rating: 4, bg: '#FBEAF0', color: '#72243E', text: 'I had gynecomastia since my teenage years and approached Dr. Ram Prabhu for treatment. The care and guidance were very helpful.' },
  { initials: 'NP', name: 'Nappinnai Padmanabhan', date: '26 Apr 2026', procedure: 'Surgical Care', rating: 5, bg: '#FAEEDA', color: '#633806', text: 'I am truly grateful for the care and compassion shown by the doctor during a very stressful time for our family.' },
  { initials: 'KM', name: 'karanam mithun', date: '26 Apr 2026', procedure: 'Consultation', rating: 5, bg: '#EAF3DE', color: '#27500A', text: 'Dr. Ram Prabhu provided an excellent consultation - very patient, attentive, and clear in explaining every detail.' },
  { initials: 'AG', name: 'Akshat Ghuwara', date: '25 Apr 2026', procedure: 'Treatment', rating: 5, bg: '#E6F1FB', color: '#0C447C', text: '100% satisfied with the treatment. The doctor and the staff were so supportive.' },
  { initials: 'CS', name: 'Chandra Shekar', date: '22 Apr 2026', procedure: 'Liposuction', rating: 5, bg: '#FBEAF0', color: '#72243E', text: 'Recently I had liposuction surgery with Dr. Ramprabhu sir. Thank you for your care and support throughout the treatment.' },
];

function GoogleLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function StarRating({ count = 5, size = 15 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} star rating`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width={size} height={size} viewBox="0 0 24 24" fill={star <= count ? '#FBBC04' : '#ddd'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const TestimonialsSection: React.FC = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const review = reviews[activeReview];

  const goToReview = (index: number) => {
    setActiveReview((index + reviews.length) % reviews.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      goToReview(activeReview + 1);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [activeReview, isPaused]);

  return (
    <section
      className="bg-[#f8f6f1] py-14 md:py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <div className="mb-8 grid gap-5 md:mb-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
              Patient Reviews
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.65rem)] font-normal leading-tight text-neutral-950">
              What Our Patients Say
            </h2>
          </div>

          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-3 rounded-xl border border-[#e8e3da] bg-white px-5 py-3 no-underline"
          >
            <GoogleLogo size={26} />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold text-neutral-950">5.0</span>
                <StarRating count={5} />
              </div>
              <p className="m-0 text-xs text-neutral-400">140+ Google Reviews</p>
            </div>
          </a>
        </div>

        <div className="overflow-hidden rounded-[22px] border border-[#e8e0d2] bg-white shadow-soft">
          <div className="grid md:grid-cols-[0.8fr_1.2fr]">
            <div
              className="relative flex min-h-[220px] flex-col justify-between overflow-hidden p-6 text-white md:min-h-[430px] md:p-8"
              style={{ background: `linear-gradient(145deg, ${review.color}, #111)` }}
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white" />
                <div className="absolute -bottom-20 left-8 h-56 w-56 rounded-full bg-accent-300" />
              </div>
              <div className="relative">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-lg font-semibold md:h-16 md:w-16 md:text-xl" style={{ color: review.color }}>
                  {review.initials}
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Featured Google Review
                </p>
                <h3 className="mt-2 font-serif text-3xl font-normal leading-tight md:mt-3 md:text-4xl">
                  {review.procedure}
                </h3>
              </div>
              <div className="relative mt-5 md:mt-8">
                <p className="text-sm text-white/70">{activeReview + 1} of {reviews.length}</p>
                <div className="mt-3 flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous review"
                    onClick={() => goToReview(activeReview - 1)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white/20"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next review"
                    onClick={() => goToReview(activeReview + 1)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white/20"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-5">
                <div>
                  <p className="m-0 text-lg font-semibold text-neutral-950">{review.name}</p>
                  <p className="m-0 text-sm text-neutral-400">{review.date}</p>
                </div>
                <GoogleLogo size={24} />
              </div>

              <StarRating count={review.rating} size={18} />

              <blockquote className="mt-5 line-clamp-5 font-serif text-[1.35rem] font-normal leading-snug text-neutral-950 md:mt-7 md:line-clamp-none md:text-[clamp(1.45rem,3vw,2.4rem)]">
                “{review.text}”
              </blockquote>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 md:mt-8">
                <div className="flex max-w-full flex-wrap gap-2">
                  {reviews.map((item, index) => (
                    <button
                      key={`${item.name}-${item.date}`}
                      type="button"
                      onClick={() => goToReview(index)}
                      aria-label={`Show review from ${item.name}`}
                      className={`h-2 rounded-full transition-all ${
                        activeReview === index ? 'w-8 bg-accent-500' : 'w-2 bg-neutral-300'
                      }`}
                    />
                  ))}
                </div>
                <a
                  href={GOOGLE_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-700"
                >
                  <GoogleLogo size={16} />
                  View more Google Reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
