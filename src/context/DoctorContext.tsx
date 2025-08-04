import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  description: string;
  available: boolean;
  imageUrl: string;
}

interface DoctorContextType {
  doctors: Doctor[];
  setDoctors: React.Dispatch<React.SetStateAction<Doctor[]>>;
}

const DoctorContext = createContext<DoctorContextType | undefined>(undefined);

export const DoctorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [doctors, setDoctors] = useState<Doctor[]>([
    { id: 1, name: 'Dr. Evelyn Reed', specialty: 'Cardiology', description: 'Board-certified cardiologist with over 15 years...\nExpert in advanced diagnostic techniques.', available: true, imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80' },
    { id: 2, name: 'Dr. Marcus Thorne', specialty: 'Orthopedics', description: 'Specializes in sports medicine and joint care...\nFocuses on rehabilitation programs.', available: true, imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80' },
    { id: 3, name: 'Dr. Anya Sharma', specialty: 'Dermatology', description: 'Offers comprehensive dermatological care...\nExpert in cosmetic procedures.', available: false, imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80' },
    { id: 4, name: 'Dr. Leo Vince', specialty: 'Neurology', description: 'Leading expert in neurological disorders...\nConducts research on neurodegenerative diseases.', available: true, imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80' },
    { id: 5, name: 'Dr. Sofia Ramirez', specialty: 'Pediatrics', description: 'Beloved pediatrician known for her warm care...\nSpecializes in pediatric allergies.', available: true, imageUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80' },
    { id: 6, name: 'Dr. Kenji Tanaka', specialty: 'Cardiology', description: 'Cardiologist focusing on heart rhythm disorders...\nExpert in pacemaker implantation.', available: true, imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80' },
    { id: 7, name: 'Dr. Evelyn Reed', specialty: 'Cardiology', description: 'Board-certified cardiologist with over 15 years...\nExpert in advanced diagnostic techniques.', available: true, imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80' },
    { id: 8, name: 'Dr. Marcus Thorne', specialty: 'Orthopedics', description: 'Specializes in sports medicine and joint care...\nFocuses on rehabilitation programs.', available: true, imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80' },
    { id: 9, name: 'Dr. Anya Sharma', specialty: 'Dermatology', description: 'Offers comprehensive dermatological care...\nExpert in cosmetic procedures.', available: false, imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80' },
    { id: 10, name: 'Dr. Leo Vince', specialty: 'Neurology', description: 'Leading expert in neurological disorders...\nConducts research on neurodegenerative diseases.', available: true, imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80' },
    { id: 11, name: 'Dr. Sofia Ramirez', specialty: 'Pediatrics', description: 'Beloved pediatrician known for her warm care...\nSpecializes in pediatric allergies.', available: true, imageUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80' },
    { id: 12, name: 'Dr. Kenji Tanaka', specialty: 'Cardiology', description: 'Cardiologist focusing on heart rhythm disorders...\nExpert in pacemaker implantation.', available: true, imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80' },
  ]);

  const value = { doctors, setDoctors };

  return <DoctorContext.Provider value={value}>{children}</DoctorContext.Provider>;
};

export const useDoctorContext = () => {
  const context = useContext(DoctorContext);
  if (context === undefined) {
    throw new Error('useDoctorContext must be used within a DoctorProvider');
  }
  return context;
};