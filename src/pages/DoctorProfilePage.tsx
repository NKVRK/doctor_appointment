import React from 'react';
import { useParams} from 'react-router-dom';
import { Doctor } from '../components/DoctorCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom'; 
import DoctorProfileCard from '../components/DoctorProfileCard';
import { useDoctorContext } from '../context/DoctorContext';


const DoctorProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const doctorId = parseInt(id || '0', 10);
  const { doctors } = useDoctorContext();
  const doctor = doctors.find(d => d.id === doctorId);

  if (!doctor) {
    return <div className="text-center text-white text-lg p-6">Doctor not found.</div>;
  }

  return (
    <div className="min-h-[95vh] bg-gray-100 dark:bg-[#1e2a47] p-6 min-w-screen">
       {/* Back to Doctors Button */}
       <Link
            to="/"
            className="flex items-center text-gray-500 dark:text-gray-500 mb-4 hover:text-black dark:hover:text-white w-max rounded-lg p-2 transition-colors duration-200"
            >
            <ArrowLeft className="mr-2" />
            Back to Doctors
      </Link>
      <DoctorProfileCard doctor={doctor}/>
    </div>
  );
};

export default DoctorProfilePage;
