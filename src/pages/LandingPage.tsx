import React from 'react';
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

const LandingPage: React.FC<LandingPageProps> = ({ searchTerm, setSearchTerm, selectedSpecialty, setSelectedSpecialty }) => {
  const { doctors } = useDoctorContext();
  return (
    <div className="px-4 py-6 bg-gray-100 dark:bg-[#1e2a47] flex flex-col items-center min-w-screen">
      <HeroSection />
      <SearchSection setSearchTerm={setSearchTerm} setSelectedSpecialty={setSelectedSpecialty} />
      <DoctorsList searchTerm={searchTerm} selectedSpecialty={selectedSpecialty} doctors={doctors} />
    </div>
  );
};

export default LandingPage;