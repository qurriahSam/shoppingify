import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async () => {
    const URL = import.meta.env.VITE_URL as string;
    try {
      const response = await axios.get(`${URL}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export default fetchCategories;
