import API from './api';

export const adminService = {
  getDashboardStats: async () => {
    const response = await API.get('/admin/stats');
    return response.data;
  },

  getAllUsers: async () => {
    const response = await API.get('/admin/users');
    return response.data;
  },

  updateUserStatus: async (userId, status) => {
    const response = await API.put(`/admin/users/${userId}/status`, { status });
    return response.data;
  },

  deleteUser: async (userId) => {
    const response = await API.delete(`/admin/users/${userId}`);
    return response.data;
  },

  createVendor: async (vendorData) => {
    const response = await API.post('/admin/vendors', vendorData);
    return response.data;
  },

  getAllVendors: async () => {
    const response = await API.get('/admin/vendors');
    return response.data;
  },

  updateVendorStatus: async (vendorId, status) => {
    const response = await API.put(`/admin/vendors/${vendorId}/status`, { status });
    return response.data;
  },

  deleteVendor: async (vendorId) => {
    const response = await API.delete(`/admin/vendors/${vendorId}`);
    return response.data;
  },

  updateVendor: async (vendorId, vendorData) => {
    const response = await API.put(`/admin/vendors/${vendorId}`, vendorData);
    return response.data;
  },

  getAllBookings: async () => {
    const response = await API.get('/admin/bookings');
    return response.data;
  },

  updateBookingStatus: async (bookingId, status) => {
    const response = await API.put(`/admin/bookings/${bookingId}/status`, { status });
    return response.data;
  },

  getOrdersByStore: async () => {
    const response = await API.get('/admin/orders-by-store');
    return response.data;
  },

  getServicesBreakdown: async () => {
    const response = await API.get('/admin/services-breakdown');
    return response.data;
  },

  deleteService: async (serviceId) => {
    const response = await API.delete(`/admin/services/${serviceId}`);
    return response.data;
  },

  deleteProduct: async (productId) => {
    const response = await API.delete(`/admin/products/${productId}`);
    return response.data;
  },

  createProduct: async (formData) => {
    const response = await API.post('/products', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  },

  updateProduct: async (productId, formData) => {
    const response = await API.put(`/products/${productId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  },

  getProductById: async (productId) => {
    const response = await API.get(`/products/${productId}`);
    return response.data;
  },

  forgotPassword: async (email) => {
    const response = await API.post('/admin/forgot-password', { email });
    return response.data;
  },

  resetPassword: async (email, newPassword) => {
    const response = await API.post('/admin/reset-password', { email, newPassword });
    return response.data;
  }
};
