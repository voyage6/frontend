import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  isLogin: boolean;
  createdAt?: string;
  imgUrl?: string | null;
  updatedAt?: string;
  userId?: number | null;
  userName?: string;
}

const initialState: User = {
  isLogin: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
      state.createdAt = '';
      state.imgUrl = '';
      state.updatedAt = '';
      state.userId = null;
      state.userName = '';
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.createdAt = action.payload.createdAt;
      state.imgUrl = action.payload.imgUrl;
      state.updatedAt = action.payload.updatedAt;
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      if (action.payload.isLogin) {
        state.isLogin = action.payload.isLogin;
      }
    },
  },
});
