import { createAsyncThunk } from '@reduxjs/toolkit';
import { ShoppingList } from '../../../types/types';
import axios from 'axios';

const saveShoppingList = createAsyncThunk(
  'shoppingList/saveShoppingList',
  async (shoppingList: ShoppingList) => {
    try {
      const sendData = await axios.post('http://localhost:3000', shoppingList);
    } catch (error) {}
  }
);
