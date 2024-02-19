import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getHistory = createAsyncThunk('history/getHistory', async () => {
  try {
    const response = await axios('http://localhost:3000/history');
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export default getHistory;
