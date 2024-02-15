import { createAsyncThunk } from '@reduxjs/toolkit';
import { ShoppingList, Status } from '../../../types/types';
import axios from 'axios';

const saveShoppingList = createAsyncThunk(
  'shoppingList/saveShoppingList',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (shoppingList: any): Promise<ShoppingList> => {
    const sendData = {
      title: shoppingList.title,
      list: shoppingList.list,
      status: shoppingList.status,
      current: shoppingList.current,
      date: shoppingList.date,
    };
    try {
      if (shoppingList._id.length > 1) {
        console.log(shoppingList);
        const response = await axios.post(
          'https://shoppingify-lovat.vercel.app/updateShopping',
          shoppingList
        );
        return { ...response.data, update: Status.updated };
      }
      const response = await axios.post(
        'https://shoppingify-lovat.vercel.app/newShopping',
        sendData
      );
      return { ...response.data, update: Status.updated };
    } catch (error) {
      console.log(error);
      return shoppingList;
    }
  }
);

export default saveShoppingList;
