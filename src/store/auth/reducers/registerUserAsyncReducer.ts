import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface INewUser {
  email: string;
  password: string;
}

const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (user: INewUser) => {
    const URL = process.env.API_URL;

    try {
      const response = await axios.post(`${URL}/register`, user);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export default registerUser;
