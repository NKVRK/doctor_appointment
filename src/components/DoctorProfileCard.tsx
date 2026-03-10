import React from 'react';
import { Doctor } from '../components/DoctorCard';
import { Stethoscope, Clock } from 'lucide-react';
import { Link } from 'react-router-dom'; 


const DoctorProfileCard: React.FC<{doctor:Doctor}> = ({ doctor }) => {

  const availableTimeSlots = [
    '09:30 AM', '10:30 AM', '01:30 PM', '02:30 PM',
  ];

  return (
      <div className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 p-8 rounded-3xl shadow-lg shadow-gray-200/50 dark:shadow-none flex flex-col gap-8 backdrop-blur-sm">
        {/* Doctor Info Section */}
        <div className="flex flex-col md:flex-row items-center justify-start gap-8">
          {/* Left Side: Profile Image */}
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 to-indigo-500 rounded-full blur mb-4 md:mb-0 opacity-20"></div>
            <img
              src={doctor.imageUrl}
              alt={`${doctor.name}`}
              className="relative w-48 h-48 rounded-full object-cover shadow-md ring-4 ring-white dark:ring-gray-800"
            />
          </div>

          {/* Doctor's Info (Right Side) */}
          <div className="text-center md:text-left flex-grow">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2 justify-center md:justify-start">
              <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">{doctor.name}</h2>
              <span className={`px-3 py-1 text-xs font-bold rounded-full w-max mx-auto md:mx-0 ${
                doctor.available
                ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400'
                : 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400'
              }`}>
                {doctor.available ? 'Available Today' : 'Fully Booked'}
              </span>
            </div>
            <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
              <div className="p-1.5 bg-sky-100 dark:bg-sky-500/10 rounded-lg">
                <Stethoscope className="h-5 w-5 text-sky-500" />
              </div>
              <p className="text-xl text-sky-600 dark:text-sky-400 font-medium">{doctor.specialty}</p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg max-w-2xl">{doctor.description}</p>
          </div>
        </div>

        <div className="h-px w-full bg-gray-100 dark:bg-gray-700"></div>

        {/* Availability and Time Slots Section */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Availability Section */}
          <div className="flex-1 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700/50">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-sky-500" />
              Select a Time Slot
            </h4>
            <div className="flex gap-3 flex-wrap">
              {availableTimeSlots.map((slot, index) => (
                <button
                  key={index}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 flex items-center justify-center gap-2 hover:border-sky-500 hover:text-sky-600 dark:hover:border-sky-500 dark:hover:text-sky-400 transition-all duration-200 shadow-sm"
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Appointment Booking Section */}
            <div className={`flex-1 p-8 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden ${doctor.available ? 'bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-sky-900/20 dark:to-indigo-900/20 border border-sky-100 dark:border-sky-500/20' : 'bg-gray-100 dark:bg-gray-800'}`}>
                {doctor.available && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200/50 dark:bg-sky-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Ready to book?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-sm">
                    Schedule your appointment with {doctor.name} and get back to being your best self.
                </p>
                <Link
                    to={doctor.available ? `/book-appointment/${doctor.id}` : '#'} 
                    className={`w-full max-w-xs px-6 py-3.5 text-white text-center font-bold rounded-xl transition-all duration-300 shadow-md ${
                      doctor.available 
                        ? 'bg-sky-500 hover:bg-sky-600 hover:shadow-lg hover:-translate-y-0.5' 
                        : 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed opacity-70'
                    }`}
                >
                    {doctor.available ? 'Book Appointment' : 'Not Available'}
                </Link>
            </div>
        </div>
      </div>
   );
};

export default DoctorProfileCard;
