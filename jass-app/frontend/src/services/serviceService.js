import API from './api';

export const serviceService = {
  createService: async (service) => {
    if (service instanceof FormData) {
      const response = await API.post('/services', service, { headers: { 'Content-Type': 'multipart/form-data' } });
      return response.data;
    }
    const response = await API.post('/services', service);
    return response.data;
  },

  getServices: async () => {
    const response = await API.get('/services');
    return response.data;
  },

  getServiceById: async (id) => {
    const response = await API.get(`/services/${id}`);
    return response.data;
  },

  updateService: async (id, service) => {
    const response = await API.put(`/services/${id}`, service);
    return response.data;
  },

  deleteService: async (id) => {
    const response = await API.delete(`/services/${id}`);
    return response.data;
  }
};
