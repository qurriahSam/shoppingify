import { createAsyncThunk } from '@reduxjs/toolkit';
import { ShoppingList, Status } from '../../../types/types';
import axios from 'axios';

const saveShoppingList = createAsyncThunk(
  'shoppingList/saveShoppingList',
  async (shoppingList: ShoppingList): Promise<ShoppingList> => {
    const sendData = {
      title: shoppingList.title,
      list: shoppingList.list,
      status: shoppingList.status,
      date: shoppingList.date,
    };
    try {
      const response = await axios.post('http://localhost:3000/newShopping', sendData);
      return { ...response.data, update: Status.updated };
    } catch (error) {
      console.log(error);
      return shoppingList;
    }
  }
);

export default saveShoppingList;
