import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiFileText, FiTruck, FiDollarSign, FiSmartphone, FiCloud, FiShield, FiUpload, FiSearch, FiHandshake } = FiIcons;

const LogisticsPage = () => {
  const services = [
    {
      icon: FiFileText,
      title: "Complex B2B Billing",
      description: "Streamlined processing for high-value freight, recurring contracts, and various client payment terms."
    },
    {
      icon: FiTruck,
      title: "Fleet Card Processing",
      description: "Optimize payments for fuel, maintenance, and operational expenses across your entire fleet."
    },
    {
      icon: FiDollarSign,
      title: "Driver & Vendor Payouts",
      description: "Efficient and secure methods for contractor payments, per diems, and vendor settlements."
    },
    {
      icon: FiSmartphone,
      title: "Mobile Payment Solutions",
      description: "Empower your drivers and field agents with secure, on-the-go payment acceptance."
    },
    {
      icon: FiCloud,
      title: "Integrated Accounting",
      description: "Seamlessly sync payment data with your existing accounting and ERP systems."
    },
    {
      icon: FiShield,
      title: "Chargeback Management & Fraud Prevention",
      description: "Protect your large transactions and high-volume operations from disputes."
    }
  ];

  const howItWorks = [
    {
      icon: FiUpload,
      title: "Share Your Current Setup",
      description: "Securely provide details about your existing logistics payment processes."
    },
    {
      icon: FiSearch,
      title: "Get a Tailored Audit",
      description: "We'll pinpoint efficiencies and savings across your payment flows."
    },
    {
      icon: FiHandshake,
      title: "Get Moving with Alex",
      description: "Experience dedicated support and transparent solutions, built for logistics success."
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
              Logistics Payments: Keeping Your Supply Chain Moving.
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 font-inter">
              Stop grappling with complex B2B payments and fleet transactions. Get efficient, reliable solutions tailored for your logistics operation, directly from Alex.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Get My Logistics Quote
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
              Uncomplicating Payments Across Your Supply Chain.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-inter mb-8">
              In the logistics world, every moment counts, and payment delays can bring your operations to a grinding halt. You're constantly managing complex B2B invoicing, driver settlements, fuel purchases, and a myriad of diverse payment methods. Traditional processors often lack the flexibility or understanding for these multi-faceted transactions, leading to inefficiencies and cash flow issues. At Sunset Swipe, we provide adaptable, reliable payment solutions that streamline your entire financial workflow, ensuring your goods — and your money — move efficiently.
            </p>
            <p className="text-xl font-montserrat font-semibold text-soft-coral">
              Your efficiency, our expertise.
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
              Payment Solutions for Every Mile of Your Business.
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
                I Speak Your Language. Let's Get Moving.
              </h2>
              <p className="text-lg text-white font-inter mb-6">
                "Hi, I'm Alex. I know that in logistics, payment efficiency directly impacts your bottom line and operational flow. You're managing a complex network of transactions, from big contracts to daily fuel costs, and traditional payment systems often create bottlenecks. My commitment at Sunset Swipe is to be the expert partner who understands your unique challenges. I provide direct, streamlined solutions for all your payment needs, ensuring your operations never miss a beat. Consider me your personal traffic controller for payments."
              </p>
              <Link
                to="/"
                className="inline-block bg-soft-coral hover:bg-dusk-purple text-white px-8 py-3 rounded-lg font-montserrat font-bold transition-all duration-300"
              >
                Talk to Alex About Logistics Payments
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
              From Alex: Just Between Us, About That "Paperwork Highway"...
            </h3>
            <p className="text-lg text-white font-inter">
              "We all know the joy of managing a load, only to find the payment details are stuck in a pile of invoices thicker than a truck stop diner menu. We're here to clear that paperwork highway, so your payments flow as smoothly as your deliveries."
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
              Your Simple Route to Streamlined Payments
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
              Stop the Payment Bottlenecks. Optimize Your Operations.
            </h2>
            <p className="text-xl text-white mb-8 font-inter">
              Don't let complex payments slow your logistics business down. Get a personalized quote and direct support from Alex – your dedicated concierge for efficient, reliable transactions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block bg-warm-flame hover:bg-twilight-violet text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Get My Logistics Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LogisticsPage;