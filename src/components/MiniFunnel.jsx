import React from 'react';
import PLGComponent from './PLGComponent';

const MiniFunnel = ({ id, fallback = null }) => {
  return (
    <section className="py-16 bg-warm-flame bg-opacity-10 rounded-xl backdrop-blur-sm my-12">
      <div className="container mx-auto px-6">
        <PLGComponent id={id} fallback={fallback} />
      </div>
    </section>
  );
};

export default MiniFunnel;