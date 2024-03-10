import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getHistoryItems = createAsyncThunk(
  'historyItems/getHistoryItems',
  async (id: string) => {
    //const URL = process.env.API_URL;
    try {
      const response = await axios.post(`https://shoppingify-h8cg.onrender.com/history`, {
        id: id,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
