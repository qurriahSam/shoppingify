import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface INewUser {
  email: string;
  password: string;
}

const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (user: INewUser) => {
    //const URL = process.env.REACT_APP_URL;

    try {
      const response = await axios.post(
        'https://shoppingify-h8cg.onrender.com/register',
        user
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export default registerUser;
