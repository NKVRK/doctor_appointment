import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDoctorContext } from '../context/DoctorContext';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    } else {
      const selectedDate = new Date(formData.date);
      selectedDate.setHours(0, 0, 0, 0);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past';
        isValid = false;
      }
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
      setIsSubmitting(true);
      toast.success('Scheduling your appointment...');
      // Small delay to let the toast show before navigating
      setTimeout(() => {
        onSubmit({ ...formData, doctor });
      }, 800);
    } else {
      toast.error('Please fix the errors in the form.');
    }
  };

  if (!doctor) {
    return <div className="text-center text-lg p-6">Doctor not found.</div>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-7xl mx-auto px-4 py-8 relative z-10 flex flex-col items-center"
    >
      <div className="w-full max-w-3xl mb-6">
        <Link
          to={`/doctor/${doctorId}`}
          className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-xl transition-all duration-300 shadow-sm border border-gray-200 dark:border-gray-700 w-max"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back to Profile
        </Link>
      </div>

      <div className="w-full max-w-3xl bg-white dark:bg-gray-800/80 p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700 backdrop-blur-sm relative overflow-hidden">
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/5 dark:bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="border-b border-gray-100 dark:border-gray-700/50 pb-6 mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">Book Appointment</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">with <span className="font-semibold text-sky-600 dark:text-sky-400">{doctor.name}</span></p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200"
              />
              {errors.patientName && <p className="text-sm text-red-500 mt-1.5">{errors.patientName}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200"
              />
              {errors.email && <p className="text-sm text-red-500 mt-1.5">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Reason for Visit <span className="text-gray-400 font-normal">(Optional)</span></label>
            <textarea
              name="reason"
              placeholder="Briefly describe your health concerns..."
              className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200 min-h-[120px] resize-y"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 dark:bg-gray-900/30 rounded-2xl border border-gray-100 dark:border-gray-700/50 mt-8">
            {/* Appointment Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Appointment Date</label>
              <div className="relative">
                <DatePicker
                  selected={formData.date}
                  onChange={(date: Date | null) => setFormData(prev => ({ ...prev, date: date || new Date() }))} 
                  dateFormat="MMMM d, yyyy"
                  className="w-full px-4 py-3.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200"
                  placeholderText="Select a date"
                />
                <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              {errors.date && <p className="text-sm text-red-500 mt-1.5">{errors.date}</p>}
            </div>

            {/* Appointment Time */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Appointment Time</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.5em_1.5em] bg-[right_0.5rem_center] bg-no-repeat pr-10"
              >
                <option value="">Select an available time</option>
                <option value="09:30 AM">09:30 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="03:00 PM">03:00 PM</option>
              </select>
              {errors.time && <p className="text-sm text-red-500 mt-1.5">{errors.time}</p>}
            </div>
          </div>

          <div className="pt-4 mt-8 border-t border-gray-100 dark:border-gray-700/50">
            <motion.button
              whileHover={{ scale: doctor.available ? 1.02 : 1 }}
              whileTap={{ scale: doctor.available ? 0.98 : 1 }}
              type="submit"
              className="w-full py-4 px-6 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg disabled:bg-gray-400 disabled:dark:bg-gray-700 disabled:hover:shadow-none disabled:cursor-not-allowed text-lg"
              disabled={!doctor.available}
            >
              Confirm Appointment
            </motion.button>
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-4">
              By confirming, you agree to our terms and cancellation policy.
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default AppointmentForm;