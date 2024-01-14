import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { encryptStorage } from '@/utils/encryptStore';

interface AuthState {
  logout: () => void;
  expired: () => void;
  setAuth: (token: string) => void;
  sessionExpired: boolean;
  accessToken: string | undefined;
}

export const useAuth = create<AuthState, [['zustand/persist', unknown]]>(
  persist(
    (set) => ({
      sessionExpired: false,
      accessToken: undefined,
      refreshToken: undefined,
      expired: () => set((state) => ({ ...state, sessionExpired: true })),
      setAuth: (token) =>
        set(() => ({
          sessionExpired: false,
          accessToken: token,
        })),
      logout: () =>
        set(() => ({
          accessToken: undefined,
          sessionExpired: false,
        })),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => encryptStorage),
    }
  )
);
