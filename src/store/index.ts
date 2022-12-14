import create from 'zustand';
import { devtools} from 'zustand/middleware';
import { spashScreenSlice, splashScreenSliceType } from './useSplashScreen';

export const useStore = create<splashScreenSliceType>()(
  devtools((...a) => ({
    ...spashScreenSlice(...a),
  }))
);
