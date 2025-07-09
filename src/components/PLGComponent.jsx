import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Mock PLG Component Implementation
const PLGComponent = ({ id, fallback = null }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [component, setComponent] = useState(null);

  useEffect(() => {
    // Simulate loading PLG component
    const loadComponent = async () => {
      setIsLoading(true);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock different components based on ID
      const mockComponent = getMockComponent(id);
      setComponent(mockComponent);
      setIsLoading(false);
      
      console.log(`🎨 Mock PLG Component loaded: ${id}`);
    };

    loadComponent();
  }, [id]);

  const getMockComponent = (componentId) => {
    // Return different mock components based on the ID
    switch (true) {
      case componentId?.includes('Hero_Quiz'):
        return <HeroQuizMock />;
      case componentId?.includes('CTA_QuoteRotator'):
        return <CTARotatorMock />;
      case componentId?.includes('Onboarding_'):
        return <OnboardingMock industry={componentId.split('_')[1]} />;
      case componentId?.includes('MiniFunnel_'):
        return <MiniFunnelMock type={componentId.split('_')[1]} />;
      default:
        return null;
    }
  };

  if (isLoading) {
    return <PLGPlaceholder />;
  }

  if (!component) {
    return fallback;
  }

  return component;
};

// Hero Quiz Mock Component
const HeroQuizMock = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      question: "What's your primary business challenge?",
      answers: [
        "High payment processing fees",
        "Account stability issues", 
        "Integration complexity",
        "Fraud & chargebacks"
      ]
    }
  ];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    console.log('🎯 Hero Quiz Answer:', answer);
    // Simulate moving to next step or showing result
    setTimeout(() => {
      setCurrentStep(1);
    }, 1000);
  };

  if (currentStep === 1) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <p className="text-xl md:text-2xl text-white mb-8 font-inter">
          Perfect! We specialize in solving <span className="font-bold text-soft-coral">{selectedAnswer?.toLowerCase()}</span> for businesses like yours.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm max-w-2xl mx-auto"
    >
      <h3 className="text-lg font-montserrat font-semibold text-white mb-4 text-center">
        {questions[currentStep].question}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {questions[currentStep].answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(answer)}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-3 rounded-lg font-inter transition-all duration-200 hover:scale-105"
          >
            {answer}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

// CTA Rotator Mock Component
const CTARotatorMock = () => {
  const [currentCTA, setCurrentCTA] = useState(0);
  
  const ctas = [
    { text: "Get My Free Quote", color: "bg-warm-flame hover:bg-twilight-violet" },
    { text: "Start Saving Today", color: "bg-soft-coral hover:bg-dusk-purple" },
    { text: "Unlock Better Rates", color: "bg-twilight-violet hover:bg-night-indigo" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCTA((prev) => (prev + 1) % ctas.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={currentCTA}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        className={`inline-block ${ctas[currentCTA].color} text-white px-12 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 shadow-lg`}
        onClick={() => console.log('🎯 CTA Clicked:', ctas[currentCTA].text)}
      >
        {ctas[currentCTA].text}
      </button>
    </motion.div>
  );
};

// Onboarding Mock Component
const OnboardingMock = ({ industry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-soft-coral to-warm-flame rounded-xl p-8 text-center"
    >
      <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
        Welcome, {industry} Professional!
      </h3>
      <p className="text-white font-inter mb-6">
        We understand the unique challenges in your industry. Let's find the perfect payment solution for your business.
      </p>
      <button 
        className="bg-white text-warm-flame px-6 py-3 rounded-lg font-montserrat font-semibold hover:bg-gray-100 transition-colors"
        onClick={() => console.log('🎯 Onboarding Started:', industry)}
      >
        Get Started
      </button>
    </motion.div>
  );
};

// Mini Funnel Mock Component
const MiniFunnelMock = ({ type }) => {
  const [step, setStep] = useState(1);
  
  const steps = [
    { title: "What's your monthly volume?", options: ["$0-$10k", "$10k-$50k", "$50k-$200k", "$200k+"] },
    { title: "Current payment processor?", options: ["Square", "Stripe", "PayPal", "Other"] },
    { title: "Biggest pain point?", options: ["High fees", "Account holds", "Poor support", "Integration issues"] }
  ];

  const handleNext = (answer) => {
    console.log(`🎯 Mini Funnel Step ${step}:`, answer);
    if (step < steps.length) {
      setStep(step + 1);
    } else {
      // Complete funnel
      console.log('✅ Mini Funnel Completed');
    }
  };

  if (step > steps.length) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h3 className="text-2xl font-montserrat font-bold text-gray-800 mb-4">
          Perfect! We'll prepare a custom quote for you.
        </h3>
        <p className="text-gray-600 font-inter mb-6">
          Expect to save 15-30% on your current processing costs.
        </p>
        <button className="bg-warm-flame hover:bg-twilight-violet text-white px-8 py-3 rounded-lg font-montserrat font-bold transition-all duration-300">
          Get My Quote
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-8 shadow-lg max-w-md mx-auto"
    >
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Step {step} of {steps.length}</span>
          <span>{Math.round((step / steps.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-warm-flame h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-6 text-center">
        {steps[step - 1].title}
      </h3>
      
      <div className="space-y-3">
        {steps[step - 1].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleNext(option)}
            className="w-full bg-gray-50 hover:bg-soft-coral hover:text-white text-gray-700 px-4 py-3 rounded-lg font-inter transition-all duration-200 text-left"
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

// Placeholder with Apple-inspired subtle loading animation
const PLGPlaceholder = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.7 }}
    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
    className="w-full h-16 rounded-xl bg-gray-200 bg-opacity-20"
  />
);

export default PLGComponent;