import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiScale, FiShield, FiLink, FiRefreshCw, FiLayers, FiSearch, FiUpload, FiHandshake } = FiIcons;

const CBDPage = () => {
  const services = [
    {
      icon: FiScale,
      title: "Compliant Merchant Accounts",
      description: "Stable and secure processing for CBD products, adhering to evolving regulations."
    },
    {
      icon: FiShield,
      title: "Chargeback & Fraud Mitigation",
      description: "Proactive tools and strategies to protect your revenue in a high-scrutiny environment."
    },
    {
      icon: FiLink,
      title: "Seamless E-commerce Integration",
      description: "Connect effortlessly with major online platforms supporting CBD sales."
    },
    {
      icon: FiRefreshCw,
      title: "Subscription & Recurring Billing",
      description: "Streamlined solutions for your CBD subscription boxes and regular deliveries."
    },
    {
      icon: FiLayers,
      title: "Diverse Payment Methods",
      description: "Offer customers a range of options, including credit/debit cards and ACH/e-check."
    },
    {
      icon: FiSearch,
      title: "Transparent Fee Structures",
      description: "Clear, honest pricing with no hidden surprises, so you can plan your margins confidently."
    }
  ];

  const howItWorks = [
    {
      icon: FiUpload,
      title: "Share Your Current Statement",
      description: "Securely provide details about your existing CBD payment processing."
    },
    {
      icon: FiSearch,
      title: "Get a Tailored Audit",
      description: "We'll pinpoint compliant, cost-effective solutions for your CBD business."
    },
    {
      icon: FiHandshake,
      title: "Secure Your Payments with Alex",
      description: "Experience dedicated, compliant support and transparent solutions."
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
              CBD Payments: Compliant, Stable, and Stress-Free.
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 font-inter">
              Navigating CBD payment processing shouldn't be a constant battle. Get transparent, reliable solutions built specifically for your compliant business, directly from Alex.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Get My CBD Quote
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
              Cutting Through the Noise in CBD Payments.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-inter mb-8">
              The CBD industry faces unparalleled payment processing hurdles. Despite growing legality, many financial institutions still view CBD as 'high-risk,' leading to frequent account freezes, sky-high fees, and outright rejections. This creates immense instability for legitimate businesses. At Sunset Swipe, we specialize in overcoming these obstacles. We provide the compliant, dependable payment solutions you need to operate with peace of mind, allowing you to focus on your product and your customers.
            </p>
            <p className="text-xl font-montserrat font-semibold text-soft-coral">
              Your compliant growth, our mission.
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
              Processing Solutions as Reliable as Your Products.
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
                I Speak Your Language. Let's Get Compliant.
              </h2>
              <p className="text-lg text-white font-inter mb-6">
                "Hi, I'm Alex. I know that for CBD businesses, finding a reliable payment partner feels like constantly walking on eggshells. You're navigating a complex regulatory landscape, and getting unfairly lumped in with other 'high-risk' industries. My commitment at Sunset Swipe is to be your unwavering support. I understand the specific compliance needs, the marketing nuances, and the frustrations you face. I provide direct, transparent solutions and personally ensure your CBD payment processing is stable, secure, and built for the long haul. No more guessing games, just honest help."
              </p>
              <Link
                to="/"
                className="inline-block bg-soft-coral hover:bg-dusk-purple text-white px-8 py-3 rounded-lg font-montserrat font-bold transition-all duration-300"
              >
                Talk Directly to Alex About CBD
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
              From Alex: Just Between Us, About That "Gray Area"...
            </h3>
            <p className="text-lg text-white font-inter">
              "It seems like every other week, there's a new guideline, a new classification, or a new bank policy around CBD. We're used to keeping our ear to the ground and staying ahead of the curve, so you don't have to spend your days untangling payment 'surprises.'"
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
              Your Simple Path to Stable CBD Payments
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
              Stop the Uncertainty. Secure Your CBD Business.
            </h2>
            <p className="text-xl text-white mb-8 font-inter">
              Don't let payment processing challenges hold your CBD business back. Get a personalized quote and direct support from Alex – your dedicated concierge for stable, compliant transactions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Get My CBD Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CBDPage;