import { Category, Status } from '../../types/types';
import { createSlice } from '@reduxjs/toolkit';
import fetchCategories from './reducers/fetchItemsAsyncReducer';
import addItem from './reducers/addItemAsyncReducer';

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

    builder
      .addCase(addItem.pending, (state) => {
        return (state = { ...state, status: Status.loading });
      })
      .addCase(addItem.fulfilled, (state, action) => {
        const findCat = state.data.find((category) => category._id === action.payload._id);

        if (findCat) {
          findCat.items.push(action.payload.items[0]);
          state.status = Status.updated;
        } else {
          state.data.push(action.payload);
          state.status = Status.updated;
        }
        return state;
      })
      .addCase(addItem.rejected, (state) => {
        return (state = { ...state, status: Status.failed });
      });
  },
});

export default categorySlice.reducer;
