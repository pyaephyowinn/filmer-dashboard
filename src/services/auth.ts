import axios, { AxiosError, AxiosResponse } from 'axios';
import { ChangePassword, User, UserResponse } from '@/pages/auth/types';

export const login = async (
  data: User
): Promise<
  AxiosResponse<{ message: string; data: UserResponse }, AxiosError>
> => {
  return axios.post('/auth/login', data);
};

export const changePassword = async (
  data: Omit<ChangePassword, 'confirmPassword'>
): Promise<AxiosResponse<{ message: string; data: any }, AxiosError>> => {
  return axios.post('/auth/change-password', data);
};
