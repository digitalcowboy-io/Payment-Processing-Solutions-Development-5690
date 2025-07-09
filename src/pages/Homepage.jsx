import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import HeroSection from '../components/HeroSection';
import MiniFunnel from '../components/MiniFunnel';
import { plg } from '../utils/plgos';
import AboutAlex from '../components/AboutAlex';

const { FiDollarSign, FiShield, FiTrendingUp, FiUsers, FiGlobe, FiSettings, FiUpload, FiSearch, FiHandshake } = FiIcons;

const Homepage = () => {
  const services = [
    {
      icon: FiDollarSign,
      title: "Rate Audits",
      description: "Uncover hidden savings with expert payment rate reviews."
    },
    {
      icon: FiShield,
      title: "ACH/E-check",
      description: "Seamless electronic payments tailored for your business."
    },
    {
      icon: FiTrendingUp,
      title: "Gift & Loyalty",
      description: "Boost customer retention with custom gift and loyalty programs."
    },
    {
      icon: FiUsers,
      title: "Working Capital",
      description: "Flexible funding solutions to keep your business growing."
    },
    {
      icon: FiGlobe,
      title: "Strategic Consulting",
      description: "Personalized advice to optimize your payment processes."
    },
    {
      icon: FiSettings,
      title: "Integrations",
      description: "Connect effortlessly with Shopify, WooCommerce, and more."
    }
  ];

  const industries = [
    "E-commerce",
    "Travel & Event",
    "Adult Services",
    "Nutraceuticals",
    "CBD",
    "SaaS & Trials",
    "Gaming",
    "Logistics",
    "Real Estate",
    "Financial Services",
    "Telecommunications",
    "Education"
  ];

  const howItWorks = [
    {
      icon: FiUpload,
      title: "Upload a Statement",
      description: "Securely share your current processing statements."
    },
    {
      icon: FiSearch,
      title: "Get a Personalized Audit",
      description: "We'll analyze for hidden fees and true savings potential."
    },
    {
      icon: FiHandshake,
      title: "Start Saving with Your Concierge",
      description: "Enjoy direct support and transparent solutions, designed for your business."
    }
  ];

  const handleIndustryClick = (industry) => {
    plg.track('Selected_Industry', { industry });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with PLG integration */}
      <HeroSection
        title="Your Dedicated Payments Concierge – Across All Industries"
        subtitle="No brokers. No boilerplate. Just honest payment solutions for high-risk and hard-to-place businesses."
        ctaText="Get My Quote"
        ctaLink="/"
      />

      {/* Main content for skip-to-content accessibility */}
      <div id="main-content"></div>
      
      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-soft-coral to-sunset-peach">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-gotham font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-warm-flame mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-soft-coral hover:border-warm-flame"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-soft-coral rounded-full mb-6 mx-auto">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-inter text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add MiniFunnel after Services */}
      <MiniFunnel
        id="MiniFunnel_General"
        fallback={
          <div className="text-center">
            <h3 className="text-2xl font-montserrat font-bold text-gray-800 mb-4">
              Ready to see how much you could save?
            </h3>
            <p className="text-gray-600 font-inter mb-6">
              Take our quick 3-step assessment to get a personalized quote.
            </p>
          </div>
        }
      />

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-b from-sunset-peach to-warm-flame">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-gotham font-bold text-white mb-6">
              We've Got High-Risk Covered.
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-white rounded-full mb-3 flex items-center justify-center mx-auto">
                    <SafeIcon icon={FiShield} className="w-4 h-4 text-warm-flame" />
                  </div>
                  <Link
                    to={`/industries/${industry.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="block text-white hover:text-golden-sky font-inter font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-golden-sky rounded text-center text-sm"
                    onClick={() => handleIndustryClick(industry)}
                  >
                    {industry}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <p className="text-white font-inter italic text-lg">
              Declined before? We'll make your case.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-dusk-purple">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-gotham font-bold text-white mb-4">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-soft-coral mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-20 h-20 bg-soft-coral rounded-full mb-6 mx-auto shadow-lg">
                  <SafeIcon icon={step.icon} className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-white font-inter text-lg opacity-90">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Alex Section */}
      <AboutAlex />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-dusk-purple to-night-indigo">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-gotham font-bold text-white mb-6">
              Ready for Honest Payment Solutions?
            </h2>
            <p className="text-xl text-white mb-8 font-inter opacity-90">
              Stop wasting time and money on solutions that don't fit. Let Alex provide a custom quote tailored to your business. It's fast, free, and comes with no obligation.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
                onClick={() => plg.track('Clicked_FinalCTA')}
              >
                Get My Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;