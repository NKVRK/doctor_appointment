import React from 'react';
import { Link } from 'react-router-dom';

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  description: string;
  available: boolean;
  imageUrl: string;
}

const DoctorCard: React.FC<Doctor> = ({id, name, specialty, description, available, imageUrl }) => {
  return (
    <div className="flex flex-col items-center bg-gray-800 bg-transparent rounded-xl shadow-lg mb-4 w-full hover:scale-105 transform transition duration-200 ease-in-out ">
      <div className="relative w-full h-48">
        <img
          src={imageUrl}
          alt={`${name}`}
          className="w-full h-full object-cover object-top rounded-xl"
        />
        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-sm italic text-white">{specialty}</p>
        </div>
      </div>

      <div className="w-full p-4 rounded-lg dark:bg-transparent bg-white">
        <p className="text-sm text-gray-700 dark:text-white mb-2 line-clamp-2">{description}</p>
        <div className="mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                available
                ? 'bg-green-200 text-green-800'
                : 'bg-red-200 text-red-800'
              }`}>
                {available ? 'Available for booking' : 'Not Available'}
              </span>
        </div>
        <Link
          to={`/doctor/${id}`}
          className="w-full px-4 py-2 bg-sky-500/75 text-white text-sm rounded-lg hover:bg-sky-500/100 transition duration-200 text-center block"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
