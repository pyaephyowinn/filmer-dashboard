import { useEffect } from 'react';
import { useAuthStore } from '@/store/useAuth';
import { useNavigate } from 'react-router-dom';

export function useAuthenticatedRoute() {
  const navigate = useNavigate();
  const { accessToken } = useAuthStore((state) => state);

  useEffect(() => {
    if (!accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);
}

export function useUnauthenticatedRoute() {
  const navigate = useNavigate();
  const { accessToken } = useAuthStore();

  useEffect(() => {
    if (accessToken) {
      navigate('/d');
    }
  }, [accessToken, navigate]);
}
