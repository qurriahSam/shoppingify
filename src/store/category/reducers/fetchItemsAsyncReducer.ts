import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCategories = createAsyncThunk('category/fetchCategories', async () => {
  //const URL = process.env.REACT_APP_API_URL;
  try {
    const response = await axios.get('http://localhost:3000');
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export default fetchCategories;
