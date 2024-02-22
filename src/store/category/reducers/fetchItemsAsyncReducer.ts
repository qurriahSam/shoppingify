import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCategories = createAsyncThunk('category/fetchCategories', async () => {
  // const URL = process.env.API_URL;
  try {
    const response = await axios.get('https://shoppingify-h8cg.onrender.com');
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export default fetchCategories;
