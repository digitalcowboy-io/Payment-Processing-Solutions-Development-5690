import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiChevronDown } = FiIcons;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const industries = [
    { name: 'E-commerce', path: '/industries/ecommerce' },
    { name: 'Travel & Event', path: '/industries/travel-event' },
    { name: 'Adult Services', path: '/industries/adult-services' },
    { name: 'Nutraceuticals', path: '/industries/nutraceuticals' },
    { name: 'CBD & Hemp', path: '/industries/cbd' },
    { name: 'SaaS & Trials', path: '/industries/saas-trials' },
    { name: 'Gaming', path: '/industries/gaming' },
    { name: 'Logistics', path: '/industries/logistics' },
    { name: 'Real Estate', path: '/industries/real-estate' },
    { name: 'Financial Services', path: '/industries/financial-services' },
    { name: 'Telecommunications', path: '/industries/telecom' },
    { name: 'Education', path: '/industries/education' },
  ];

  const isHomepage = location.pathname === '/';

  const linkClasses = "text-white hover:text-soft-coral transition-colors font-inter focus:outline-none focus:ring-2 focus:ring-soft-coral rounded";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomepage ? 'bg-night-indigo shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-soft-coral rounded"
          >
            <img 
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752025837909-sunset_logo_1.png" 
              alt="Sunset Swipe Logo" 
              className="h-8 w-auto"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="text-2xl font-gotham font-bold text-white" style={{ display: 'none' }}>
              Sunset Swipe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={linkClasses}>
              Services
            </Link>
            
            {/* Industries Dropdown */}
            <div 
              className="relative" 
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <button className={`flex items-center ${linkClasses}`}>
                Industries <SafeIcon icon={FiChevronDown} className="ml-1 w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isIndustriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                  >
                    {industries.map((industry, index) => (
                      <Link
                        key={index}
                        to={industry.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-soft-coral hover:text-white transition-colors font-inter text-sm focus:outline-none focus:ring-2 focus:ring-soft-coral rounded-sm"
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link to="/" className={linkClasses}>
              About Alex
            </Link>
            
            <Link to="/" className={linkClasses}>
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link 
              to="/" 
              className="bg-warm-flame hover:bg-twilight-violet text-white px-6 py-3 rounded-lg font-montserrat font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
            >
              Get My Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="lg:hidden text-soft-coral focus:outline-none focus:ring-2 focus:ring-soft-coral rounded"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <SafeIcon icon={isMobileMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 border-t border-gray-600"
            >
              <div className="flex flex-col space-y-4 pt-4">
                <Link 
                  to="/" 
                  className={linkClasses}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                
                {/* Mobile Industries */}
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                    className={`flex items-center ${linkClasses}`}
                  >
                    Industries <SafeIcon icon={FiChevronDown} className="ml-1 w-4 h-4" />
                  </button>
                  
                  <AnimatePresence>
                    {isIndustriesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-2"
                      >
                        {industries.map((industry, index) => (
                          <Link
                            key={index}
                            to={industry.path}
                            className="block text-gray-300 hover:text-soft-coral transition-colors font-inter text-sm focus:outline-none focus:ring-2 focus:ring-soft-coral rounded"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {industry.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link 
                  to="/" 
                  className={linkClasses}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Alex
                </Link>
                
                <Link 
                  to="/" 
                  className={linkClasses}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                
                <Link 
                  to="/" 
                  className="bg-warm-flame hover:bg-twilight-violet text-white px-6 py-3 rounded-lg font-montserrat font-bold transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get My Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;