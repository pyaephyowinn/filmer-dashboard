import { ICategory, ICreateFilm } from '@/pages/films/types';
import axios, { AxiosError, AxiosResponse } from 'axios';

export const createFilm = (
  data: ICreateFilm
): Promise<AxiosResponse<any, AxiosError>> => {
  return axios.post('/films', data);
};

export const getFilms = (): Promise<AxiosResponse<ICategory[], AxiosError>> => {
  return axios.get('/films');
};

export const deleteFilm = async (id: string) => {
  return axios.delete(`/films/${id}`);
};
