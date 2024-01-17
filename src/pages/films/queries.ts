import { filmKeys } from '@/config/query-keys';
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
