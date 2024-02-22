import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Status } from '../../../types/types';

export const getHistoryItems = createAsyncThunk(
  'historyItems/getHistoryItems',
  async (id: string) => {
    const URL = process.env.REACT_APP_API_URL;
    try {
      const response = await axios.post(`${URL}/history`, { id: id });
      return { ...response.data, status: Status.updated };
    } catch (error) {
      console.log(error);
    }
  }
);
