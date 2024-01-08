import { filmKeys } from '@/config/query-keys';
import { getFilms } from '@/services/film';
import { useQuery } from '@tanstack/react-query';

export const useGetFilms = () => {
  return useQuery({
    queryKey: filmKeys.all,
    queryFn: getFilms,
    select: (data) => data.data,
  });
};
