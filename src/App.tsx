import { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingSocialBar from './components/FloatingSocialBar';
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import BookAppointment from './pages/BookAppointment';
import FAQPage from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SitemapPage from './pages/SitemapPage';
import AdminScheduleSetter from './pages/AdminScheduleSetter';
import PlasticSurgeonHyderabad from './pages/PlasticSurgeonHyderabad';
import PlasticSurgeryKondapur from './pages/PlasticSurgeryKondapur';
import CosmeticSurgeonMadhapur from './pages/CosmeticSurgeonMadhapur';
import PlasticSurgeonGachibowli from './pages/PlasticSurgeonGachibowli';
import PlasticSurgeonHitechCity from './pages/PlasticSurgeonHitechCity';
import FaceliftPage from './pages/services/facelift';
import BodyContouringPage from './pages/services/body-contouring';
import BreastProceduresPage from './pages/services/breast-procedures';
import { ReconstructivePage } from './pages/services/reconstructive';
import GynecomastiaLanding from './pages/GynecomastiaLanding';
import StaplerCircumcision from './pages/StaplerCircumcision';
import NotFoundPage from './pages/NotFound';
// Money pages — long-form SEO-optimized procedure landings (Step 6).
// All use the shared MoneyPageTemplate component with structured data.
import RhinoplastyHyderabad from './pages/money/RhinoplastyHyderabad';
import LiposuctionHyderabad from './pages/money/LiposuctionHyderabad';
import FaceliftHyderabad from './pages/money/FaceliftHyderabad';
import BreastAugmentationHyderabad from './pages/money/BreastAugmentationHyderabad';
import TummyTuckHyderabad from './pages/money/TummyTuckHyderabad';
import LipomaRemovalHyderabad from './pages/money/LipomaRemovalHyderabad';
import EarlobeRepairKondapur from './pages/money/EarlobeRepairKondapur';
// Step 7 — Medical tourism / NRI landing + Blog
import MedicalTourismIndia from './pages/MedicalTourismIndia';
import BlogIndex from './pages/Blog';
import GynecomastiaCostGuide from './pages/blog/GynecomastiaCostGuide';
import GynecomastiaRecoveryTimeline from './pages/blog/GynecomastiaRecoveryTimeline';
import BlogMarkdownPost from './pages/blog/BlogMarkdownPost';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    if (hash) return;
    const reset = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    reset();
    const raf = window.requestAnimationFrame(() => {
      reset();
      window.requestAnimationFrame(reset);
    });
    const timeouts = [50, 150, 350, 800].map((delay) => window.setTimeout(reset, delay));
    return () => {
      window.cancelAnimationFrame(raf);
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
    };
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <div className="font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/facelift" element={<FaceliftPage />} />
            <Route path="/services/body-contouring" element={<BodyContouringPage />} />
            <Route path="/services/breast-procedures" element={<BreastProceduresPage />} />
            <Route path="/services/reconstructive" element={<ReconstructivePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/admin/schedule" element={<AdminScheduleSetter />} />
            <Route path="/plastic-surgeon-hyderabad" element={<PlasticSurgeonHyderabad />} />
            <Route path="/plastic-surgery-kondapur" element={<PlasticSurgeryKondapur />} />
            <Route path="/cosmetic-surgeon-madhapur" element={<CosmeticSurgeonMadhapur />} />
            <Route path="/plastic-surgeon-gachibowli" element={<PlasticSurgeonGachibowli />} />
            <Route path="/plastic-surgeon-hitech-city" element={<PlasticSurgeonHitechCity />} />
            <Route path="/gynecomastia" element={<GynecomastiaLanding />} />
            <Route path="/stapler-circumcision-hyderabad" element={<StaplerCircumcision />} />
            {/* Money pages (Step 6) */}
            <Route path="/rhinoplasty-hyderabad" element={<RhinoplastyHyderabad />} />
            <Route path="/liposuction-hyderabad" element={<LiposuctionHyderabad />} />
            <Route path="/facelift-hyderabad" element={<FaceliftHyderabad />} />
            <Route path="/breast-augmentation-hyderabad" element={<BreastAugmentationHyderabad />} />
            <Route path="/tummy-tuck-hyderabad" element={<TummyTuckHyderabad />} />
            <Route path="/lipoma-removal-hyderabad" element={<LipomaRemovalHyderabad />} />
            <Route path="/earlobe-repair-kondapur" element={<EarlobeRepairKondapur />} />
            {/* Medical tourism (Step 7) */}
            <Route path="/medical-tourism-india" element={<MedicalTourismIndia />} />
            {/* Blog (Step 7) */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route
              path="/blog/gynecomastia-surgery-cost-hyderabad-2026-guide"
              element={<GynecomastiaCostGuide />}
            />
            <Route path="/blog/gynecomastia-recovery-timeline-hyderabad" element={<GynecomastiaRecoveryTimeline />} />
            <Route path="/blog/:slug" element={<BlogMarkdownPost />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingSocialBar />
        {/* Spacer to prevent bottom mobile bar from covering footer content */}
        <div className="h-14 md:hidden" aria-hidden="true" />
      </div>
    </Router>
  );
}

export default App;
