import React from 'react';
import { Link } from 'react-router-dom';
import {
  BlogArticleLayout,
  BlogAuthorBio,
  BlogHeroFigure,
  BlogPillarCta,
} from '../../components/blog/BlogArticle';

const SLUG = 'gynecomastia-recovery-timeline-hyderabad';
const PUBLISHED = '2026-05-13';

const IMG_HERO = '/images/breast/gynecomastia-recovery-timeline-thumbnail.webp';
const ABS_HERO = `https://drramprabhu.com${IMG_HERO}`;

const GynecomastiaRecoveryTimeline: React.FC = () => (
  <BlogArticleLayout
    slug={SLUG}
    title="Gynecomastia Recovery Timeline — Week by Week (Hyderabad)"
    metaDescription="What to expect after gynecomastia surgery: day-by-day and week-by-week recovery, garment use, return to work and gym, red flags, and follow-up. By Dr. Ram Prabhu, DNB Plastic Surgery."
    keywords={[
      'gynecomastia recovery time',
      'gynecomastia recovery week by week',
      'gynecomastia surgery recovery india',
      'male breast reduction recovery',
      'gynecomastia swelling how long',
    ]}
    ogImage={ABS_HERO}
    schemaImages={ABS_HERO}
    publishedAt={PUBLISHED}
    readMin={10}
    breadcrumbLabel="Recovery"
    publishedLabel="13 May 2026"
    lead={
      <BlogHeroFigure
        src={IMG_HERO}
        alt="Gynecomastia recovery timeline — compression garment and week-by-week healing after male chest reduction surgery."
        caption="Recovery is predictable when you follow garment use, activity limits, and follow-up visits."
        fetchPriority="high"
      />
    }
  >
    <p className="text-gray-700 leading-relaxed mb-5">
      Most gynecomastia patients describe recovery as <strong>mild to moderate soreness</strong> — closer to an intense
      chest workout than sharp pain. Swelling and firmness are normal for several weeks; final contour settles over{' '}
      <strong>8-12 weeks</strong>. The timeline below reflects what we typically see after combined liposuction and
      gland excision under general anaesthesia at our Kondapur facility; your surgeon will personalise advice for your
      grade and technique.
    </p>

    <h2 className="text-2xl font-bold text-primary-900 mt-10 mb-4">Day of surgery (Day 0)</h2>
    <p className="text-gray-700 mb-3">
      Surgery is usually <strong>1.5-3 hours</strong> depending on grade. You wake in recovery with a{' '}
      <strong>compression vest</strong>, light dressings, and sometimes small drains (more common in larger resections).
      Most Grade 1-2 patients go home the same evening; Grade 3-4 may stay <strong>one night</strong> for observation.
    </p>
    <ul className="list-disc pl-6 mb-5 text-gray-700 space-y-1">
      <li>Walk with assistance the same day — gentle movement reduces stiffness.</li>
      <li>Clear liquids progressing to a normal diet as tolerated.</li>
      <li>Use prescribed pain relief on a schedule for the first 48 hours, then as needed.</li>
    </ul>

    <h2 className="text-2xl font-bold text-primary-900 mt-10 mb-4">Days 1-3 — peak swelling and bruising</h2>
    <p className="text-gray-700 mb-3">
      Swelling often <strong>worsens slightly before it improves</strong> — that is expected fluid shift, not a sign of
      failure. Bruising may track down the chest wall; it resolves in 2-3 weeks. Sleep with your{' '}
      <strong>upper body slightly elevated</strong> on extra pillows.
    </p>
    <ul className="list-disc pl-6 mb-5 text-gray-700 space-y-1">
      <li>Showering: follow your team’s instructions on when to remove dressings/waterproof covers.</li>
      <li>Wear the garment <strong>23 hours/day</strong> except short breaks if advised.</li>
      <li>Avoid lifting more than 2-3 kg and pushing/pulling motions.</li>
    </ul>

    <h2 className="text-2xl font-bold text-primary-900 mt-10 mb-4">Days 4-7 — desk work and light routine</h2>
    <p className="text-gray-700 mb-3">
      Many desk-based professionals return to work in <strong>2-4 days</strong>; physically demanding jobs may need a
      full week. Driving is reasonable once you are off strong sedating medication and can rotate comfortably — often{' '}
      <strong>day 5-7</strong>.
    </p>
    <p className="text-gray-700 mb-5">
      Short walks are encouraged; still <strong>no gym, swimming, or sauna</strong>. Compression continues full-time.
    </p>

    <h2 className="text-2xl font-bold text-primary-900 mt-10 mb-4">Weeks 2-3 — easing back into activity</h2>
    <p className="text-gray-700 mb-3">
      Swelling decreases noticeably. Low-impact cardio (walking, stationary bike) may be cleared around{' '}
      <strong>week 2-3</strong> if healing is on track. Keep the vest on as directed — it is the single biggest lever for
      smooth contour during this phase.
    </p>

    <h2 className="text-2xl font-bold text-primary-900 mt-10 mb-4">Weeks 4-6 — garment taper and chest caution</h2>
    <p className="text-gray-700 mb-3">
      At the week-4 visit we often transition to <strong>part-time garment wear</strong> (e.g. daytime only) depending on
      skin snap-back. Upper-body gym work stays limited: avoid heavy pec flyes, dips, and maximal push-ups until cleared.
    </p>
    <p className="text-gray-700 mb-5">
      Light resistance for arms/legs may be allowed earlier; <strong>chest-specific loading</strong> commonly resumes in
      stages around <strong>week 6</strong> for combined lipo + gland cases.
    </p>

    <h2 className="text-2xl font-bold text-primary-900 mt-10 mb-4">Months 2-3 — contour refinement</h2>
    <p className="text-gray-700 mb-3">
      Residual firmness (“scar tissue feel”) under the nipple can persist — massage may be recommended after week 6.
      Sun exposure: keep fresh scars covered or use SPF; pigmentation changes are easier to prevent than reverse.
    </p>
    <p className="text-gray-700 mb-5">
      By <strong>8-12 weeks</strong>, most patients see a stable flatter profile in clothing; subtle changes can continue
      for several more months.
    </p>

    <h2 className="text-2xl font-bold text-primary-900 mt-10 mb-4">Red flags — call your surgeon promptly</h2>
    <ul className="list-disc pl-6 mb-5 text-gray-700 space-y-1">
      <li>
        <strong>Fever</strong> with spreading redness or pus at an incision
      </li>
      <li>
        <strong>One-sided dramatic swelling or pain</strong> (possible hematoma)
      </li>
      <li>
        <strong>Shortness of breath</strong>, calf pain, or asymmetric leg swelling (rare clot concerns — seek emergency
        care)
      </li>
      <li>Worsening pain not controlled by prescribed medication after day 2-3</li>
    </ul>

    <h2 className="text-2xl font-bold text-primary-900 mt-10 mb-4">Recovery checklist</h2>
    <div className="overflow-x-auto my-5 not-prose">
      <table className="min-w-full text-sm border border-gray-200">
        <thead className="bg-primary-100 text-primary-900">
          <tr>
            <th className="px-3 py-2 text-left">Do</th>
            <th className="px-3 py-2 text-left">Avoid (until cleared)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="px-3 py-2">Garment as prescribed</td>
            <td className="px-3 py-2">Smoking / nicotine</td>
          </tr>
          <tr className="bg-primary-50">
            <td className="px-3 py-2">Attend follow-ups (day 7, week 4, month 3)</td>
            <td className="px-3 py-2">Heavy chest training early</td>
          </tr>
          <tr className="bg-white">
            <td className="px-3 py-2">Hydration, protein-rich diet</td>
            <td className="px-3 py-2">Soaking wounds / swimming early</td>
          </tr>
          <tr className="bg-primary-50">
            <td className="px-3 py-2">Gentle walking from day 1</td>
            <td className="px-3 py-2">Blood thinners unless approved</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-gray-700 mb-5">
      For grade-specific technique, scars, and what “normal” vs “urgent” looks like on your chest, see the main procedure
      hub: <Link to="/gynecomastia">Gynecomastia surgery in Hyderabad →</Link>
    </p>

    <BlogPillarCta
      title="Plan your surgery with clear milestones"
      body="Book a consultation to map recovery around your work schedule and fitness goals. We provide written instructions and direct access for concerns during healing."
      pillarHref="/gynecomastia"
      pillarButtonLabel="Gynecomastia procedure hub"
      whatsappMessage="Hello Dr. Ram Prabhu, I read your gynecomastia recovery timeline article and have questions about healing after surgery."
    />

    <BlogAuthorBio />
  </BlogArticleLayout>
);

export default GynecomastiaRecoveryTimeline;
