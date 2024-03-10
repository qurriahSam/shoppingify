import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Status, IHistoryState } from '../../types/types';
import { getHistoryItems } from './reducers/getHistoryItems';
//import getHistory from './reducers/getHistoryAsync';

const initialState: IHistoryState = {
  _id: '65ce487ca55a440cb5ae4c79',
  stateStatus: Status.initial,
  title: 'jgy8iuhjlk',
  list: [
    {
      category: 'snacks',
      items: [
        {
          _id: '65b10b0494e43d9f9c2bfe7c',
          name: 'chips',
          complete: false,
          count: 1,
        },
      ],
      _id: '65b10b0494e43d9f9c2bfe7a',
    },
  ],
  status: 'incomplete',
  current: false,
  date: '2024-02-15T17:22:53.979Z',
  __v: 0,
};

//TODO: handle errors from gethistory, addcases for error and pending

const historyItemsSlice = createSlice({
  name: 'historyItems',
  initialState,
  reducers: {
    clearHistoryItems: (state) => {
      state.stateStatus = Status.initial;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHistoryItems.fulfilled, (state, action: PayloadAction<IHistoryState>) => {
      return { ...action.payload, stateStatus: Status.updated };
    });
  },
});

export const { clearHistoryItems } = historyItemsSlice.actions;
export default historyItemsSlice.reducer;
