import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiLock, FiScale, FiDollarSign, FiCalendar, FiShield, FiFileText, FiUpload, FiSearch, FiHandshake } = FiIcons;

const FinancialServicesPage = () => {
  const services = [
    {
      icon: FiLock,
      title: "Bank-Level Security & Encryption",
      description: "Robust protection for all sensitive financial transactions and customer data."
    },
    {
      icon: FiScale,
      title: "Regulatory Compliance Support",
      description: "Tools and guidance to help meet industry-specific regulations (e.g., PCI DSS, AML)."
    },
    {
      icon: FiDollarSign,
      title: "Secure Loan & Investment Payments",
      description: "Streamlined processing for recurring loan payments, investment contributions, and payouts."
    },
    {
      icon: FiCalendar,
      title: "Advisory Fee & Billing Management",
      description: "Efficient solutions for managing recurring advisory fees and client billing."
    },
    {
      icon: FiShield,
      title: "Advanced Fraud Prevention",
      description: "Sophisticated tools to detect and mitigate fraudulent activities in high-value transactions."
    },
    {
      icon: FiFileText,
      title: "Comprehensive Reporting & Audit Trails",
      description: "Detailed insights and records for regulatory reporting and internal analysis."
    }
  ];

  const howItWorks = [
    {
      icon: FiUpload,
      title: "Share Your Current Setup",
      description: "Securely provide details about your existing financial payment processes."
    },
    {
      icon: FiSearch,
      title: "Get a Tailored Security Audit",
      description: "We'll pinpoint compliance gaps and optimize for maximum security."
    },
    {
      icon: FiHandshake,
      title: "Build Trust with Alex",
      description: "Experience dedicated support and transparent solutions, built for financial integrity."
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
              Financial Services Payments: Bank-Level Security, Unmatched Reliability.
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 font-inter">
              Navigate highly regulated payments with confidence. Get robust security, seamless processing, and direct expert support tailored for financial services, directly from Alex.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Get My Financial Services Quote
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
              Mastering Regulatory Hurdles in Financial Payments.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-inter mb-8">
              In financial services, security and compliance aren't just buzzwords; they're non-negotiable. You're handling sensitive data, large transactions, and operating under intense regulatory scrutiny (e.g., PCI DSS, anti-money laundering laws). Many payment processors struggle to meet these stringent requirements, leaving your business vulnerable or bogged down in manual processes. At Sunset Swipe, we prioritize bank-level security and built-in compliance, providing dependable solutions for loan payments, investment transactions, and advisory fees. We ensure your payment infrastructure is as robust as your financial offerings.
            </p>
            <p className="text-xl font-montserrat font-semibold text-soft-coral">
              Your security, our expertise.
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
              Solutions as Secure as Your Client's Trust.
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
                I Understand Risk. Let's Build Trust.
              </h2>
              <p className="text-lg text-white font-inter mb-6">
                "Hi, I'm Alex. In financial services, the stakes are incredibly high. You're managing vast sums of money and client trust, yet finding payment partners who genuinely understand your regulatory obligations and the need for ironclad security can be a challenge. My commitment at Sunset Swipe is to provide exactly that: secure, compliant, and rock-solid payment processing. You get direct access to an expert who speaks your language, offers transparent solutions, and is personally committed to safeguarding your transactions and reputation. Consider me your dedicated risk mitigation partner."
              </p>
              <Link
                to="/"
                className="inline-block bg-soft-coral hover:bg-dusk-purple text-white px-8 py-3 rounded-lg font-montserrat font-bold transition-all duration-300"
              >
                Discuss Security with Alex
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
              From Alex: Just Between Us, About "Regulatory Fatigue"...
            </h3>
            <p className="text-lg text-white font-inter">
              "We all know the joy of a new compliance update, right? It feels like reading a novel where every sentence is legally binding. My job is to translate that complexity into simple, secure payment solutions, so you can focus on your clients, not the latest fine print."
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
              Your Secure Path to Compliant Payments
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
              Stop Risk. Start Trust.
            </h2>
            <p className="text-xl text-white mb-8 font-inter">
              Don't let payment security or compliance be a vulnerability. Get a personalized quote and direct support from Alex – your dedicated concierge for secure, reliable financial transactions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Get My Financial Services Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FinancialServicesPage;