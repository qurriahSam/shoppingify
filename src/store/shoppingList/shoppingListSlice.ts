import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ShoppingItemCategory, ShoppingList, Status } from '../../types/types';
import saveShoppingList from './reducers/saveShoppingListAsyncReducer';

const initialState: ShoppingList = {
  _id: '',
  update: Status.initial,
  title: '',
  list: [],
  status: '',
  date: new Date().toISOString(),
  __v: 0,
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    addItemToList: (state, action: PayloadAction<ShoppingItemCategory>) => {
      const category = state.list.find((category) => category._id === action.payload._id);
      if (category) {
        const item = category.items.find((item) => item._id === action.payload.items[0]._id);
        if (!item) category.items.push(action.payload.items[0]);
        return state;
      }
      state.list.push(action.payload);
      return state;
    },
    removeItemFromList: (state, action: PayloadAction<ShoppingItemCategory>) => {
      const category = state.list.find((category) => category._id === action.payload._id);
      if (category) {
        const item = category.items.find((item) => item._id === action.payload.items[0]._id);
        if (item)
          category.items = category.items.filter(
            (item) => item._id !== action.payload.items[0]._id
          );
        return state;
      }
      state.list.push(action.payload);
      return state;
    },
    checkoutItemFromList: (state, action: PayloadAction<ShoppingItemCategory>) => {
      const category = state.list.find((category) => category._id === action.payload._id);
      if (category) {
        const item = category.items.find((item) => item._id === action.payload.items[0]._id);
        if (item) item.complete = !item.complete;
      }
      return state;
    },
    increaseItemCount: (state, action: PayloadAction<ShoppingItemCategory>) => {
      const category = state.list.find((category) => category._id === action.payload._id);
      if (category) {
        const item = category.items.find((item) => item._id === action.payload.items[0]._id);
        if (item) item.count = ++item.count;
      }
      return state;
    },
    decreaseItemCount: (state, action: PayloadAction<ShoppingItemCategory>) => {
      const category = state.list.find((category) => category._id === action.payload._id);
      if (category) {
        const item = category.items.find((item) => item._id === action.payload.items[0]._id);
        if (item && item.count > 1) item.count = --item.count;
      }
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveShoppingList.pending, (state) => {
        return state;
      })
      .addCase(saveShoppingList.fulfilled, (state, action: PayloadAction<ShoppingList>) => {
        return (state = action.payload);
      })
      .addCase(saveShoppingList.rejected, (state) => {
        return (state = { ...state });
      });
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
