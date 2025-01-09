import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import shoppingListReducer from "./shoppingList/shoppingListSlice";
import historyReducer from "./history/historySlice";
import historyItemsReducer from "./historyItems/historyItemsSlice";
import statsReducer from "./stats/statsSlice";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    shoppingList: shoppingListReducer,
    history: historyReducer,
    historyItems: historyItemsReducer,
    stats: statsReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
