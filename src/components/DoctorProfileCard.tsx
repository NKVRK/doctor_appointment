import React from 'react';
import { Doctor } from '../components/DoctorCard';
import { Stethoscope, Clock } from 'lucide-react';
import { Link } from 'react-router-dom'; 


const DoctorProfileCard: React.FC<{doctor:Doctor}> = ({ doctor }) => {

  const availableTimeSlots = [
    '09:30 AM', '10:30 AM', '01:30 PM', '02:30 PM',
  ];

  return (
      <div className="w-full mx-auto bg-white dark:bg-transparent border dark:border-gray-700 p-6 rounded-lg shadow-lg flex flex-col w-full gap-6">
        {/* Doctor Info Section */}
        <div className="flex flex-col sm:flex-row md:flex-row items-center justify-start gap-6">
          {/* Left Side: Profile Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src={doctor.imageUrl}
              alt={`${doctor.name}`}
              className="w-40 h-40 rounded-full object-cover shadow-md bg-gray-100 dark:bg-gray-700"
            />
          </div>

          {/* Doctor's Info (Right Side) */}
          <div className="text-center sm:text-left w-[100%] sm:w-[60%] flex flex-col ">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{doctor.name}</h2>
            <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
              <Stethoscope className="h-5 w-5 text-sky-500" />
              <p className="text-lg text-blue-400 italic">{doctor.specialty}</p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 ">{doctor.description}</p>
          </div>
        </div>

        {/* Availability and Time Slots Section */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-2 w-full mt-6">
          {/* Availability Section */}
          <div className="flex-1 p-4">
            <div className="mb-4">
              <span className={`px-3 py-1 rounded-full text-sm sm:text-xs font-medium sm:font-small ${
                doctor.available
                ? 'bg-green-200 text-green-800'
                : 'bg-red-200 text-red-800'
              }`}>
                {doctor.available ? 'Available for booking' : 'Not Available'}
              </span>
            </div>

            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Available Time Slots:</h4>
            <div className="flex gap-3 flex-wrap">
              {availableTimeSlots.map((slot, index) => (
                <span
                  key={index}
                  className="w-max p-2 rounded-md text-sm bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4 text-gray-600 dark:text-gray-200" />
                  {slot}
                </span>
              ))}
            </div>
          </div>

          {/* Appointment Booking Section */}
            <div className="flex-1 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg flex flex-col items-center justify-center gap-1">
                <p className="text-2xl font-semibold text-black dark:text-gray-300 mb-2">Ready to book an appointment?</p>
                <p className="text-md text-gray-700 dark:text-gray-400 mb-6">
                    Schedule your appointment with {doctor.name} today.
                </p>
                <Link
                    to={doctor.available ? `/book-appointment/${doctor.id}` : '#'} 
                    type="button"
                    className={`w-full px-6 py-3 text-white text-center font-semibold bg-sky-500/75 rounded-lg hover:bg-sky-500/100  transition duration-200 ${doctor.available ? '': 'cursor-not-allowed'}`}
                >
                    Book Appointment
                </Link>
            </div>
        </div>
      </div>
   );
};

export default DoctorProfileCard;
