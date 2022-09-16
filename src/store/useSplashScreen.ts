import { StateCreator } from 'zustand';

export interface splashScreenSliceType {
  loading: boolean;
  setLoading: (payload: boolean) => void;
}

export const spashScreenSlice: StateCreator<
  splashScreenSliceType,
  [['zustand/devtools', never]],
  [],
  splashScreenSliceType
> = (set) => ({
  loading: false,
  setLoading: (payload) => set(() => ({ loading: payload })),
});
