import { createAsyncThunk } from '@reduxjs/toolkit';
import { ShoppingList } from '../../../types/types';
import axios from 'axios';

const saveShoppingList = createAsyncThunk(
  'shoppingList/saveShoppingList',
  async (shoppingList: ShoppingList) => {
    try {
      const response = await axios.post('http://localhost:3000/newShopping', shoppingList);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export default saveShoppingList;
