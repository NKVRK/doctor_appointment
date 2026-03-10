import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto text-center py-24 px-6 mt-8 mb-12 bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl animate-fade-in shadow-sm border border-sky-100 dark:border-gray-800 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-72 h-72 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Perfect Doctor</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Easily search and book appointments with top specialists in your area. Your health is our priority.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;