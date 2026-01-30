import axios from 'axios';

const API_URL = 'http://localhost:5000/api/bookings';

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
};

const createBooking = async (bookingData) => {
  const response = await axios.post(API_URL, bookingData, {
    headers: getAuthHeader()
  });
  return response.data;
};

const getBookings = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(API_URL, {
    headers: token ? { Authorization: `Bearer ${token}` } : {}
  });
  return response.data;
};

const updateBookingStatus = async (bookingId, status) => {
  const response = await axios.put(`${API_URL}/${bookingId}/status`, { status }, {
    headers: getAuthHeader()
  });
  return response.data;
};

export const bookingService = {
  createBooking,
  getBookings,
  updateBookingStatus
};
