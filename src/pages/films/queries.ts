import { filmKeys } from '@/config/query-keys';
import { getFilms, createFilm, updateFilm, getFilm } from '@/services/film';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { ICreateFilm, IUpdateFilm } from './types';

export const useGetFilms = () => {
  return useQuery({
    queryKey: filmKeys.all,
    queryFn: getFilms,
    select: (data) => data.data,
  });
};

export const useGetFilm = (id: string) => {
  return useQuery({
    queryKey: filmKeys.detail(id),
    queryFn: () => getFilm(id),
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

export const useUpdateFilm = () => {
  const queryClient = new QueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ id, film }: { id: string; film: IUpdateFilm }) =>
      updateFilm({ id, film }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: filmKeys.all,
      });
      navigate('/d/films');
    },
  });
};
