/* eslint-disable */
import { login } from "@redux/actions/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@models/User";
import { setItem } from "src/services/apiService";

export interface AuthState {
  userData: User;
  isFirstTime: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  userData: {
    id: 0,
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    image: "",
    token: "",
  },
  isFirstTime: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUserData: (state, action: PayloadAction<User>) => {
      state.userData = action.payload;
    },
    changeFirstTime: (state, action: PayloadAction<boolean>) => {
      state.isFirstTime = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      setItem("userData", action.payload);
      state.userData = action.payload;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { changeFirstTime, saveUserData } = authSlice.actions;

export default authSlice.reducer;
