import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
      className="w-full max-w-7xl mx-auto px-4 py-12 relative z-10 flex justify-center"
    >
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800/80 p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700 backdrop-blur-sm relative overflow-hidden text-center">
        {/* Decorative Success Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6 shadow-sm ring-8 ring-green-50 dark:ring-green-500/10">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>

        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Appointment Confirmed!
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Thank you, <span className="font-semibold text-gray-900 dark:text-white">{patientName}</span>. Your appointment has been successfully scheduled.
        </p>

        <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl mb-8 border border-gray-100 dark:border-gray-700/50 max-w-md mx-auto text-left shadow-inner">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
            <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
            Appointment Details
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700/50">
              <span className="text-gray-500 dark:text-gray-400 font-medium">Doctor</span>
              <span className="text-gray-900 dark:text-white font-semibold text-right">{doctor.name}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700/50">
              <span className="text-gray-500 dark:text-gray-400 font-medium">Date</span>
              <span className="text-gray-900 dark:text-white font-semibold">{new Date(date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400 font-medium">Time</span>
              <span className="text-gray-900 dark:text-white font-semibold">{time}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm mx-auto text-sm">
          A confirmation email with your appointment details and instructions has been sent to <span className="text-gray-700 dark:text-gray-300 font-medium">{email}</span>.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center bg-sky-500 hover:bg-sky-600 w-full sm:w-auto py-4 px-10 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          Return to Homepage
        </Link>
      </div>
    </motion.div>
  );
};

export default BookingStatus;
