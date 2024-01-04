import axios from 'axios';
import { User } from '../types';

export const login = async (data: User) => {
  console.log('triggered');

  return axios.post('/auth/login', data);
};
