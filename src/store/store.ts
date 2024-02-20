import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './category/categorySlice';
import shoppingListReducer from './shoppingList/shoppingListSlice';
import historyReducer from './history/historySlice';
import historyItemsReducer from './historyItems/historyItemsSlice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    shoppingList: shoppingListReducer,
    history: historyReducer,
    historyItems: historyItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
