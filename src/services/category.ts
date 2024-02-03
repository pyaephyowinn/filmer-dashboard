import { ICategory } from '@/pages/categories/types';
import { ICategoryWithNoFilms } from '@/types/common';
import axios, { AxiosError, AxiosResponse } from 'axios';

export const getCategories = (): Promise<
  AxiosResponse<ICategoryWithNoFilms[], AxiosError>
> => {
  return axios.get('/categories');
};

export const createCategory = (
  data: FormData
): Promise<AxiosResponse<any, AxiosError>> => {
  return axios.post('/categories', data);
};
