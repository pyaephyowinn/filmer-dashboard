import axios from 'axios';
import { useAuthStore } from '@/store/useAuth';
import { API_URL } from '@/config/constant';

export const setupRequestInterceptor = () => {
  axios.interceptors.request.use((config: any) => {
    console.log('API_URL', API_URL);
    const request = { ...config };
    if (!request.url?.startsWith('http')) {
      request.url = `${API_URL}${request.url}`;
    }

    const token = useAuthStore.getState().accessToken;
    if (token)
      request.headers = {
        ...request.headers,
        Authorization: `Bearer ${token}`,
      };
    return request;
  });
};

export const setupResponseInterceptor = () => {
  axios.interceptors.response.use((response) => response);
};
