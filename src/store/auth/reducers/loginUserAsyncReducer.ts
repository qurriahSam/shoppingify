import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface INewUser {
  email: string;
  password: string;
}

interface User {
  _id: string | null;
  email: string | null;
}

const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (user: INewUser): Promise<User> => {
    const URL = import.meta.env.VITE_URL as string;

    try {
      const response = await axios.post(`${URL}/login`, user);
      console.log(response);
      return {
        _id: response.data.data.userId as string,
        email: response.data.data.email as string,
      };
    } catch (error) {
      console.error(error);
      return {
        _id: null,
        email: null,
      };
    }
  }
);

export default loginUser;
