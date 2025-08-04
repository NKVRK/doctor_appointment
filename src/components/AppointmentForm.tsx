import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDoctorContext } from '../context/DoctorContext';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  description: string;
  available: boolean;
  imageUrl: string;
}

interface AppointmentFormProps {
  doctorId: number;
  onSubmit: (formData: { patientName: string; email: string; date: Date; time: string; doctor: Doctor }) => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ doctorId, onSubmit }) => {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    date: new Date(),
    time: '',
  });
  const [errors, setErrors] = useState({
    patientName: '',
    email: '',
    date: '',
    time: '',
  });

  const {doctors} = useDoctorContext();

  useEffect(() => {
    const foundDoctor = doctors.find(d => d.id === doctorId);
    if (foundDoctor) {
      setDoctor(foundDoctor);
    } else {
      setDoctor(null);
    }
  }, [doctorId, doctors]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { patientName: '', email: '', date: '', time: '' };

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient name is required';
      isValid = false;
    } else if (formData.patientName.length > 50) {
      newErrors.patientName = 'Name must be 50 characters or less';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
      isValid = false;
    } else if (new Date(formData.date) < new Date()) {
      newErrors.date = 'Date cannot be in the past';
      isValid = false;
    }

    if (!formData.time) {
      newErrors.time = 'Time is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm() && doctor) {
      onSubmit({ ...formData, doctor });
    }
  };

  if (!doctor) {
    return <div className="text-center text-lg p-6">Doctor not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#1e2a47] p-4 md:p-6">
      <Link
        to={`/doctor/:${doctorId}`}
        className="flex items-center text-gray-500 dark:text-gray-500 mb-4 hover:text-black dark:hover:text-white w-max rounded-lg p-2 transition-colors duration-200"
      >
        <ArrowLeft className="mr-2" />
        Back to Profile
      </Link>
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Book Appointment with {doctor.name}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">Full Name</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className="mt-2 p-4 w-full border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors.patientName && <p className="text-sm text-red-500 mt-1">{errors.patientName}</p>}
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-4 w-full border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">Reason for Visit (Optional)</label>
            <textarea
              name="reason"
              value={formData.patientName}
              onChange={handleChange}
              placeholder="Describe your health concerns for an AI-powered appointment length suggestion."
              className="mt-2 p-4 w-full border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {/* Appointment Date */}
            <div className="w-full md:w-1/2">
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Appointment Date</label>
              <div className="relative w-full flex items-center w-max border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <DatePicker
                  selected={formData.date}
                  onChange={(date: Date | null) => setFormData(prev => ({ ...prev, date: date || new Date() }))} 
                  dateFormat="MMMM d, yyyy"
                  className="p-4 w-[100%] border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholderText="Select a date"
                />
                <Calendar className="absolute right-1 ml-2 text-gray-500 dark:text-gray-400" />
              </div>
              {errors.date && <p className="text-sm text-red-500 mt-1">{errors.date}</p>}
            </div>

            {/* Appointment Time */}
            <div className="w-full md:w-1/2">
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">Appointment Time</label>
              <div className="flex flex-col gap-2">
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full mt-2 p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">Select an available time</option>
                  <option value="09:30 AM">09:30 AM</option>
                  <option value="10:30 AM">10:30 AM</option>
                  <option value="01:00 PM">01:00 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                </select>
              </div>
              {errors.time && <p className="text-sm text-red-500 mt-1">{errors.time}</p>}
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors disabled:bg-gray-500"
            disabled={!doctor.available}
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;