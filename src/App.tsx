import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import GalleryPage from './pages/Gallery';
import FAQPage from './pages/FAQ';
import PlasticSurgeonHyderabad from './pages/PlasticSurgeonHyderabad';
import PlasticSurgeryKondapur from './pages/PlasticSurgeryKondapur';
import CosmeticSurgeonMadhapur from './pages/CosmeticSurgeonMadhapur';
import PlasticSurgeonGachibowli from './pages/PlasticSurgeonGachibowli';
import PlasticSurgeonHitechCity from './pages/PlasticSurgeonHitechCity';
import FaceliftPage from './pages/services/facelift';
import BodyContouringPage from './pages/services/body-contouring';
import BreastProceduresPage from './pages/services/breast-procedures';
import ReconstructivePage from './pages/services/reconstructive';

function App() {
  return (
    <Router>
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
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/plastic-surgeon-hyderabad" element={<PlasticSurgeonHyderabad />} />
            <Route path="/plastic-surgery-kondapur" element={<PlasticSurgeryKondapur />} />
            <Route path="/cosmetic-surgeon-madhapur" element={<CosmeticSurgeonMadhapur />} />
            <Route path="/plastic-surgeon-gachibowli" element={<PlasticSurgeonGachibowli />} />
            <Route path="/plastic-surgeon-hitech-city" element={<PlasticSurgeonHitechCity />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;