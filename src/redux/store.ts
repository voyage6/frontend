import { configureStore } from '@reduxjs/toolkit';
import { categorySlice } from './features/categorySlice';

export const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
