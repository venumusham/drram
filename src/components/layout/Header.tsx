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

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="nav-links">
              <Link 
                to="/" 
                className={`text-sm font-medium hover:text-primary-600 transition-colors ${
                  location.pathname === '/' ? 'text-primary-600' : 'text-gray-800'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`ml-6 text-sm font-medium hover:text-primary-600 transition-colors ${
                  location.pathname === '/about' ? 'text-primary-600' : 'text-gray-800'
                }`}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`ml-6 text-sm font-medium hover:text-primary-600 transition-colors ${
                  location.pathname === '/services' ? 'text-primary-600' : 'text-gray-800'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/gallery" 
                className={`ml-6 text-sm font-medium hover:text-primary-600 transition-colors ${
                  location.pathname === '/gallery' ? 'text-primary-600' : 'text-gray-800'
                }`}
              >
                Gallery
              </Link>
              <Link 
                to="/faq" 
                className={`ml-6 text-sm font-medium hover:text-primary-600 transition-colors ${
                  location.pathname === '/faq' ? 'text-primary-600' : 'text-gray-800'
                }`}
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                className={`ml-6 text-sm font-medium hover:text-primary-600 transition-colors ${
                  location.pathname === '/contact' ? 'text-primary-600' : 'text-gray-800'
                }`}
              >
                Contact
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+919949808628" 
                className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
              >
                <Phone size={16} className="mr-1" /> 
                <span className="text-sm">+91 99498 08628</span>
              </a>
              <Button 
                icon={<Calendar size={16} />}
                href="/contact"
                variant="primary"
              >
                Book Consultation
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-base font-medium hover:text-primary-600 transition-colors ${
                  location.pathname === '/' ? 'text-primary-600' : 'text-gray-800'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`text-base font-medium hover:text-primary-600 transition-colors ${
                  location.pathname === '/about' ? 'text-primary-600' : 'text-gray-800'
                }`}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`text-base font-medium hover:text-primary-600 transition-colors ${
                  location.pathname === '/services' ? 'text-primary-600' : 'text-gray-800'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/gallery" 
                className={`text-base font-medium hover:text-primary-600 transition-colors ${
                  location.pathname === '/gallery' ? 'text-primary-600' : 'text-gray-800'
                }`}
              >
                Gallery
              </Link>
              <Link 
                to="/faq" 
                className={`text-base font-medium hover:text-primary-600 transition-colors ${
                  location.pathname === '/faq' ? 'text-primary-600' : 'text-gray-800'
                }`}
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                className={`text-base font-medium hover:text-primary-600 transition-colors ${
                  location.pathname === '/contact' ? 'text-primary-600' : 'text-gray-800'
                }`}
              >
                Contact
              </Link>
              <div className="pt-4">
                <a 
                  href="tel:+919949808628" 
                  className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <Phone size={16} className="mr-1" /> 
                  <span className="text-sm">+91 99498 08628</span>
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