import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import DoctorProfilePage from './pages/DoctorProfilePage';
import BookingAppointmentPage from './pages/BookAppointment';
import BookingStatus from './pages/BookingStatus';
import { Doctor } from './components/DoctorCard';
import { DoctorProvider } from './context/DoctorContext';

interface AppProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const App: React.FC<AppProps> = ({ isDarkMode, setIsDarkMode }) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specializations');

  return (
    <DoctorProvider>
      <div className="min-h-screen min-w-screen p-0 m-0" data-theme={isDarkMode ? 'dark' : 'light'}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
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
            element={<BookingAppointmentPage/>}
          /> 
          <Route
            path="/booking-status"
            element={<BookingStatus/>}
          />    
        </Routes>
      </div>
    </DoctorProvider>
  );
};

export default App;