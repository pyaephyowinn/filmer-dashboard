import axios, { AxiosError, AxiosResponse } from 'axios';

export const getPhotos = () => {
  return axios.get('/images');
};

export const createPhotos = (
  data: FormData
): Promise<AxiosResponse<any, AxiosError>> => {
  return axios.post('/images', data);
};
