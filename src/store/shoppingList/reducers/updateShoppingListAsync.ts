import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ShoppingList, Status } from '../../../types/types';

const updateShoppingList = createAsyncThunk(
  'shoppingList/updateShoppingList',

  async (shoppingList: ShoppingList) => {
    //const URL = process.env.REACT_APP_URL;
    const sendData = {
      _id: shoppingList._id,
      title: shoppingList.title,
      list: shoppingList.list,
      status: shoppingList.status,
      current: shoppingList.current,
    };
    try {
      const response = await axios.post(
        'https://shoppingify-h8cg.onrender.com/updateShopping',
        sendData
      );
      if (response.data.current === false)
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
      return { ...response.data, update: Status.updated };
    } catch (error) {
      console.log(error);
      return shoppingList;
    }
  }
);

export default updateShoppingList;
