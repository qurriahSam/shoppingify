import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCategories = createAsyncThunk('category/fetchCategories', async () => {
  try {
    const response = await axios.get('http://localhost:3000');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export default fetchCategories;
