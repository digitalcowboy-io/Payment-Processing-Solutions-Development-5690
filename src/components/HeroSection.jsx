import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PLGComponent from './PLGComponent';
import { plg } from '../utils/plgos';

const HeroSection = ({ title, subtitle, ctaText, ctaLink, industry }) => {
  const handleCTAClick = () => {
    plg.track('Clicked_GetQuote', { industry: industry || 'General' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-golden-sky to-soft-coral">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-night-indigo p-4 z-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-night-indigo">
        Skip to content
      </a>
      
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-gotham font-black text-night-indigo mb-6">
            {title}
          </h1>
          
          {/* Smart Hero Micro Quiz - Only shown on homepage */}
          {!industry ? (
            <div className="text-xl font-light mb-8">
              <PLGComponent id="Hero_Quiz_SectorFit" fallback={
                <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
                  <p className="text-xl md:text-2xl text-night-indigo mb-0 font-inter font-medium">{subtitle}</p>
                </div>
              } />
            </div>
          ) : (
            <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm mb-8">
              <p className="text-xl md:text-2xl text-night-indigo mb-0 font-inter font-medium">
                {subtitle}
              </p>
            </div>
          )}

          {/* CTA Rotator Component */}
          <div className="cta-container">
            <PLGComponent 
              id={`CTA_QuoteRotator_${industry || 'General'}`} 
              fallback={
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={ctaLink || '/'}
                    className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={handleCTAClick}
                  >
                    {ctaText}
                  </Link>
                </motion.div>
              }
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;