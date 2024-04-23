/* eslint-disable */
import { User } from "@models/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
});

export const { changeFirstTime, saveUserData } = authSlice.actions;

export default authSlice.reducer;
