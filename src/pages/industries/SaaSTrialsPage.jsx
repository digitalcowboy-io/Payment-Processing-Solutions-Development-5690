import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiClock, FiRotateCcw, FiSettings, FiTrendingUp, FiCloud, FiBarChart3, FiUpload, FiSearch, FiHandshake } = FiIcons;

const SaaSTrialsPage = () => {
  const services = [
    {
      icon: FiClock,
      title: "Automated Trial Management",
      description: "Seamlessly convert trial users to subscribers with optimized billing flows."
    },
    {
      icon: FiRotateCcw,
      title: "Advanced Dunning Management",
      description: "Intelligent retry logic and customer communication to recover failed recurring payments."
    },
    {
      icon: FiSettings,
      title: "Subscription Billing & Flexibility",
      description: "Handle complex billing scenarios, usage-based pricing, and flexible plans."
    },
    {
      icon: FiTrendingUp,
      title: "Revenue Recognition Tools",
      description: "Simplify accounting and forecasting for recurring revenue streams."
    },
    {
      icon: FiCloud,
      title: "Seamless CRM & Platform Integrations",
      description: "Connect effortlessly with your existing sales, marketing, and accounting systems."
    },
    {
      icon: FiBarChart3,
      title: "Comprehensive Reporting & Analytics",
      description: "Gain deep insights into your subscription metrics and payment performance."
    }
  ];

  const howItWorks = [
    {
      icon: FiUpload,
      title: "Share Your Current Billing Flow",
      description: "Securely provide details about your existing payment and trial management."
    },
    {
      icon: FiSearch,
      title: "Get a Tailored Optimization Audit",
      description: "We'll pinpoint opportunities to reduce churn and boost recurring revenue."
    },
    {
      icon: FiHandshake,
      title: "Activate Your New Solutions with Alex",
      description: "Experience dedicated support and transparent payments, built for SaaS growth."
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
              SaaS & Trial Payments: Optimize Your Recurring Revenue.
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 font-inter">
              Stop losing subscribers to failed payments and complex billing. Get smart, automated solutions tailored for your SaaS and trial models, directly from Alex.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Get My SaaS Quote
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
              Solving Subscription Billing's Biggest Headaches.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-inter mb-8">
              For SaaS and trial-based businesses, consistent revenue is everything, but it's constantly threatened by involuntary churn, failed payment attempts, and the complexities of managing free trials that convert into paying subscribers. Many payment solutions offer basic recurring billing, but they lack the sophistication to truly optimize your revenue. At Sunset Swipe, we provide smart, automated tools designed to reduce churn, recover lost revenue, and streamline your entire billing process, so you can focus on building amazing software.
            </p>
            <p className="text-xl font-montserrat font-semibold text-soft-coral">
              Your recurring revenue, secured.
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
              Billing Solutions That Fuel Your Growth.
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
                I Speak SaaS. Let's Optimize Your Revenue.
              </h2>
              <p className="text-lg text-white font-inter mb-6">
                "Hi, I'm Alex. I know that in the SaaS world, every percentage point of churn reduction and every recovered failed payment directly impacts your valuation. You're building innovative software, but battling complex billing systems or losing revenue to 'high-risk' labels can be a massive drain. My passion at Sunset Swipe is helping SaaS businesses thrive by providing smart, automated payment solutions that truly boost your bottom line. You get direct, expert support, clear insights, and a partner who understands your recurring revenue model inside and out."
              </p>
              <Link
                to="/"
                className="inline-block bg-soft-coral hover:bg-dusk-purple text-white px-8 py-3 rounded-lg font-montserrat font-bold transition-all duration-300"
              >
                Talk to Alex About Your Subscriptions
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
              "We all know the 'oops, card expired' email can be a silent revenue killer. It's not always about a bad product; sometimes it's just a bad billing flow. We focus on the tech stack behind the payment button, making sure those unintended cancellations become re-activations."
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
              Your Simple Path to Optimized SaaS Revenue
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
              Stop Losing Revenue. Start Scaling.
            </h2>
            <p className="text-xl text-white mb-8 font-inter">
              Don't let payment complexities limit your SaaS growth. Get a personalized quote and direct support from Alex – your dedicated concierge for streamlined, profitable subscriptions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Get My SaaS Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SaaSTrialsPage;