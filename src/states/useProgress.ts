import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { LocalSession } from '../types/LocalSession';

type State = {
  completedScenarios: string[];
  sessions: LocalSession[];
};

type Actions = {
  markScenarioCompleted: (id: string) => void;
  addSession: (session: LocalSession) => void;
};

const useProgress = create<State & Actions>()(
  persist(
    (set) => ({
      completedScenarios: [],
      sessions: [],
      markScenarioCompleted: (id) =>
        set((state) =>
          state.completedScenarios.includes(id)
            ? state
            : { completedScenarios: [...state.completedScenarios, id] }
        ),
      addSession: (session) => set((state) => ({ sessions: [...state.sessions, session] })),
    }),
    {
      name: 'state-useProgress',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useProgress;
