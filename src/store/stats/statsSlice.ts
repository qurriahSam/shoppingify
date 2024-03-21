import { createSlice } from '@reduxjs/toolkit';
import { Status } from '../../types/types';
import fetchStats from './reducers/fetchStatsAsync';

export interface Stat {
  _id: string;
  category: string;
  items: {
    [key: string]: number;
  };
}

interface StatsState {
  status: Status;
  categories: Stat[];
  months: { month: string; count: number }[];
}

const initialState: StatsState = {
  status: Status.initial,
  categories: [],
  months: [],
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchStats.fulfilled, (state, action) => {
      if (action.payload?.months && action.payload.categories && action.payload.status) {
        return {
          ...state,
          status: action.payload.status,
          categories: action.payload.categories,
          months: action.payload.months,
        };
      }
      return state;
    });
  },
});

export default statsSlice.reducer;
