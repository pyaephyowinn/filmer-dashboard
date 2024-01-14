import { showNotification } from '@mantine/notifications';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/useAuth';
import { login } from '@/services/auth';
import { DashboardRoute } from '@/config/constant';
import { User } from './types';

export const useLogin = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: (data: User) => login(data),
    onSuccess: (data) => {
      setAuth(data.data.data);
      navigate(DashboardRoute);
    },
    onError: (error: any) => {
      showNotification({ message: error.response.data.message, color: 'red' });
    },
  });
};
