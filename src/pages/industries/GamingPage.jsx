import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPlay, FiGlobe, FiShield, FiRefreshCw, FiScale, FiLink, FiUpload, FiSearch, FiHandshake } = FiIcons;

const GamingPage = () => {
  const services = [
    {
      icon: FiPlay,
      title: "Real-time Processing & High Volume",
      description: "Handle rapid, high-frequency transactions for in-game purchases and digital goods."
    },
    {
      icon: FiGlobe,
      title: "Multi-Currency & Global Reach",
      description: "Accept payments from players worldwide, in their local currency."
    },
    {
      icon: FiShield,
      title: "Specialized Fraud Protection",
      description: "Advanced filters and monitoring to combat digital fraud and protect your game's economy."
    },
    {
      icon: FiRefreshCw,
      title: "Subscription & Recurring Billing",
      description: "Seamlessly manage battle passes, monthly subscriptions, and recurring content."
    },
    {
      icon: FiScale,
      title: "Flexible Payouts & Royalty Management",
      description: "Streamline payments to developers, partners, and content creators."
    },
    {
      icon: FiLink,
      title: "Integration with Gaming Platforms",
      description: "Connect effortlessly with popular gaming engines and marketplaces."
    }
  ];

  const howItWorks = [
    {
      icon: FiUpload,
      title: "Share Your Current Setup",
      description: "Securely provide details about your existing gaming payment processing."
    },
    {
      icon: FiSearch,
      title: "Get a Tailored Audit",
      description: "We'll pinpoint secure, efficient solutions for your game's economy."
    },
    {
      icon: FiHandshake,
      title: "Level Up with Alex",
      description: "Experience dedicated support and transparent payments, built for gaming success."
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
              Gaming Payments: Powering Your Play, Protecting Your Profits.
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 font-inter">
              Stop worrying about payment friction and fraud. Get robust, real-time processing tailored for digital goods, in-app purchases, and global players, directly from Alex.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Get My Gaming Quote
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
              Conquering Gaming's Unique Payment Challenges.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-inter mb-8">
              The gaming industry moves at lightning speed, but payment processing often lags behind. You're dealing with high-frequency micro-transactions, a global player base, and the unique challenges of digital goods and in-app purchases, which can lead to increased fraud and chargebacks. Many traditional processors simply aren't equipped for this dynamic environment, causing frustrating delays or lost revenue. At Sunset Swipe, we provide real-time, flexible payment solutions built to keep up with your game, ensuring a seamless experience for your players and robust protection for your bottom line.
            </p>
            <p className="text-xl font-montserrat font-semibold text-soft-coral">
              Level up your payment processing.
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
              Uninterrupted Play, Optimized Payments.
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
                I Understand Your Game. Let's Win on Payments.
              </h2>
              <p className="text-lg text-white font-inter mb-6">
                "Hi, I'm Alex. I know that in the gaming world, every millisecond counts, especially for payments. You're building immersive experiences, but battling payment slowdowns or frustrating fraud attempts can feel like an unwinnable boss fight. At Sunset Swipe, I'm dedicated to providing payment solutions that are as agile and secure as your game. You'll get direct, expert support, transparent terms, and a partner who truly understands the dynamics of digital economies and global player bases. Let's make sure your payment strategy is a cheat code for success."
              </p>
              <Link
                to="/"
                className="inline-block bg-soft-coral hover:bg-dusk-purple text-white px-8 py-3 rounded-lg font-montserrat font-bold transition-all duration-300"
              >
                Talk to Alex About Gaming Payments
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
              From Alex: Just Between Us, About Those "Micro-Transactions"...
            </h3>
            <p className="text-lg text-white font-inter">
              "We know that in gaming, sometimes the smallest purchase can have the biggest impact on player retention. And while everyone else is focused on the big whales, we make sure even your 99-cent power-ups go through seamlessly. Every transaction counts, right?"
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
              Your Simple Strategy for Optimized Gaming Payments
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
              Stop the Payment Lag. Start Winning.
            </h2>
            <p className="text-xl text-white mb-8 font-inter">
              Don't let payment complexities create friction in your game. Get a personalized quote and direct support from Alex – your dedicated concierge for secure, high-performance gaming transactions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Get My Gaming Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GamingPage;