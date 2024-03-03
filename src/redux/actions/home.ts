import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Platform } from "react-native";
import { User } from "@models/User";
import { post } from "src/services/apiService";

const LOGIN_ACTION_PREFIX = "/auth/login";
const SIGNUP_ACTION_PREFIX = "/auth/login";

// Create an object to hold the last request's cancellation token
let lastLoginRequest: { cancel: () => void } | null = null;

interface LoginState {
  email: string;
  password: string;
  deviceType?: Platform["OS"];
}

interface SignupState extends LoginState {
  name: string;
}

export const homeProducts = () => {
  new Promise((resolve, reject) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const signup: AsyncThunk<User, SignupState, {}> = createAsyncThunk(
  SIGNUP_ACTION_PREFIX,
  async (data: SignupState, thunkAPI) => {
    // Cancel the previous request, if any
    if (lastLoginRequest) {
      lastLoginRequest.cancel();
    }
    // Create a new cancellation token
    const source = axios.CancelToken.source();
    lastLoginRequest = source;

    try {
      const response = await post("/users/add", data);
      return response as User;
    } catch (error) {
      console.log("error", error);
      if (axios.isCancel(error)) {
        throw thunkAPI.rejectWithValue({ message: "Request was canceled" });
      } else {
        throw thunkAPI.rejectWithValue(error);
      }
    }
  }
);

export function setFirstTime() {
  // dispatch(changeFirstTime(true));
}

export function forgotPassword(data: object) {}
