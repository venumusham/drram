import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo inverted />
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Dr. Ram Prabhu is dedicated to helping you look and feel your best. 
              We offer a range of aesthetic and reconstructive procedures with a focus on natural results.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#gynecomastia" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Gynecomastia
                </Link>
              </li>
              <li>
                <Link to="/services#liposuction" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Liposuction
                </Link>
              </li>
              <li>
                <Link to="/services#breast" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Breast Procedures
                </Link>
              </li>
              <li>
                <Link to="/services#lipoma" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Lipoma Treatment
                </Link>
              </li>
              <li>
                <Link to="/services#cyst" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Sebaceous Cyst
                </Link>
              </li>
              <li>
                <Link to="/services#aesthetic" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Aesthetic Procedures
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-gray-400" />
                <div className="text-gray-400 text-sm">
                  <p>WhatsApp: +91 93910 38023</p>
                  <p>Clinic: +91 99498 08628</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-gray-400" />
                <span className="text-gray-400 text-sm">ram.musham@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-gray-400" />
                <span className="text-gray-400 text-sm">
                  Idea Clinic, 1st Floor<br />
                  61B, 3rd Street<br />
                  Near Burfighar Sweetshop<br />
                  Sri Ram Nagar, Kondapur<br />
                  Hyderabad
                </span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 text-gray-400" />
                <div className="text-gray-400 text-sm">
                  <p>Everyday: 8am - 5pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Dr. Ram Prabhu. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;