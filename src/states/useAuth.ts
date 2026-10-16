import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { User } from '../types/User';

type State = {
  user: User | null;
  token: string | null;
  hasHydrated: boolean;
};

type Actions = {
  signIn: (token: string, user: User) => void;
  signOut: () => void;
  setHasHydrated: (value: boolean) => void;
};

const useAuth = create<State & Actions>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      hasHydrated: false,
      signIn: (token, user) => set(() => ({ token, user })),
      signOut: () => set(() => ({ token: null, user: null })),
      setHasHydrated: (value) => set(() => ({ hasHydrated: value })),
    }),
    {
      name: 'state-useAuth',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ user: state.user, token: state.token }),
      onRehydrateStorage: () => (state) => state?.setHasHydrated(true),
    }
  )
);

export default useAuth;
