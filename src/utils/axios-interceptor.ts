import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL ?? '';

export const setupRequestInterceptor = () => {
  axios.interceptors.request.use((config) => {
    console.log('API_URL', API_URL);
    const request = { ...config };
    if (!request.url?.startsWith('http')) {
      request.url = `${API_URL}${request.url}`;
    }
    return request;
  });
};

export const setupResponseInterceptor = () => {
  axios.interceptors.response.use((response) => response);
};
