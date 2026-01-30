import API from './api';

export const productService = {
  createProduct: async (product) => {
    if (product instanceof FormData) {
      const response = await API.post('/products', product, { headers: { 'Content-Type': 'multipart/form-data' } });
      return response.data;
    }
    const response = await API.post('/products', product);
    return response.data;
  },

  getProducts: async () => {
    const response = await API.get('/products');
    return response.data;
  },

  getProductById: async (id) => {
    const response = await API.get(`/products/${id}`);
    return response.data;
  },

  updateProduct: async (id, product) => {
    const response = await API.put(`/products/${id}`, product);
    return response.data;
  },

  deleteProduct: async (id) => {
    const response = await API.delete(`/products/${id}`);
    return response.data;
  }
};
