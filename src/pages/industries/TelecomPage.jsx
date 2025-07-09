import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiSettings, FiGlobe, FiRotateCcw, FiBarChart, FiSmartphone, FiCloud, FiUpload, FiSearch, FiHandshake } = FiIcons;

const TelecomPage = () => {
  const services = [
    {
      icon: FiSettings,
      title: "Complex Recurring Billing",
      description: "Automate billing for diverse service plans, bundles, and add-ons with flexibility."
    },
    {
      icon: FiGlobe,
      title: "International Payment Processing",
      description: "Seamlessly accept payments from a global customer base in multiple currencies."
    },
    {
      icon: FiRotateCcw,
      title: "Automated Dunning Management",
      description: "Smart retry logic and communication to recover failed recurring payments and reduce churn."
    },
    {
      icon: FiBarChart,
      title: "Usage-Based & Tiered Billing",
      description: "Support for metered services and escalating usage fees with precise calculations."
    },
    {
      icon: FiSmartphone,
      title: "Device Sales & Upgrades",
      description: "Secure processing for one-time purchases of hardware and service upgrades."
    },
    {
      icon: FiCloud,
      title: "Integrated Customer Management",
      description: "Sync payment data with your CRM and billing systems for a unified view."
    }
  ];

  const howItWorks = [
    {
      icon: FiUpload,
      title: "Share Your Current Billing Flow",
      description: "Securely provide details about your existing telecom payment processes."
    },
    {
      icon: FiSearch,
      title: "Get a Tailored Optimization Audit",
      description: "We'll pinpoint efficiencies and revenue recovery opportunities."
    },
    {
      icon: FiHandshake,
      title: "Connect with Alex's Solutions",
      description: "Experience dedicated support and transparent payments, built for telecom growth."
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
              Telecom Payments: Connect Your Business to Seamless Billing.
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 font-inter">
              Stop grappling with complex recurring billing and international payments. Get efficient, reliable solutions tailored for your telecom services, directly from Alex.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Get My Telecom Quote
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
              Navigating Telecom's Complex Billing Landscape.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-inter mb-8">
              The telecommunications industry relies on consistent, recurring revenue, but it's often challenged by complex billing scenarios, managing various service packages, international transactions, and the constant threat of involuntary churn. Many payment systems offer basic recurring billing, but they lack the sophistication to truly optimize revenue for diverse telecom offerings. At Sunset Swipe, we provide smart, automated tools designed to streamline your entire billing process, reduce failed payments, and handle global transactions with ease, so you can focus on connecting your customers.
            </p>
            <p className="text-xl font-montserrat font-semibold text-soft-coral">
              Your uninterrupted service, our billing expertise.
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
              Payment Solutions as Reliable as Your Network.
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
                I Connect with Telecom. Let's Optimize Your Payments.
              </h2>
              <p className="text-lg text-white font-inter mb-6">
                "Hi, I'm Alex. In the telecom world, reliable billing is the backbone of your recurring revenue. You're dealing with vast customer bases, intricate service plans, and the constant need for seamless global transactions, all while facing pressure from competitors. Many payment systems simply can't handle this complexity, leading to billing errors or lost subscriptions. My commitment at Sunset Swipe is to be the expert partner who understands your unique challenges. I provide direct, streamlined solutions for all your telecom payment needs, ensuring your revenue streams are always connected and optimized. Consider me your dedicated network operations center for payments."
              </p>
              <Link
                to="/"
                className="inline-block bg-soft-coral hover:bg-dusk-purple text-white px-8 py-3 rounded-lg font-montserrat font-bold transition-all duration-300"
              >
                Talk to Alex About Telecom Payments
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
              From Alex: Just Between Us, About That "Churn"...
            </h3>
            <p className="text-lg text-white font-inter">
              "We all know the biggest silent killer in telecom isn't always competitor pricing; it's often a 'card on file' that quietly expires. We focus on making sure those unintentional disconnections don't hit your bottom line. Your network stays on, and so does your revenue stream."
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
              Your Simple Signal to Better Payments
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
              Stop Billing Headaches. Start Connecting with More Revenue.
            </h2>
            <p className="text-xl text-white mb-8 font-inter">
              Don't let payment complexities disrupt your telecom business. Get a personalized quote and direct support from Alex – your dedicated concierge for streamlined, profitable billing.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Get My Telecom Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TelecomPage;