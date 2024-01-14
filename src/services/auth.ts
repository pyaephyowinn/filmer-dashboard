import axios, { AxiosError, AxiosResponse } from 'axios';
import { User, UserResponse } from '@/pages/auth/types';

export const login = async (
  data: User
): Promise<
  AxiosResponse<{ message: string; data: UserResponse }, AxiosError>
> => {
  return axios.post('/auth/login', data);
};
