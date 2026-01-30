import API from './api';

export const authService = {
  register: async (userData) => {
    const response = await API.post('/auth/register', userData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', response.data.role);
      localStorage.setItem('userData', JSON.stringify({
        _id: response.data._id,
        name: response.data.name,
        email: response.data.email,
        phone: response.data.phone
      }));
    }
    return response.data;
  },

  login: async (credentials) => {
    const response = await API.post('/auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', response.data.role);
      localStorage.setItem('userData', JSON.stringify({
        _id: response.data._id,
        name: response.data.name,
        email: response.data.email,
        phone: response.data.phone
      }));
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userData');
  },

  getProfile: async () => {
    const response = await API.get('/auth/profile');
    return response.data;
  }
};
