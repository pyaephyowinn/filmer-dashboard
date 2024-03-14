import { useNavigate } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createPhotos, getPhotos } from '@/services/photo';
import { photoKeys } from '@/config/query-keys';

export const useGetPhotos = () => {
  return useQuery({
    queryKey: photoKeys.lists(),
    queryFn: getPhotos,
    select: (data) => data.data,
  });
};

export const useCreatePhotos = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: FormData) => createPhotos(data),
    mutationKey: photoKeys.all,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: photoKeys.lists(),
      });
      navigate('/d/photos');
      showNotification({
        message: 'Photos created successfully',
      });
    },
  });
};
