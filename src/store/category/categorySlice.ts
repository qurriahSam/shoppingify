import { Category } from '../../types/types';
import { createSlice } from '@reduxjs/toolkit';
import fetchCategories from './categoryAsyncReducers';

const initialState: Category[] = [
  {
    _id: '',
    category: '',
    items: [{ _id: '', name: '' }],
  },
];

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, () => console.log('pending'))
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state = action.payload;
      });
  },
});

export default categorySlice.reducer;
