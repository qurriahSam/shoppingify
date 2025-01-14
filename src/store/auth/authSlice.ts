import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../../types/types";
import registerUser from "./reducers/registerUserAsyncReducer";

interface UserAuth {
  status: Status;
  user: { id: string | null; email: string | null };
  error: string | null;
}

const initialState: UserAuth = {
  status: Status.initial,
  user: { id: null, email: null },
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
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

export default authSlice.reducer;
