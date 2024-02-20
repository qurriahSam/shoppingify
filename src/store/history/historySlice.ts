import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HistoryListTitle, Status } from '../../types/types';
import getHistory from './reducers/getHistoryAsync';

const initialState = {
  status: Status.initial,
  historyList: [
    {
      _id: '',
      title: '',
      date: '',
      status: '',
    },
  ],
};

//TODO: handle errors from gethistory, addcases for error and pending

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHistory.fulfilled, (state, action: PayloadAction<HistoryListTitle[]>) => {
      return (state = {
        status: Status.updated,
        historyList: action.payload,
      });
    });
  },
});

export default historySlice.reducer;
