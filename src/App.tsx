import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import DoctorProfilePage from './pages/DoctorProfilePage';
import BookingStatus from './pages/BookingStatus';
import { Doctor } from './components/DoctorCard';
import { DoctorProvider } from './context/DoctorContext';
import BookingFormPage from './pages/BookAppointment';

import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';

interface AppProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const App: React.FC<AppProps> = ({ isDarkMode, setIsDarkMode }) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specializations');

  return (
    <DoctorProvider>
      <div className={`min-h-screen min-w-screen p-0 m-0 font-sans transition-colors duration-300 ${isDarkMode ? 'dark bg-obsidian text-white' : 'bg-gray-50 text-gray-900'}`}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Toaster position="top-center" richColors theme={isDarkMode ? 'dark' : 'light'} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <LandingPage
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  selectedSpecialty={selectedSpecialty}
                  setSelectedSpecialty={setSelectedSpecialty}
                />}/>
            <Route
              path="/doctor/:id"
              element={<DoctorProfilePage/>}
            />  
            <Route
              path="/book-appointment/:id"
              element={<BookingFormPage/>}
            /> 
            <Route
              path="/booking-status"
              element={<BookingStatus/>}
            />    
          </Routes>
        </AnimatePresence>
      </div>
    </DoctorProvider>
  );
};

export default App;