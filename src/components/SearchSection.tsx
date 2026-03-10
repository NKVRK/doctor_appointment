import React from 'react';
import { motion } from 'framer-motion';

interface SearchSectionProps {
  setSearchTerm: (term: string) => void;
  setSelectedSpecialty: (specialty: string) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ setSearchTerm, setSelectedSpecialty }) => {
  const specializations = [
    'All Specializations',
    'Cardiology',
    'Orthopedics',
    'Dermatology',
    'Neurology',
    'Pediatrics',
    'Oncology',
    'Endocrinology',
    'Gastroenterology',
    'Ophthalmology',
  ];

  return (
    <section className="sticky top-24 z-40 mx-auto w-full max-w-5xl px-4 mb-8 -mt-6">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="backdrop-blur-xl bg-white/70 dark:bg-obsidian/70 p-4 shadow-lg shadow-sky-900/5 border border-white/50 dark:border-gray-700/50 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-300 hover:shadow-xl"
      >
        <motion.div whileHover={{ scale: 1.01 }} className="relative w-full md:w-2/3">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search by doctor's name..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 border border-gray-200 dark:border-gray-700/50 rounded-xl bg-white/80 dark:bg-obsidian-light/80 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-200 shadow-inner"
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.01 }} className="relative w-full md:w-1/3">
          <select
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="w-full px-4 py-3.5 border border-gray-200 dark:border-gray-700/50 rounded-xl bg-white/80 dark:bg-obsidian-light/80 text-gray-900 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-200 shadow-inner"
          >
            {specializations.map((spec) => (
              <option key={spec} value={spec} className="bg-white dark:bg-obsidian text-gray-900 dark:text-white">
                {spec}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SearchSection;