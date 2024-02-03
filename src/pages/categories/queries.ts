import { showNotification } from '@mantine/notifications';
import { categoryKeys } from '@/config/query-keys';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getCategories, createCategory } from '@/services/category';
import { ICategory } from './types';

export const useGetCategories = () => {
  return useQuery({
    queryKey: categoryKeys.lists(),
    queryFn: getCategories,
    select: (data) => data.data,
  });
};

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: FormData) => createCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: categoryKeys.lists(),
      });
      navigate('/d/categories');
      showNotification({
        message: 'Category created successfully',
      });
    },
  });
};
