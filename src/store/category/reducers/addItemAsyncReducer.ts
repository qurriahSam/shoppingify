import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface INewItem {
  categoryId: string;
  category: string;
  name: string;
  image: string;
  note: string;
}

const addItem = createAsyncThunk('category/addItem', async (item: INewItem) => {
  const URL = process.env.REACT_APP_API_URL;
  const sendData = {
    categoryId: item.categoryId,
    category: item.category,
    item: {
      name: item.name,
      image: item.image,
      note: item.note,
    },
  };

  try {
    const response = await axios.post(`${URL}`, sendData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export default addItem;
