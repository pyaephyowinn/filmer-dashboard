import { filmKeys } from '@/config/query-keys';
import {
  getFilms,
  createFilm,
  updateFilm,
  getFilm,
  deleteFilm,
} from '@/services/film';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';
import { ICreateFilm, IUpdateFilm } from './types';

export const useGetFilms = () => {
  return useQuery({
    queryKey: filmKeys.lists(),
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
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: ICreateFilm) => createFilm(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: filmKeys.lists(),
      });
      navigate('/d/films');
      showNotification({
        message: 'Film created successfully',
      });
    },
  });
};

export const useUpdateFilm = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ id, film }: { id: string; film: IUpdateFilm }) =>
      updateFilm({ id, film }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: filmKeys.lists(),
      });
      navigate('/d/films');
      showNotification({
        message: 'Film updated successfully',
      });
    },
  });
};

export const useDeleteFilm = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteFilm(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: filmKeys.lists(),
      });
      showNotification({
        message: 'Film deleted successfully',
      });
    },
  });
};
