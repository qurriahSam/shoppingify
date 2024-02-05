import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './category/categorySlice';
import shoppingListReducer from './shoppingList/shoppingListSlice';

export const store = configureStore({
  reducer: { category: categoryReducer, shoppingList: shoppingListReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
