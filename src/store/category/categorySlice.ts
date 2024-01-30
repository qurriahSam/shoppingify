import { Category, Status } from '../../types/types';
import { createSlice } from '@reduxjs/toolkit';
import fetchCategories from './fetchItemsAsyncReducer';

interface CategoryStore {
  status: Status;
  data: Category[];
}

const initialState: CategoryStore = {
  status: Status.initial,
  data: [
    {
      _id: '',
      category: '',
      items: [{ _id: '', name: '', note: '', image: '' }],
      __v: 0,
    },
  ],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        return (state = { ...state, status: Status.loading });
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        return (state = { status: Status.updated, data: action.payload });
      })
      .addCase(fetchCategories.rejected, (state) => {
        return (state = { ...state, status: Status.failed });
      });
  },
});

export default categorySlice.reducer;
