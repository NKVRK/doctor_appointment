import React from 'react';
import { motion, Variants } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SearchSection from '../components/SearchSection';
import DoctorsList from '../components/DoctorsList';
import { useDoctorContext } from '../context/DoctorContext';

interface LandingPageProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedSpecialty: string;
  setSelectedSpecialty: (specialty: string) => void;
}

const pageVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeOut" } }
};

const LandingPage: React.FC<LandingPageProps> = ({ searchTerm, setSearchTerm, selectedSpecialty, setSelectedSpecialty }) => {
  const { doctors } = useDoctorContext();
  return (
    <motion.div 
      variants={pageVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="px-4 py-6 flex flex-col items-center min-w-screen"
    >
      <HeroSection />
      <SearchSection setSearchTerm={setSearchTerm} setSelectedSpecialty={setSelectedSpecialty} />
      <DoctorsList searchTerm={searchTerm} selectedSpecialty={selectedSpecialty} doctors={doctors} />
    </motion.div>
  );
};

export default LandingPage;