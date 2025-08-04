import React, { useState, useEffect } from 'react';
import DoctorCard, { Doctor } from './DoctorCard';

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
    <section className="p-6 bg-gray-800 bg-transparent">
      {filteredDoctors.length === 0 ? (
          <div className='flex items-center justify-center min-h-[50vh] w-full'>
            <p className="text-center dark:text-white text-black text-lg">No doctors found.</p>
          </div >
        ) :
        (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">  
          {filteredDoctors.map((doctor, index) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>  
        )}
    </section>
  );
};

export default DoctorsList;
