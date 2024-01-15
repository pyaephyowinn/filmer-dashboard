import { ICategoryWithNoFilms } from '@/types/common';
import axios, { AxiosError, AxiosResponse } from 'axios';

export const getCategories = (): Promise<
  AxiosResponse<ICategoryWithNoFilms[], AxiosError>
> => {
  return axios.get('/categories');
};
