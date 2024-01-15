import { categoryKeys, filmKeys } from '@/config/query-keys';
import { getCategories } from '@/services/category';
import { getFilms, createFilm } from '@/services/film';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { ICreateFilm } from './types';

export const useGetFilms = () => {
  return useQuery({
    queryKey: filmKeys.all,
    queryFn: getFilms,
    select: (data) => data.data,
  });
};

export const useGetCategories = () => {
  return useQuery({
    queryKey: categoryKeys.all,
    queryFn: getCategories,
    select: (data) => data.data,
  });
};

export const useCreateFilm = () => {
  const queryClient = new QueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: ICreateFilm) => createFilm(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: filmKeys.all,
      });
      navigate('/d/films');
    },
  });
};
