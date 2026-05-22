import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
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
      className={`fixed w-full z-50 transition-all duration-300 ${isMenuOpen ? 'bg-[#0d0d14]/95 py-3 shadow-xl backdrop-blur-md' : isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
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
                className={`text-sm font-medium hover:text-accent-400 transition-colors ${location.pathname === '/'
                  ? activeLinkColor
                  : linkColor
                  }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`ml-6 text-sm font-medium hover:text-accent-400 transition-colors ${location.pathname === '/about'
                  ? activeLinkColor
                  : linkColor
                  }`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`ml-6 text-sm font-medium hover:text-accent-400 transition-colors ${location.pathname === '/services'
                  ? activeLinkColor
                  : linkColor
                  }`}
              >
                Services
              </Link>
              <Link
                to="/blog"
                className={`ml-6 text-sm font-medium hover:text-accent-400 transition-colors ${location.pathname.startsWith('/blog')
                  ? activeLinkColor
                  : linkColor
                  }`}
              >
                Blog
              </Link>

              <Link
                to="/faq"
                className={`ml-6 text-sm font-medium hover:text-accent-400 transition-colors ${location.pathname === '/faq'
                  ? activeLinkColor
                  : linkColor
                  }`}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className={`ml-6 text-sm font-medium hover:text-accent-400 transition-colors ${location.pathname === '/contact'
                  ? activeLinkColor
                  : linkColor
                  }`}
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="tel:9949808628"
                className={`flex items-center hover:text-accent-400 transition-colors ${linkColor}`}
              >
                <Phone size={20} className="mr-1" />
                <span className="text-sm">9949808628</span>
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
                href="/book-appointment"
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
          <div className="md:hidden mt-3 overflow-hidden rounded-xl border border-accent-200/60 bg-white shadow-2xl animate-fadeIn">
            <div className="flex flex-col px-4 py-4">
              <Link
                to="/"
                className={`rounded-lg px-3 py-2.5 text-base font-medium hover:bg-accent-50 hover:text-accent-500 transition-colors ${location.pathname === '/'
                  ? 'text-primary-600'
                  : 'text-gray-800'
                  }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`rounded-lg px-3 py-2.5 text-base font-medium hover:bg-accent-50 hover:text-accent-500 transition-colors ${location.pathname === '/about'
                  ? 'text-primary-600'
                  : 'text-gray-800'
                  }`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`rounded-lg px-3 py-2.5 text-base font-medium hover:bg-accent-50 hover:text-accent-500 transition-colors ${location.pathname === '/services'
                  ? 'text-primary-600'
                  : 'text-gray-800'
                  }`}
              >
                Services
              </Link>
              <Link
                to="/blog"
                className={`rounded-lg px-3 py-2.5 text-base font-medium hover:bg-accent-50 hover:text-accent-500 transition-colors ${location.pathname.startsWith('/blog')
                  ? 'text-primary-600'
                  : 'text-gray-800'
                  }`}
              >
                Blog
              </Link>

              <Link
                to="/faq"
                className={`rounded-lg px-3 py-2.5 text-base font-medium hover:bg-accent-50 hover:text-accent-500 transition-colors ${location.pathname === '/faq'
                  ? 'text-primary-600'
                  : 'text-gray-800'
                  }`}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className={`rounded-lg px-3 py-2.5 text-base font-medium hover:bg-accent-50 hover:text-accent-500 transition-colors ${location.pathname === '/contact'
                  ? 'text-primary-600'
                  : 'text-gray-800'
                  }`}
              >
                Contact
              </Link>
              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-gray-100 pt-4">
                <a
                  href="tel:9949808628"
                  className="flex items-center justify-center rounded-lg bg-primary-50 px-3 py-2.5 text-primary-700 hover:text-primary-800 transition-colors"
                >
                  <Phone size={18} className="mr-1" />
                  <span className="text-sm">9949808628</span>
                </a>
                <a
                  href="https://wa.me/9949808628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-lg bg-green-50 px-3 py-2.5 text-green-700 hover:text-green-800 transition-colors"
                  aria-label="WhatsApp"
                >
                  <img src="/images/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 mr-1" />
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>
              <Link
                to="/book-appointment"
                className="mt-3 flex w-full items-center justify-center rounded-lg bg-accent-500 px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent-400"
              >
                <Calendar size={16} className="mr-2" />
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
