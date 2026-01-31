import API from "./api";

export const vendorService = {
  getBookings: async () => {
    const response = await API.get('/bookings');
    return response.data;
  },

  updateBookingStatus: async (bookingId, status) => {
    const response = await API.put(`/bookings/${bookingId}/status`, { status });
    return response.data;
  },
};
