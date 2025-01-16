import { createAsyncThunk } from "@reduxjs/toolkit";
import { ShoppingList, Status } from "../../../types/types";
import axios from "axios";
import useLocalStorage from "../../../service/localStorageService";

const saveShoppingList = createAsyncThunk(
  "shoppingList/saveShoppingList",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (shoppingList: any): Promise<ShoppingList> => {
    const URL = process.env.LOCAL_API_URL;
    const { userDetails } = useLocalStorage("user");
    const sendData = {
      userId: userDetails?._id,
      title: shoppingList.title,
      list: shoppingList.list,
      status: shoppingList.status,
      current: shoppingList.current,
      date: shoppingList.date,
    };
    try {
      if (shoppingList._id.length > 1) {
        console.log(shoppingList);
        const response = await axios.post(
          `${URL}/updateShopping`,
          shoppingList
        );
        return { ...response.data, update: Status.updated };
      }
      const response = await axios.post(`${URL}/newShopping`, sendData);
      return { ...response.data, update: Status.updated };
    } catch (error) {
      console.log(error);
      return shoppingList;
    }
  }
);

export default saveShoppingList;
