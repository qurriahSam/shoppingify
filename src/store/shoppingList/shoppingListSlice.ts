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
        category.items.push(action.payload.items[0]);
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
  },
});

export const { addItemToList, checkoutItemFromList } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
