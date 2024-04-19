import { User } from "@models/User";

export interface LoginRequestData {
    username: string;
    password: string;
  }

  export interface LoginResponse {
    data: User;
  }
