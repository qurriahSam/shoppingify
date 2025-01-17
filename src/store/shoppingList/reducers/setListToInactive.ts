import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ShoppingList, Status } from '../../../types/types';

const setListToInactive = createAsyncThunk(
  'shoppingList/setListToInactive',

  async (shoppingList: ShoppingList) => {
    const URL = process.env.API_URL;
    const sendData = {
      _id: shoppingList._id,
      current: false,
    };
    try {
      await axios.post(`${URL}/updateShopping`, sendData);
      return {
        _id: '',
        userId: '',
        update: Status.initial,
        title: '',
        list: [],
        status: 'incomplete',
        current: true,
        date: new Date().toISOString(),
        __v: 0,
      };
    } catch (error) {
      console.log(error);
      return shoppingList;
    }
  }
);

export default setListToInactive;
