import React from 'react';
import { Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, setIsDarkMode }) => {
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/70 dark:bg-obsidian/70 backdrop-blur-xl shadow-sm border-b border-gray-200/50 dark:border-gray-800/50 transition-colors duration-300 w-full"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-sky-500/10 rounded-xl shadow-inner border border-sky-500/20">
          <Stethoscope className="h-7 w-7 text-sky-500" />
        </div>
        <span className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">Medi<span className="text-sky-500">Book</span></span>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        className="p-2.5 bg-gray-100 dark:bg-obsidian-light rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 border border-transparent dark:border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-sky-500/50 shadow-sm"
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? (
          <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </motion.button>
    </motion.header>
  );
};

export default Header;