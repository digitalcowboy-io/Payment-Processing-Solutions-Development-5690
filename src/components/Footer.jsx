import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiFacebook, FiTwitter, FiLinkedin } = FiIcons;

const Footer = () => {
  const linkClasses = "block text-gray-300 hover:text-soft-coral transition-colors font-inter focus:outline-none focus:ring-2 focus:ring-soft-coral rounded";
  const socialClasses = "text-soft-coral hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-soft-coral rounded";

  return (
    <footer className="bg-night-indigo text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* CTA Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-gotham font-bold mb-6">Ready to Get Started?</h3>
            <Link
              to="/"
              className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-8 py-4 rounded-lg font-montserrat font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
            >
              Get My Quote
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-montserrat font-semibold mb-6">Navigation</h4>
            <div className="space-y-3">
              <Link to="/" className={linkClasses}>
                Services
              </Link>
              <Link to="/" className={linkClasses}>
                Industries
              </Link>
              <Link to="/" className={linkClasses}>
                About Alex
              </Link>
              <Link to="/" className={linkClasses}>
                Contact
              </Link>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-montserrat font-semibold mb-4">Legal</h4>
              <div className="space-y-3">
                <Link to="/" className={linkClasses}>
                  Privacy Policy
                </Link>
                <Link to="/" className={linkClasses}>
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-montserrat font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <SafeIcon icon={FiMail} className="w-5 h-5 mr-3 text-soft-coral" />
                <span className="font-inter">info@sunsetswipe.com</span>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3 text-soft-coral" />
                <span className="font-inter">(555) 123-4567</span>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-soft-coral font-montserrat font-semibold mb-2">
                Direct access to Alex – your call will be answered.
              </p>
              <p className="text-gray-300 font-inter text-sm">
                Expect a response within 24 hours.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-8">
              <Link to="/" className={socialClasses} aria-label="Facebook">
                <SafeIcon icon={FiFacebook} className="w-6 h-6" />
              </Link>
              <Link to="/" className={socialClasses} aria-label="Twitter">
                <SafeIcon icon={FiTwitter} className="w-6 h-6" />
              </Link>
              <Link to="/" className={socialClasses} aria-label="LinkedIn">
                <SafeIcon icon={FiLinkedin} className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-600 pt-8">
          <p className="text-center text-gray-400 font-inter">
            © {new Date().getFullYear()} Sunset Swipe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;