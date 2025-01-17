import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getHistory = createAsyncThunk(
  "history/getHistory",
  async (userId: string) => {
    const URL = process.env.API_URL;
    try {
      const response = await axios.post(`${URL}/history`, { _id: userId });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export default getHistory;
