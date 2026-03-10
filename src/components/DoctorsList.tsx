import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import DoctorCard, { Doctor } from './DoctorCard';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const DoctorsList: React.FC<{ searchTerm: string; selectedSpecialty: string; doctors: Doctor[] }> = ({ searchTerm, selectedSpecialty, doctors }) => {
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    let filtered = [...doctors];
    if (selectedSpecialty !== 'All Specializations') {
      filtered = filtered.filter(doctor => doctor.specialty === selectedSpecialty);
    }
    if (searchTerm.trim()) {
      filtered = filtered.filter(doctor =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
      );
    }
    setFilteredDoctors(filtered);
  }, [searchTerm, selectedSpecialty, doctors]);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8 relative z-10">
      {filteredDoctors.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className='flex flex-col items-center justify-center min-h-[40vh] w-full bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-8'
          >
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <p className="text-center dark:text-gray-300 text-gray-600 text-xl font-medium">No doctors found matching your criteria.</p>
            <p className="text-gray-500 mt-2 text-sm">Try adjusting your search filters.</p>
          </motion.div >
        ) :
        (
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >  
          {filteredDoctors.map((doctor, index) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </motion.div>  
        )}
    </section>
  );
};

export default DoctorsList;
