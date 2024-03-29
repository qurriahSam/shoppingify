import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getHistory = createAsyncThunk('history/getHistory', async () => {
  //const URL = process.env.API_URL;
  try {
    const response = await axios(`https://shoppingify-h8cg.onrender.com/history`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export default getHistory;
