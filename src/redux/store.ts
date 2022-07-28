import { configureStore } from '@reduxjs/toolkit';
import { categorySlice } from './features/categorySlice';
import { userSlice } from './features/userSlice';

export const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
