import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getHistoryItems = createAsyncThunk(
  'historyItems/getHistoryItems',
  async (id: string) => {
    const URL = process.env.REACT_APP_URL;
    try {
      const response = await axios.post(`${URL}/history_items`, {
        id: id,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
