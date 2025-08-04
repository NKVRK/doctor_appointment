import React from 'react';

interface SearchSectionProps {
  setSearchTerm: (term: string) => void;
  setSelectedSpecialty: (specialty: string) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ setSearchTerm,setSelectedSpecialty }) => {
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
    <section  className="sticky backdrop-blur-lg top-20 z-40 shadow-md bg-white dark:bg-transparent m-3 p-3 shadow-md border border-gray-700 rounded-2xl w-[90vw]">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Search by doctor's name..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border border-gray-700 dark:border-gray-600 rounded-xl dark:bg-transparent bg-gray-100 dark:text-white text-black w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-white-600"
        />
        <select onChange={(e) => setSelectedSpecialty(e.target.value)} className="p-3 border border-gray-700 dark:border-gray-600 rounded-xl dark:bg-transparent bg-gray-100 dark:text-white text-black w-full md:w-1/4">
          {specializations.map((spec) => (
            <option key={spec} className="bg-gray-700 dark:bg-gray-800 text-white">{spec}</option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default SearchSection;