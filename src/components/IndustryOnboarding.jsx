import React from 'react';
import PLGComponent from './PLGComponent';

const IndustryOnboarding = ({ industry }) => {
  if (!industry) return null;
  
  // Normalize industry name for PLG component id
  const normalizedIndustry = industry
    .replace(/[^a-zA-Z0-9]/g, '_')
    .replace(/_+/g, '_');

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <PLGComponent 
          id={`Onboarding_${normalizedIndustry}`} 
          fallback={null} // Don't show anything if PLG component fails to load
        />
      </div>
    </section>
  );
};

export default IndustryOnboarding;