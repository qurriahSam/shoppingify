import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../../types/types";
import registerUser from "./reducers/registerUserAsyncReducer";

interface UserAuth {
  status: Status;
  user: User;
  error: string | null;
}

interface User {
  _id: string | null;
  email: string | null;
}

const initialState: UserAuth = {
  status: Status.initial,
  user: { _id: null, email: null },
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUserFromLocalStorage(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.status = Status.updated;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        return (state = { ...state, status: Status.loading });
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        return (state = {
          ...state,
          status: Status.updated,
          user: action.payload,
        });
      })
      .addCase(registerUser.rejected, (state) => {
        return (state = { ...state, status: Status.failed });
      });
  },
});

export const { loadUserFromLocalStorage } = authSlice.actions;
export default authSlice.reducer;
