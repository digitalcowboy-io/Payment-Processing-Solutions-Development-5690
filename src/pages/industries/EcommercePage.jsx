import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import HeroSection from '../../components/HeroSection';
import IndustryOnboarding from '../../components/IndustryOnboarding';
import MiniFunnel from '../../components/MiniFunnel';
import { plg } from '../../utils/plgos';

const { FiLink, FiShield, FiTrendingUp, FiGlobe, FiRefreshCw, FiDollarSign, FiUpload, FiSearch, FiHandshake } = FiIcons;

const EcommercePage = () => {
  useEffect(() => {
    // Track industry page view
    plg.track('Viewed_Industry_Page', { industry: 'Ecommerce' });
  }, []);

  const services = [
    {
      icon: FiLink,
      title: "Seamless E-commerce Integrations",
      description: "Connect effortlessly with Shopify, WooCommerce, Magento, BigCommerce, and more."
    },
    {
      icon: FiShield,
      title: "Robust Fraud & Chargeback Prevention",
      description: "Advanced tools to protect your revenue and minimize disputes."
    },
    {
      icon: FiTrendingUp,
      title: "Reliable High-Risk Processing",
      description: "Stable accounts for products often flagged by mainstream providers."
    },
    {
      icon: FiGlobe,
      title: "Multi-Currency & Global Reach",
      description: "Accept payments from anywhere, in any major currency."
    },
    {
      icon: FiRefreshCw,
      title: "Subscription Billing Support",
      description: "Streamline recurring payments for your membership or subscription boxes."
    },
    {
      icon: FiDollarSign,
      title: "Fast Payouts & Transparent Fees",
      description: "Keep your cash flow healthy with clear, honest pricing."
    }
  ];

  const howItWorks = [
    {
      icon: FiUpload,
      title: "Upload Your Current Statement",
      description: "Securely share your existing e-commerce processing statements."
    },
    {
      icon: FiSearch,
      title: "Get a Personalized E-commerce Audit",
      description: "We'll analyze for hidden fees and untapped savings for your online sales."
    },
    {
      icon: FiHandshake,
      title: "Start Saving with Alex",
      description: "Enjoy direct support and transparent solutions, designed for your online business."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with PLG Integration */}
      <HeroSection 
        title="E-commerce Payments: Seamlessly Simple, Expertly Handled."
        subtitle="Stop navigating confusing payment processors and frustrating declines. Get transparent, reliable solutions tailored for your online store, directly from Alex."
        ctaText="Get My E-commerce Quote"
        ctaLink="/"
        industry="Ecommerce"
      />

      {/* Industry-Based Onboarding Quiz */}
      <IndustryOnboarding industry="Ecommerce" />

      {/* Problem & Solution */}
      <section className="py-20 bg-gradient-to-b from-soft-coral to-sunset-peach">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-gotham font-bold text-gray-800 mb-8">
              Solving E-commerce's Toughest Payment Hurdles.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-inter mb-8">
              Running an online store comes with unique challenges: high chargebacks, fraud risks, and banks often flagging certain products as 'high-risk.' Traditional payment processors shy away or offer one-size-fits-all solutions that just don't work. At Sunset Swipe, we don't just process payments; we understand the e-commerce landscape. We offer the stability and support you need to keep your online sales flowing, no matter your product.
            </p>
            <p className="text-xl font-montserrat font-semibold text-soft-coral">
              Your online success is our priority.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-sunset-peach to-warm-flame">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-gotham font-bold text-white mb-4">
              Unlock Your Online Store's Full Potential.
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-soft-coral rounded-full mb-6 mx-auto">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-white mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-white font-inter text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Embedded Mini Funnel */}
      <MiniFunnel 
        id="MiniFunnel_Ecommerce" 
        fallback={
          <div className="text-center">
            <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
              Ready to optimize your e-commerce payments?
            </h3>
            <p className="text-white font-inter mb-6">
              Let's find the perfect solution for your online store.
            </p>
          </div>
        }
      />

      {/* Alex's Personal Touch */}
      <section className="py-20 bg-gradient-to-b from-warm-flame to-twilight-violet">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-gotham font-bold text-white mb-6">
                E-commerce Is Personal. So Is My Support.
              </h2>
              <p className="text-lg text-white font-inter mb-6">
                "Hi, I'm Alex. I know the e-commerce world never stops, and neither should your payments. I've seen countless online businesses get shut down or stuck with predatory rates because they're labeled 'high-risk.' That's not how I operate. I offer transparent, stable solutions and direct support – no call centers, no runaround. I'm here to ensure your online sales run smoothly, so you can focus on growing your brand."
              </p>
              <Link
                to="/"
                className="inline-block bg-soft-coral hover:bg-dusk-purple text-white px-8 py-3 rounded-lg font-montserrat font-bold transition-all duration-300"
                onClick={() => plg.track('Clicked_ScheduleCall', { industry: 'Ecommerce' })}
              >
                Schedule a Call with Alex
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-80 h-80 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">👨‍💼</div>
                  <p className="font-montserrat font-bold">Alex's Picture Goes Here</p>
                </div>
              </div>
            </motion.div>
          </div>
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-gotham font-bold text-white mb-12">
              Your Simple Path to Better E-commerce Payments
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 mx-auto">
                  <SafeIcon icon={step.icon} className="w-10 h-10 text-dusk-purple" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-white font-inter text-lg">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-dusk-purple to-night-indigo">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-gotham font-bold text-white mb-6">
              It's Time for Payments That Power Your Online Growth.
            </h2>
            <p className="text-xl text-white mb-8 font-inter">
              Stop leaving money on the table or risking account shutdowns. Get a personalized quote for your e-commerce business directly from Alex. It's fast, free, and completely tailored to your needs.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
                onClick={() => plg.track('Clicked_FinalCTA', { industry: 'Ecommerce' })}
              >
                Get My E-commerce Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EcommercePage;