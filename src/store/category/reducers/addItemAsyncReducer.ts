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
  const sendData = {
    _id: item.categoryId,
    category: item.category,
    item: {
      name: item.name,
      image: item.image,
      note: item.note,
    },
  };

  try {
    const response = await axios.post('http://localhost:3000', sendData);
    console.log('res.success');

    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export default addItem;
