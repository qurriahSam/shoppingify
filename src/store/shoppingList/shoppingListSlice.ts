import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ShoppingItemCategory } from '../../types/types';

const initialState: ShoppingItemCategory[] = [];

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    addItemToList: (state, action: PayloadAction<ShoppingItemCategory>) => {
      const category = state.find((category) => category._id === action.payload._id);
      if (category) {
        const item = category.items.find((item) => item._id === action.payload.items[0]._id);
        if (!item) category.items.push(action.payload.items[0]);
        return state;
      }
      state.push(action.payload);
      return state;
    },
    removeItemFromList: (state, action: PayloadAction<ShoppingItemCategory>) => {
      const category = state.find((category) => category._id === action.payload._id);
      if (category) {
        const item = category.items.find((item) => item._id === action.payload.items[0]._id);
        if (item)
          category.items = category.items.filter(
            (item) => item._id !== action.payload.items[0]._id
          );
        return state;
      }
      state.push(action.payload);
      return state;
    },
    checkoutItemFromList: (state, action: PayloadAction<ShoppingItemCategory>) => {
      const category = state.find((category) => category._id === action.payload._id);
      if (category) {
        const item = category.items.find((item) => item._id === action.payload.items[0]._id);
        if (item) item.complete = !item.complete;
      }
      return state;
    },
    increaseItemCount: (state, action: PayloadAction<ShoppingItemCategory>) => {
      const category = state.find((category) => category._id === action.payload._id);
      if (category) {
        const item = category.items.find((item) => item._id === action.payload.items[0]._id);
        if (item) item.count = ++item.count;
      }
      return state;
    },
    decreaseItemCount: (state, action: PayloadAction<ShoppingItemCategory>) => {
      const category = state.find((category) => category._id === action.payload._id);
      if (category) {
        const item = category.items.find((item) => item._id === action.payload.items[0]._id);
        if (item && item.count > 1) item.count = --item.count;
      }
      return state;
    },
  },
});

export const {
  addItemToList,
  checkoutItemFromList,
  increaseItemCount,
  decreaseItemCount,
  removeItemFromList,
} = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
