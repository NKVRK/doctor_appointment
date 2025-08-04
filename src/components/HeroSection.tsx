import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="text-center py-12 bg-transparent animate-fade-in">
      <h1 className="text-4xl font-bold text-[#1e2a47] dark:text-white mb-2">Find Your Doctor</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">Easily search and book appointments with top specialists in your area.</p>
    </section>
  );
};

export default HeroSection;