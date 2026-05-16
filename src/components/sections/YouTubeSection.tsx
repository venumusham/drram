import React, { useEffect, useState } from 'react';

const CHANNEL_URL = 'https://youtube.com/@drramprabhumusham';
const UPLOADS_PLAYLIST_URL = 'https://www.youtube.com/playlist?list=UUuV2YlxXFZN1gx7HcqmsoYw';

const videos = [
  {
    id: '5enhG0sLuZM',
    title: 'Gynecomastia Surgery in Hyderabad | Psychology Behind Man Boobs Explained',
    category: 'Gynecomastia',
    color: '#1a5c3a',
  },
  {
    id: 'jj7sczx84OU',
    title: 'Severe Nail Pain but Normal Nail? | Glomus Tumour Explained',
    category: 'Hand Surgery',
    color: '#1a3a5c',
  },
  {
    id: 'nk8yYK-CHp8',
    title: '7 Gynecomastia Surgeries in 2 Days | Precision Planning',
    category: 'Gynecomastia',
    color: '#1a5c3a',
  },
  {
    id: 'HbHZubsiHKA',
    title: 'Keloids Are Not Just Scars | Surgical Treatment Explained',
    category: 'Scar Revision',
    color: '#5c1a3a',
  },
  {
    id: 'STY0rap9Z3A',
    title: 'Forehead Lump Removed Without a Visible Scar',
    category: 'Facial Surgery',
    color: '#5c3a1a',
  },
  {
    id: 'Xbr3ZB5b5RE',
    title: 'Importance of Massage After Gynecomastia Surgery',
    category: 'Recovery',
    color: '#3a1a5c',
  },
  {
    id: 'u1_TWQy8W7k',
    title: 'Endoscopic Scarless Gynecomastia Surgery',
    category: 'Gynecomastia',
    color: '#1a5c3a',
  },
  {
    id: 'S7Varv8tYeM',
    title: 'Why Diabetic Foot Ulcers Do Not Have to Lead to Amputation',
    category: 'Diabetic Foot',
    color: '#1a5a5a',
  },
];

const YouTubeSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const active = videos[activeIdx];

  const selectVideo = (idx: number, autoplay = false) => {
    setActiveIdx(idx);
    setPlaying(autoplay);
  };

  useEffect(() => {
    const selectFromHash = () => {
      const params = new URLSearchParams(window.location.hash.split('?')[1] ?? '');
      const videoId = params.get('video');
      const autoplay = params.get('autoplay') === '1';
      const index = videos.findIndex((video) => video.id === videoId);

      if (index >= 0) {
        selectVideo(index, autoplay);
      }
    };
    const selectFromHero = (event: Event) => {
      const detail = (event as CustomEvent<string | { videoId: string; autoplay?: boolean }>).detail;
      const videoId = typeof detail === 'string' ? detail : detail.videoId;
      const autoplay = typeof detail === 'string' ? false : detail.autoplay === true;
      const index = videos.findIndex((video) => video.id === videoId);

      if (index >= 0) {
        selectVideo(index, autoplay);
      }
    };

    selectFromHash();
    window.addEventListener('hashchange', selectFromHash);
    window.addEventListener('hero-video-select', selectFromHero);
    return () => {
      window.removeEventListener('hashchange', selectFromHash);
      window.removeEventListener('hero-video-select', selectFromHero);
    };
  }, []);

  return (
    <section id="youtube-videos" className="scroll-mt-20 bg-[#0d0d14] py-14">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Patient Education &amp; Results
          </p>
          <h2 className="font-serif text-[clamp(1.7rem,4vw,2.5rem)] font-normal leading-tight text-[#f5f0e8]">
            Watch Procedures &amp; Patient Stories
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            Real cases. Real results. Educational content by Dr. M. Ram Prabhu.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_280px]">
          <div>
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-xl bg-neutral-950 pb-[56.25%] shadow-2xl shadow-black/40">
              {playing ? (
                <iframe
                  className="absolute inset-0 h-full w-full border-0"
                  src={`https://www.youtube.com/embed/${active.id}?autoplay=1&rel=0&modestbranding=1`}
                  title={active.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src={`https://img.youtube.com/vi/${active.id}/maxresdefault.jpg`}
                    alt={active.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.src = `https://img.youtube.com/vi/${active.id}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span
                    className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs text-white"
                    style={{ background: active.color }}
                  >
                    {active.category}
                  </span>
                  <button
                    onClick={() => setPlaying(true)}
                    aria-label={`Play ${active.title}`}
                    className="absolute left-1/2 top-1/2 flex h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent-500 transition hover:scale-110"
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="#111">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </>
              )}
            </div>
            <div className="mx-auto mt-4 max-w-3xl">
              <h3 className="font-serif text-base font-normal text-[#f5f0e8] md:text-lg">{active.title}</h3>
              <p className="mt-1 text-sm text-neutral-500">
                Dr. M. Ram Prabhu - Plastic &amp; Cosmetic Surgeon, Hyderabad
              </p>
            </div>
          </div>

          <div className="hidden overflow-hidden rounded-xl border border-[#1e1e2e] bg-[#13131e] lg:block">
            <div className="flex items-center justify-between border-b border-[#1e1e2e] px-4 py-3">
              <span className="text-xs uppercase tracking-[0.1em] text-accent-400">{videos.length} videos</span>
              <a
                href={UPLOADS_PLAYLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent-400"
              >
                View all ↗
              </a>
            </div>
            <div className="max-h-[360px] overflow-y-auto">
              {videos.map((video, index) => (
                <button
                  key={`${video.title}-${index}`}
                  onClick={() => selectVideo(index)}
                  className={`flex w-full gap-3 border-b border-[#1e1e2e] px-3 py-3 text-left transition ${
                    activeIdx === index ? 'bg-[#1e1e30]' : 'bg-transparent hover:bg-[#181823]'
                  }`}
                >
                  <div className="relative h-10 w-[68px] flex-shrink-0 overflow-hidden rounded-md bg-[#0f1a28]">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                    {activeIdx === index && (
                      <div className="absolute inset-0 flex items-center justify-center bg-accent-500/30">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#c9a96e">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`line-clamp-2 text-xs leading-5 ${activeIdx === index ? 'text-accent-400' : 'text-neutral-300'}`}>
                      {video.title}
                    </p>
                    <span className="mt-1 block text-[10px] text-neutral-600">{video.category}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={`${CHANNEL_URL}?sub_confirmation=1`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg bg-[#ff0000] px-6 py-2.5 text-sm font-medium text-white transition hover:opacity-85"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="white">
              <path d="M19.6 2.2C19.4 1.4 18.8.8 18 .6 16.4.2 10 .2 10 .2S3.6.2 2 .6C1.2.8.6 1.4.4 2.2 0 3.8 0 7 0 7s0 3.2.4 4.8c.2.8.8 1.4 1.6 1.6C3.6 13.8 10 13.8 10 13.8s6.4 0 8-.4c.8-.2 1.4-.8 1.6-1.6C20 10.2 20 7 20 7s0-3.2-.4-4.8zM8 10V4l5.3 3L8 10z" />
            </svg>
            Subscribe to our YouTube channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
