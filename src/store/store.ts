import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './category/categorySlice';
import shoppingListReducer from './shoppingList/shoppingListSlice';
import historyReducer from './history/historySlice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    shoppingList: shoppingListReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
