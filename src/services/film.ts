import {
  ICategory,
  ICreateFilm,
  IGetFilm,
  IUpdateFilm,
} from '@/pages/films/types';
import axios, { AxiosError, AxiosResponse } from 'axios';

export const createFilm = (
  data: ICreateFilm
): Promise<AxiosResponse<any, AxiosError>> => {
  return axios.post('/films', data);
};

export const getFilms = (): Promise<AxiosResponse<ICategory[], AxiosError>> => {
  return axios.get('/films');
};

export const getFilm = (
  id: string
): Promise<AxiosResponse<IGetFilm, AxiosError>> => {
  return axios.get(`/films/${id}`);
};

export const updateFilm = ({
  id,
  film,
}: {
  id: string;
  film: IUpdateFilm;
}): Promise<AxiosResponse<any, AxiosError>> => {
  return axios.patch(`/films/${id}`, film);
};

export const deleteFilm = async (id: string) => {
  return axios.delete(`/films/${id}`);
};
