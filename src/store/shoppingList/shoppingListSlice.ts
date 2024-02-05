import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ShoppingItemCategory } from '../../types/types';

const initialState: ShoppingItemCategory[] = [
  {
    _id: '',
    category: 'fruits',
    items: [{ _id: 'fdsfdfewsdsf', name: 'apple', complete: false, count: 1 }],
  },
];

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
  },
});

export const { addItemToList } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
