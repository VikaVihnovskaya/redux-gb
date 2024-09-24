import { configureStore } from '@reduxjs/toolkit';
import { themeToggleReducer} from './themeToggleReducer';

export const store = configureStore({
  reducer: {
    theme: themeToggleReducer,
  }
});


