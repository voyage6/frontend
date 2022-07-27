import { createSlice } from '@reduxjs/toolkit';

interface CategoryState {
  value: '전체' | '피아노' | '기타' | '드럼' | '우쿨렐레' | '오르골' | '클라리넷' | '계이름';
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
