import { categoryKeys } from '@/config/query-keys';
import { getCategories } from '@/services/category';
import { useQuery } from '@tanstack/react-query';

export const useGetCategories = () => {
  return useQuery({
    queryKey: categoryKeys.all,
    queryFn: getCategories,
    select: (data) => data.data,
  });
};
