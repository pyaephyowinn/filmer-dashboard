import { useEffect } from 'react';
import { useAuth } from '@/store/useAuth';
import { useNavigate } from 'react-router-dom';

export function useAuthenticatedRoute() {
  const navigate = useNavigate();
  const { accessToken } = useAuth();

  useEffect(() => {
    if (!accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);
}

export function useUnauthenticatedRoute() {
  const navigate = useNavigate();
  const { accessToken } = useAuth();

  useEffect(() => {
    if (accessToken) {
      navigate('/d');
    }
  }, [accessToken, navigate]);
}
