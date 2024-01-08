import { ICategory } from '@/pages/films/types';
import axios, { AxiosError, AxiosResponse } from 'axios';

export const createFilm = async (data: any) => {
  return axios.post('/films', data);
};

export const getFilms = async (): Promise<
  AxiosResponse<ICategory[], AxiosError>
> => {
  return axios.get('/films');
};

export const deleteFilm = async (id: string) => {
  return axios.delete(`/films/${id}`);
};
