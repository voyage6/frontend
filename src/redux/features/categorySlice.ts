import { createSlice } from '@reduxjs/toolkit';

interface CategoryState {
  value: string;
}

const initialState: CategoryState = {
  value: '전체',
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeTo: (state, action) => {
      state.value = action.payload;
    },
  },
});
