import { showNotification } from '@mantine/notifications';
import { categoryKeys } from '@/config/query-keys';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import {
  getCategories,
  createCategory,
  getCategory,
  updateCategory,
} from '@/services/category';

export const useGetCategories = () => {
  return useQuery({
    queryKey: categoryKeys.lists(),
    queryFn: getCategories,
    select: (data) => data.data,
  });
};

export const useGetCategory = (id: string) => {
  return useQuery({
    queryKey: categoryKeys.detail(id),
    queryFn: () => getCategory(id),
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

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: FormData }) =>
      updateCategory({
        id,
        data,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: categoryKeys.lists(),
      });
      navigate('/d/categories');
      showNotification({
        message: 'Category updated successfully',
      });
    },
  });
};
