import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Status } from '../../../types/types';

export const getHistoryItems = createAsyncThunk(
  'historyItems/getHistoryItems',
  async (id: string) => {
    try {
      const response = await axios.post('http://localhost:3000/history', { id: id });
      return { ...response.data, status: Status.updated };
    } catch (error) {
      console.log(error);
    }
  }
);
