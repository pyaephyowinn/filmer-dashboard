import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { encryptStorage } from '@/utils/encryptStore';
import { UserResponse } from '@/pages/auth/types';

interface AuthState {
  logout: () => void;
  expired: () => void;
  setAuth: (data: UserResponse) => void;
  sessionExpired: boolean;
  name: string | undefined;
  email: string | undefined;
  accessToken: string | undefined;
}

export const useAuthStore = create<AuthState, [['zustand/persist', unknown]]>(
  persist(
    (set) => ({
      sessionExpired: false,
      accessToken: undefined,
      name: undefined,
      email: undefined,
      expired: () => set((state) => ({ ...state, sessionExpired: true })),
      setAuth: (data: UserResponse) =>
        set(() => ({
          sessionExpired: false,
          accessToken: data.token,
          name: data.name,
          email: data.email,
        })),
      logout: () =>
        set(() => ({
          accessToken: undefined,
          sessionExpired: false,
          name: undefined,
          email: undefined,
        })),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => encryptStorage),
    }
  )
);
