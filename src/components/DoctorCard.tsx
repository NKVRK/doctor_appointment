import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  description: string;
  available: boolean;
  imageUrl: string;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const DoctorCard: React.FC<Doctor> = ({id, name, specialty, description, available, imageUrl }) => {
  return (
    <motion.div variants={itemVariants} className="group flex flex-col bg-white dark:bg-gray-800/80 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden backdrop-blur-sm h-full">
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={imageUrl}
          alt={`${name}`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent flex flex-col justify-end p-5">
          <h3 className="text-xl font-bold text-white tracking-wide">{name}</h3>
          <p className="text-sky-400 font-medium text-sm mt-1">{specialty}</p>
        </div>
        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-1 rounded-md text-xs font-bold shadow-sm backdrop-blur-md ${
            available
            ? 'bg-green-500/90 text-white'
            : 'bg-red-500/90 text-white'
          }`}>
            {available ? 'Available' : 'Booked'}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 flex-grow leading-relaxed">{description}</p>
        <Link
          to={`/doctor/${id}`}
          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 text-sky-600 dark:text-sky-400 font-semibold text-sm rounded-xl hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 dark:hover:text-white transition-colors duration-300 text-center block border border-sky-100 dark:border-transparent"
        >
          View Full Profile
        </Link>
      </div>
    </motion.div>
  );
};

export default DoctorCard;
