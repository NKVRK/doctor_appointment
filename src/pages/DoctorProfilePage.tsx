import React from 'react';
import { useParams} from 'react-router-dom';
import { Doctor } from '../components/DoctorCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom'; 
import DoctorProfileCard from '../components/DoctorProfileCard';
import { useDoctorContext } from '../context/DoctorContext';
import { motion } from 'framer-motion';


const DoctorProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const doctorId = parseInt(id || '0', 10);
  const { doctors } = useDoctorContext();
  const doctor = doctors.find(d => d.id === doctorId);

  if (!doctor) {
    return <div className="text-center text-white text-lg p-6">Doctor not found.</div>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-7xl mx-auto px-4 py-8 relative z-10"
    >
       {/* Back to Doctors Button */}
       <Link
            to="/"
            className="flex items-center text-gray-500 dark:text-gray-500 mb-4 hover:text-black dark:hover:text-white w-max rounded-lg p-2 transition-colors duration-200"
            >
            <ArrowLeft className="mr-2" />
            Back to Doctors
      </Link>
      <DoctorProfileCard doctor={doctor}/>
    </motion.div>
  );
};

export default DoctorProfilePage;
