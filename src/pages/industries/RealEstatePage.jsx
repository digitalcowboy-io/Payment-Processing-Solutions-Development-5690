import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiHome, FiCheckCircle, FiDollarSign, FiLock, FiScale, FiCreditCard, FiUpload, FiSearch, FiHandshake } = FiIcons;

const RealEstatePage = () => {
  const services = [
    {
      icon: FiHome,
      title: "Secure Large Transaction Processing",
      description: "Safely handle high-value property sales, ensuring funds are moved efficiently and securely."
    },
    {
      icon: FiCheckCircle,
      title: "Earnest Money & Deposit Management",
      description: "Streamlined, compliant methods for receiving and holding critical deposits."
    },
    {
      icon: FiDollarSign,
      title: "Commission Disbursement",
      description: "Efficient and auditable payouts to agents and brokers."
    },
    {
      icon: FiLock,
      title: "Escrow Account Integration",
      description: "Securely manage funds held in escrow, with clear audit trails."
    },
    {
      icon: FiScale,
      title: "Real Estate Compliance Features",
      description: "Built-in tools and support to meet industry-specific regulations and reporting."
    },
    {
      icon: FiCreditCard,
      title: "Flexible Payment Acceptance",
      description: "Offer clients convenient ways to pay, from secure online portals to ACH."
    }
  ];

  const howItWorks = [
    {
      icon: FiUpload,
      title: "Share Your Current Setup",
      description: "Securely provide details about your existing real estate payment processes."
    },
    {
      icon: FiSearch,
      title: "Get a Tailored Audit",
      description: "We'll pinpoint efficiencies and compliance solutions for your transactions."
    },
    {
      icon: FiHandshake,
      title: "Close with Confidence with Alex",
      description: "Experience dedicated support and transparent payments, built for real estate success."
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
              Real Estate Payments: Secure Closings, Seamless Transactions.
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 font-inter">
              Manage earnest money, commissions, and large property transactions with confidence. Get secure, compliant payment solutions tailored for real estate, directly from Alex.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Get My Real Estate Quote
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
              Simplifying Real Estate's Complex Payment Landscape.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-inter mb-8">
              In real estate, transactions are often large, time-sensitive, and involve multiple parties. You're constantly managing earnest money deposits, commission disbursements, and substantial property payments, all while navigating strict compliance requirements. Traditional payment systems can be slow, insecure, or lack the specialized features needed for real estate. At Sunset Swipe, we provide robust, compliant payment solutions that ensure your transactions are smooth, secure, and always adhere to industry regulations, freeing you to focus on your clients and closings.
            </p>
            <p className="text-xl font-montserrat font-semibold text-soft-coral">
              Your secure closing is our foundation.
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
              Payment Solutions as Solid as Your Deals.
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
                I Speak Real Estate. Let's Close Strong.
              </h2>
              <p className="text-lg text-white font-inter mb-6">
                "Hi, I'm Alex. I know that in real estate, the last thing you need is a payment hiccup derailing a deal. You're navigating complex transactions, legal requirements, and clients expecting seamless service, but many processors just don't get the nuances. My commitment at Sunset Swipe is to be the expert partner who ensures your payments are as rock-solid as the properties you sell. You get direct, personalized support, transparent processing, and a dedicated concierge who understands the flow of real estate transactions from listing to closing. Let's make sure your payment strategy is always a smooth closing."
              </p>
              <Link
                to="/"
                className="inline-block bg-soft-coral hover:bg-dusk-purple text-white px-8 py-3 rounded-lg font-montserrat font-bold transition-all duration-300"
              >
                Talk to Alex About Real Estate Payments
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
              From Alex: Just Between Us, About That "Earnest" Money...
            </h3>
            <p className="text-lg text-white font-inter">
              "We all know earnest money is more than just a deposit; it's the handshake that says 'this deal is serious.' So, when it comes to getting it processed quickly and securely, we treat it with all the seriousness of a final walkthrough. No last-minute surprises on our end!"
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
              Your Simple Path to Secure Property Payments
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
              Stop Payment Delays. Start Closing More Deals.
            </h2>
            <p className="text-xl text-white mb-8 font-inter">
              Don't let payment complexities create roadblocks in your real estate business. Get a personalized quote and direct support from Alex – your dedicated concierge for secure, compliant transactions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Get My Real Estate Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RealEstatePage;