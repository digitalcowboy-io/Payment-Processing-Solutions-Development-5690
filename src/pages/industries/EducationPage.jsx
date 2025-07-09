import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiBook, FiRefreshCw, FiLock, FiAward, FiFileText, FiLink, FiUpload, FiSearch, FiHandshake } = FiIcons;

const EducationPage = () => {
  const services = [
    {
      icon: FiBook,
      title: "Flexible Tuition & Fee Payments",
      description: "Support for one-time payments, installment plans, and recurring fees with ease."
    },
    {
      icon: FiRefreshCw,
      title: "Automated Billing for Online Learning",
      description: "Streamline subscriptions, course access, and recurring content fees for digital platforms."
    },
    {
      icon: FiLock,
      title: "Secure Payment Portals",
      description: "Provide students and parents with a safe, user-friendly way to manage payments online."
    },
    {
      icon: FiAward,
      title: "Scholarship & Discount Management",
      description: "Integrate seamlessly with your existing financial aid and discount systems."
    },
    {
      icon: FiFileText,
      title: "Comprehensive Reporting & Reconciliation",
      description: "Simplify accounting and auditing with detailed transaction data."
    },
    {
      icon: FiLink,
      title: "Integrated Enrollment & LMS Platforms",
      description: "Connect effortlessly with popular student information systems and learning management platforms."
    }
  ];

  const howItWorks = [
    {
      icon: FiUpload,
      title: "Share Your Current Billing Process",
      description: "Securely provide details about your existing education payment flows."
    },
    {
      icon: FiSearch,
      title: "Get a Tailored Audit",
      description: "We'll pinpoint efficiencies and compliance solutions for your institution."
    },
    {
      icon: FiHandshake,
      title: "Grade A Payments with Alex",
      description: "Experience dedicated support and transparent solutions, built for educational success."
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
              Education Payments: Flexible, Seamless, and Always Learning.
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 font-inter">
              Simplify tuition, course fees, and recurring memberships. Get efficient, reliable payment solutions tailored for your educational institution or platform, directly from Alex.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Get My Education Quote
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
              Solving Education's Complex Payment Equations.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-inter mb-8">
              Educational institutions and online learning platforms face unique financial challenges: managing large tuition payments, diverse course fees, subscription-based models, and the need for flexible installment plans. Traditional payment systems often struggle with this complexity, leading to manual reconciliation, administrative burden, and friction for students and parents. At Sunset Swipe, we provide smart, automated billing solutions designed to streamline your financial operations, reduce administrative overhead, and offer the payment flexibility your students need to succeed.
            </p>
            <p className="text-xl font-montserrat font-semibold text-soft-coral">
              Your focus is education, ours is your payments.
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
              Payment Solutions That Pass Every Test.
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
                I Speak Your Language. Let's Educate Your Payments.
              </h2>
              <p className="text-lg text-white font-inter mb-6">
                "Hi, I'm Alex. I know that for educational institutions, your mission is to empower students, not to get bogged down in payment complexities. You're managing diverse payment schedules, sensitive student data, and the need for administrative efficiency, but many payment systems just aren't built for education's unique rhythm. My commitment at Sunset Swipe is to be the expert partner who understands these nuances. You get direct, personalized support, transparent solutions, and a dedicated concierge who ensures your payment processing is as seamless as your learning experience. Let's make sure your financial operations are always top of the class."
              </p>
              <Link
                to="/"
                className="inline-block bg-soft-coral hover:bg-dusk-purple text-white px-8 py-3 rounded-lg font-montserrat font-bold transition-all duration-300"
              >
                Talk to Alex About Education Payments
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
              From Alex: Just Between Us, About "Enrollment Season"...
            </h3>
            <p className="text-lg text-white font-inter">
              "We all know that 'enrollment season' isn't just about new students; it's also about a massive surge of tuition payments. It's like a pop quiz on your payment system's scalability. We make sure you ace that test every time, without a single 'technical difficulty' excuse."
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
              Your Simple Curriculum for Better Payments
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
              Stop Payment Complexities. Start Empowering Your Mission.
            </h2>
            <p className="text-xl text-white mb-8 font-inter">
              Don't let outdated payment systems hold back your educational institution or online platform. Get a personalized quote and direct support from Alex – your dedicated concierge for flexible, seamless transactions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Get My Education Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;