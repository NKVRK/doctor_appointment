import React from 'react';
import { useLocation, Link } from 'react-router-dom';

interface LocationState {
  patientName: string;
  email: string;
  date: string;
  time: string;
  doctor: { name: string };
}

const BookingStatus: React.FC = () => {
  const location = useLocation();
  const { patientName, email, date, time, doctor }: LocationState = location.state || {};

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#1e2a47] p-4 md:p-6 ">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg border dark:border-gray-700">
        <h2 className="text-3xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Appointment Confirmed!
        </h2>
        <div className="text-center text-lg mb-6 dark:text-white">
          Thank you, {patientName}, your appointment has been successfully scheduled.
        </div>
        <div className="bg-gray-100 dark:bg-[#1e2a47] p-6 rounded-lg mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">Appointment Details</h3>
          <div className="mt-4 dark:text-white">
            <div>
              <strong className='text-black dark:text-gray-600 font-medium'>Doctor:</strong> {doctor.name}
            </div>
            <div>
              <strong className='text-black dark:text-gray-600 font-medium'>Patient:</strong> {patientName}
            </div>
            <div>
              <strong className='text-black dark:text-gray-600 font-medium'>Date:</strong> {new Date(date).toLocaleDateString()}
            </div>
            <div>
              <strong className='text-black dark:text-gray-600 font-medium'>Time:</strong> {time}
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="mb-6 dark:text-white">A confirmation email with your appointment details has been sent to your registered email address.</p>
          <Link
            to="/"
            className="bg-sky-500/75 hover:bg-sky-500/100 w-full py-4 px-6 text-white font-semibold rounded-xl  transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingStatus;
