import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getActiveShoppingList = createAsyncThunk(
  'shoppingList/getActiveShoppingList',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async () => {
    try {
      const response = await axios('http://localhost:3000/current');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export default getActiveShoppingList;
