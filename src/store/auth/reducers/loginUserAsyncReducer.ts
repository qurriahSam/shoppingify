import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface INewUser {
  email: string;
  password: string;
}

const loginUser = createAsyncThunk('auth/loginUser', async (user: INewUser) => {
  const URL = process.env.API_URL;

  try {
    const response = await axios.post(`${URL}/login`, user);
    console.log(response);
    return {
      _id: response.data.data.userId as string,
      email: response.data.data.email as string,
    };
  } catch (error) {
    console.error(error);
  }
});

export default loginUser;
