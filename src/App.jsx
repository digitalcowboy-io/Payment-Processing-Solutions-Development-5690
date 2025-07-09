import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import EcommercePage from './pages/industries/EcommercePage';
import TravelEventPage from './pages/industries/TravelEventPage';
import AdultServicesPage from './pages/industries/AdultServicesPage';
import NutraceuticalsPage from './pages/industries/NutraceuticalsPage';
import CBDPage from './pages/industries/CBDPage';
import SaaSTrialsPage from './pages/industries/SaaSTrialsPage';
import GamingPage from './pages/industries/GamingPage';
import LogisticsPage from './pages/industries/LogisticsPage';
import RealEstatePage from './pages/industries/RealEstatePage';
import FinancialServicesPage from './pages/industries/FinancialServicesPage';
import TelecomPage from './pages/industries/TelecomPage';
import EducationPage from './pages/industries/EducationPage';
import './App.css';
import { plg } from './utils/plgos';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

function App() {
  useEffect(() => {
    // Track pageview on initial load
    plg.trackPageView();
  }, []);

  return (
    <Router>
      <Helmet>
        <title>Sunset Swipe - Payment Solutions for High-Risk Businesses</title>
        <meta name="description" content="Secure, reliable payment processing solutions for high-risk businesses. Direct support from Alex, your dedicated payment concierge." />
        <meta property="og:title" content="Sunset Swipe - Payment Solutions" />
        <meta property="og:description" content="Secure, reliable payment processing solutions for high-risk businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sunsetswipe.com" />
        <meta property="og:image" content="https://sunsetswipe.com/og-image.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <motion.div 
                initial="initial" 
                animate="animate" 
                exit="exit" 
                variants={pageVariants} 
                transition={pageTransition}
              >
                <Homepage />
              </motion.div>
            } />
            <Route path="/industries/ecommerce" element={
              <motion.div 
                initial="initial" 
                animate="animate" 
                exit="exit" 
                variants={pageVariants} 
                transition={pageTransition}
              >
                <EcommercePage />
              </motion.div>
            } />
            <Route path="/industries/travel-event" element={
              <motion.div 
                initial="initial" 
                animate="animate" 
                exit="exit" 
                variants={pageVariants} 
                transition={pageTransition}
              >
                <TravelEventPage />
              </motion.div>
            } />
            <Route path="/industries/adult-services" element={
              <motion.div 
                initial="initial" 
                animate="animate" 
                exit="exit" 
                variants={pageVariants} 
                transition={pageTransition}
              >
                <AdultServicesPage />
              </motion.div>
            } />
            <Route path="/industries/nutraceuticals" element={
              <motion.div 
                initial="initial" 
                animate="animate" 
                exit="exit" 
                variants={pageVariants} 
                transition={pageTransition}
              >
                <NutraceuticalsPage />
              </motion.div>
            } />
            <Route path="/industries/cbd" element={
              <motion.div 
                initial="initial" 
                animate="animate" 
                exit="exit" 
                variants={pageVariants} 
                transition={pageTransition}
              >
                <CBDPage />
              </motion.div>
            } />
            <Route path="/industries/saas-trials" element={
              <motion.div 
                initial="initial" 
                animate="animate" 
                exit="exit" 
                variants={pageVariants} 
                transition={pageTransition}
              >
                <SaaSTrialsPage />
              </motion.div>
            } />
            <Route path="/industries/gaming" element={
              <motion.div 
                initial="initial" 
                animate="animate" 
                exit="exit" 
                variants={pageVariants} 
                transition={pageTransition}
              >
                <GamingPage />
              </motion.div>
            } />
            <Route path="/industries/logistics" element={
              <motion.div 
                initial="initial" 
                animate="animate" 
                exit="exit" 
                variants={pageVariants} 
                transition={pageTransition}
              >
                <LogisticsPage />
              </motion.div>
            } />
            <Route path="/industries/real-estate" element={
              <motion.div 
                initial="initial" 
                animate="animate" 
                exit="exit" 
                variants={pageVariants} 
                transition={pageTransition}
              >
                <RealEstatePage />
              </motion.div>
            } />
            <Route path="/industries/financial-services" element={
              <motion.div 
                initial="initial" 
                animate="animate" 
                exit="exit" 
                variants={pageVariants} 
                transition={pageTransition}
              >
                <FinancialServicesPage />
              </motion.div>
            } />
            <Route path="/industries/telecom" element={
              <motion.div 
                initial="initial" 
                animate="animate" 
                exit="exit" 
                variants={pageVariants} 
                transition={pageTransition}
              >
                <TelecomPage />
              </motion.div>
            } />
            <Route path="/industries/education" element={
              <motion.div 
                initial="initial" 
                animate="animate" 
                exit="exit" 
                variants={pageVariants} 
                transition={pageTransition}
              >
                <EducationPage />
              </motion.div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;