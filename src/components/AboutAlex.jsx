import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutAlex = () => {
  return (
    <section aria-label="About Alex" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-gotham font-bold text-gray-800 mb-4">
              Meet Alex
            </h2>
            <div className="w-24 h-1 bg-soft-coral mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Alex's Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-soft-coral shadow-2xl">
                  <img 
                    src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752025811629-alex%20samll.jpg" 
                    alt="Alex Stuart Cumming, Founder of Sunset Swipe" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/320x320/F3E79B/5C53A5?text=Alex+Stuart+Cumming';
                    }}
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-warm-flame rounded-full opacity-80"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-sunset-peach rounded-full opacity-60"></div>
              </div>
            </motion.div>

            {/* Alex's Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-r from-golden-sky to-soft-coral p-8 rounded-2xl shadow-lg">
                <blockquote className="text-2xl md:text-3xl font-gotham font-bold text-night-indigo mb-4">
                  "I answer my phone—no bots here!"
                </blockquote>
                <p className="text-lg text-gray-700 mb-6 font-inter">
                  With over 15 years in payment processing, I specialize in finding solutions for businesses that other processors reject. I'm your direct contact—no account managers, no runaround, just straightforward service.
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <p className="text-night-indigo font-montserrat font-bold text-lg">Alex Stuart Cumming</p>
                    <p className="text-gray-600 font-inter">Founder, Sunset Swipe</p>
                  </div>
                  <Link
                    to="/"
                    className="bg-warm-flame hover:bg-twilight-violet text-white px-6 py-3 rounded-lg font-montserrat font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-night-indigo shadow-lg"
                  >
                    Schedule a Call →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-warm-flame">
              <p className="text-gray-700 italic mb-4 font-inter">
                "Working with Alex has been game-changing for our high-risk business. Finally, a payment processor who gets it."
              </p>
              <p className="text-warm-flame font-montserrat font-semibold">— Ort Kelley, CEO of TravelEase</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-sunset-peach">
              <p className="text-gray-700 italic mb-4 font-inter">
                "Alex doesn't just process payments—he understands our industry challenges and provides real solutions."
              </p>
              <p className="text-sunset-peach font-montserrat font-semibold">— Sarah Mitchell, E-commerce Director</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutAlex;