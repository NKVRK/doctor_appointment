import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppointmentForm from '../components/AppointmentForm';

const BookingFormPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const doctorId = parseInt(id || '0', 10);
  const navigate = useNavigate();

  const handleFormSubmit = (formData: { patientName: string; email: string; date: Date; time: string;}) => {
    navigate('/booking-status', { state: { ...formData, date: formData.date.toISOString() } });
  };

  return (
    <AppointmentForm doctorId={doctorId} onSubmit={handleFormSubmit} />
  );
};

export default BookingFormPage;