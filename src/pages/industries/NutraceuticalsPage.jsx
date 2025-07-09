import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCheckCircle, FiRefreshCw, FiShield, FiCreditCard, FiGlobe, FiSearch, FiUpload, FiHandshake } = FiIcons;

const NutraceuticalsPage = () => {
  const services = [
    {
      icon: FiCheckCircle,
      title: "Compliant Merchant Accounts",
      description: "Stable processing for vitamins, supplements, and health products, built with regulatory awareness."
    },
    {
      icon: FiRefreshCw,
      title: "Subscription Billing Optimization",
      description: "Seamless recurring payments for your auto-ship programs and continuity offers."
    },
    {
      icon: FiShield,
      title: "Chargeback & Fraud Prevention",
      description: "Advanced tools to protect your revenue and maintain account health in a high-risk landscape."
    },
    {
      icon: FiCreditCard,
      title: "Reliable ACH/E-check Processing",
      description: "Offer alternative payment methods for greater customer flexibility and lower fees."
    },
    {
      icon: FiGlobe,
      title: "Global Sales Support",
      description: "Accept payments from a wide range of international customers with multi-currency options."
    },
    {
      icon: FiSearch,
      title: "Transparent Fee Structures",
      description: "Clear, honest pricing ensures you know exactly what you're paying, no surprises."
    }
  ];

  const howItWorks = [
    {
      icon: FiUpload,
      title: "Share Your Current Statement",
      description: "Securely provide details about your existing nutraceutical payment processing."
    },
    {
      icon: FiSearch,
      title: "Get a Tailored Audit",
      description: "We'll pinpoint compliant, cost-effective solutions for your brand."
    },
    {
      icon: FiHandshake,
      title: "Secure Your Growth with Alex",
      description: "Experience dedicated support and transparent payments, tailored for nutraceutical success."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-golden-sky to-soft-coral">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-gotham font-black text-white mb-6">
              Nutraceutical Payments: Stable & Compliant for Your Growth.
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 font-inter">
              Navigate the complexities of nutraceutical payment processing with confidence. Get transparent, reliable solutions built for your industry, directly from Alex.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Get My Nutraceutical Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
              Decoding Nutraceutical Payment Hurdles.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-inter mb-8">
              The nutraceutical industry is vibrant, but it's often viewed as 'high-risk' due to chargeback rates, subscription models, and scrutiny from financial institutions. Many payment processors avoid the sector entirely or impose restrictive terms. This leaves legitimate health and wellness brands struggling for stable, affordable solutions. At Sunset Swipe, we don't just understand the market; we offer the compliant, reliable processing you need to scale your business without constant payment anxiety.
            </p>
            <p className="text-xl font-montserrat font-semibold text-soft-coral">
              Your growth, our priority.
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
              Payment Solutions as Strong as Your Product.
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
                Your Partner in Health & Commerce.
              </h2>
              <p className="text-lg text-white font-inter mb-6">
                "Hi, I'm Alex. I've seen how frustrating it can be for nutraceutical businesses to find reliable payment processing. You're providing valuable health products, yet often treated with suspicion by traditional banks. At Sunset Swipe, I understand the market nuances, from subscription models to advertising challenges. My commitment is to provide you with a stable, compliant, and transparent payment solution, coupled with direct, personalized support. I'm here to ensure your payment processing is as healthy as the products you sell."
              </p>
              <Link
                to="/"
                className="inline-block bg-soft-coral hover:bg-dusk-purple text-white px-8 py-3 rounded-lg font-montserrat font-bold transition-all duration-300"
              >
                Talk to Alex About Your Payments
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

      {/* Insider Nod */}
      <section className="py-12 bg-twilight-violet">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
              From Alex: Just Between Us, About That "High-Risk" Label...
            </h3>
            <p className="text-lg text-white font-inter">
              "It often feels like 'high-risk' in our world just means you're doing something innovative or selling a product that's, well, actually effective enough to get people talking. We focus on showing financial institutions the real value and stability of your brand, not letting outdated labels define you."
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-gotham font-bold text-white mb-12">
              Your Simple Path to Compliant Payments
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
              Stop the Payment Stress. Start Growing.
            </h2>
            <p className="text-xl text-white mb-8 font-inter">
              Don't let payment processing challenges hinder your nutraceutical business. Get a personalized quote and direct support from Alex – your dedicated concierge for stable, compliant transactions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Get My Nutraceutical Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NutraceuticalsPage;