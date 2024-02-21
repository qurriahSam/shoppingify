import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Status } from '../../../types/types';

const getActiveShoppingList = createAsyncThunk(
  'shoppingList/getActiveShoppingList',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async () => {
    try {
      const response = await axios('http://localhost:3000/current');
      if (response.data === null) {
        return {
          _id: '',
          update: Status.initial,
          title: '',
          list: [],
          status: 'incomplete',
          current: true,
          date: new Date().toISOString(),
          __v: 0,
        };
      }
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export default getActiveShoppingList;
