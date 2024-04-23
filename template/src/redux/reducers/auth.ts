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
  }
});

export const { changeFirstTime, saveUserData } = authSlice.actions;

export default authSlice.reducer;
