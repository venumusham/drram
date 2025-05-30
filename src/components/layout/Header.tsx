import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Force all header link text to white for visibility
  const linkColor = 'text-white';
  const activeLinkColor = isScrolled ? 'text-primary-600' : 'text-accent-400';

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo inverted={!isScrolled} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="nav-links">
              <Link
                to="/"
                className={`text-sm font-medium hover:text-accent-400 transition-colors ${
                  location.pathname === '/'
                    ? activeLinkColor
                    : linkColor
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`ml-6 text-sm font-medium hover:text-accent-400 transition-colors ${
                  location.pathname === '/about'
                    ? activeLinkColor
                    : linkColor
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`ml-6 text-sm font-medium hover:text-accent-400 transition-colors ${
                  location.pathname === '/services'
                    ? activeLinkColor
                    : linkColor
                }`}
              >
                Services
              </Link>
              <Link
                to="/gallery"
                className={`ml-6 text-sm font-medium hover:text-accent-400 transition-colors ${
                  location.pathname === '/gallery'
                    ? activeLinkColor
                    : linkColor
                }`}
              >
                Gallery
              </Link>
              <Link
                to="/faq"
                className={`ml-6 text-sm font-medium hover:text-accent-400 transition-colors ${
                  location.pathname === '/faq'
                    ? activeLinkColor
                    : linkColor
                }`}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className={`ml-6 text-sm font-medium hover:text-accent-400 transition-colors ${
                  location.pathname === '/contact'
                    ? activeLinkColor
                    : linkColor
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="tel:+919949808628"
                className={`flex items-center hover:text-accent-400 transition-colors ${linkColor}`}
              >
                <Phone size={20} className="mr-1" />
                <span className="text-sm">+91 99498 08628</span>
              </a>
              <a
                href="https://wa.me/9949808628"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center hover:text-green-500 transition-colors ${linkColor}`}
                aria-label="WhatsApp"
              >
                <img src="/images/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 mr-1" />
                <span className="text-sm hidden lg:inline">WhatsApp</span>
              </a>
              <Button
                icon={<Calendar size={16} />}
                href="/contact"
                variant={isScrolled ? "primary" : "outline"}
                className={!isScrolled ? "border-white text-white hover:bg-white/10" : ""}
              >
                Book Consultation
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 animate-fadeIn bg-white rounded-lg mt-2 shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-base font-medium hover:text-accent-400 transition-colors ${
                  location.pathname === '/'
                    ? 'text-primary-600'
                    : 'text-gray-800'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-base font-medium hover:text-accent-400 transition-colors ${
                  location.pathname === '/about'
                    ? 'text-primary-600'
                    : 'text-gray-800'
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`text-base font-medium hover:text-accent-400 transition-colors ${
                  location.pathname === '/services'
                    ? 'text-primary-600'
                    : 'text-gray-800'
                }`}
              >
                Services
              </Link>
              <Link
                to="/gallery"
                className={`text-base font-medium hover:text-accent-400 transition-colors ${
                  location.pathname === '/gallery'
                    ? 'text-primary-600'
                    : 'text-gray-800'
                }`}
              >
                Gallery
              </Link>
              <Link
                to="/faq"
                className={`text-base font-medium hover:text-accent-400 transition-colors ${
                  location.pathname === '/faq'
                    ? 'text-primary-600'
                    : 'text-gray-800'
                }`}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className={`text-base font-medium hover:text-accent-400 transition-colors ${
                  location.pathname === '/contact'
                    ? 'text-primary-600'
                    : 'text-gray-800'
                }`}
              >
                Contact
              </Link>
              <div className="pt-4 flex flex-col space-y-2">
                <a
                  href="tel:+919949808628"
                  className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                >
                  <Phone size={20} className="mr-1" />
                  <span className="text-sm">+91 99498 08628</span>
                </a>
                <a
                  href="https://wa.me/9949808628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-600 hover:text-green-700 transition-colors"
                  aria-label="WhatsApp"
                >
                  <img src="/images/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 mr-1" />
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>
              <Button
                icon={<Calendar size={16} />}
                href="/contact"
                fullWidth
                variant="primary"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;