import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiLock, FiShield, FiGavel, FiLayers, FiGlobe, FiSearch, FiUpload, FiHandshake } = FiIcons;

const AdultServicesPage = () => {
  const services = [
    {
      icon: FiLock,
      title: "Stable Merchant Accounts",
      description: "Secure processing specifically designed to handle adult content transactions with minimal disruption."
    },
    {
      icon: FiShield,
      title: "Discreet & Secure Transactions",
      description: "Ensure privacy and data protection for both your business and your customers."
    },
    {
      icon: FiGavel,
      title: "Chargeback & Fraud Protection",
      description: "Advanced tools and strategies to mitigate common risks in this vertical."
    },
    {
      icon: FiLayers,
      title: "Multiple Processing Options",
      description: "Access to diverse payment gateways and solutions, including ACH/e-check."
    },
    {
      icon: FiGlobe,
      title: "Global Payment Acceptance",
      description: "Seamlessly process transactions from international clients."
    },
    {
      icon: FiSearch,
      title: "Transparent Fee Structure",
      description: "Clear, honest pricing without hidden surprises or predatory rates."
    }
  ];

  const howItWorks = [
    {
      icon: FiUpload,
      title: "Share Your Current Statement",
      description: "Securely provide details about your existing payment processing."
    },
    {
      icon: FiSearch,
      title: "Get a Tailored Audit",
      description: "We'll pinpoint stable, cost-effective solutions for your unique business needs."
    },
    {
      icon: FiHandshake,
      title: "Secure Your Payments with Alex",
      description: "Experience dedicated, judgment-free support and transparent payment solutions."
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
              Adult Services Payments: Stable, Discreet & Reliable.
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 font-inter">
              Stop the frustrating account freezes and confusing declines. Get transparent, dependable payment solutions designed specifically for your adult-oriented business, directly from Alex.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Get My Adult Services Quote
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
              Navigating Adult Services Payments: The Real Talk.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-inter mb-8">
              Operating in the adult services industry means constantly battling a label: 'high-risk.' This often translates to sudden account closures, excessive fees, and a lack of reliable partners. Mainstream banks simply don't want the perceived liability, leaving legitimate businesses in a constant state of uncertainty. At Sunset Swipe, we don't shy away from your industry. We provide the stable, secure, and respectful payment processing you need to operate without constant fear of disruption.
            </p>
            <p className="text-xl font-montserrat font-semibold text-soft-coral">
              Reliability you can finally trust.
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
              Solutions Built for Your Unique Business.
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
                I Get It. Let's Talk Payments.
              </h2>
              <p className="text-lg text-white font-inter mb-6">
                "Hi, I'm Alex. For adult services businesses, the phrase 'high-risk' isn't just a label; it's a daily battle for stable operations. I understand the unique challenges you face – the stigma, the constant search for a reliable banking partner, and the frustration of being unfairly categorized. My goal at Sunset Swipe is simple: to be the reliable, understanding partner you've been looking for. I provide direct, honest solutions, without judgment, so you can focus on running your business, not worrying about payment processing."
              </p>
              <Link
                to="/"
                className="inline-block bg-soft-coral hover:bg-dusk-purple text-white px-8 py-3 rounded-lg font-montserrat font-bold transition-all duration-300"
              >
                Speak Directly with Alex
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
              From Alex: Just Between Us...
            </h3>
            <p className="text-lg text-white font-inter">
              "Let's be real, you've probably heard the term 'chargeback' more times than you'd care to count, and sometimes it feels like a surprise cameo appearance after the main show. Rest assured, we focus on prevention and clear resolution, not just reacting to unexpected plot twists."
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
              Your Simple Path to Stable Processing
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
              Stop the Uncertainty. Secure Your Business.
            </h2>
            <p className="text-xl text-white mb-8 font-inter">
              Don't let payment processing challenges hold your adult services business back. Get a personalized quote and direct, discreet support from Alex – your dedicated concierge for reliable transactions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Get My Adult Services Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AdultServicesPage;