import { User } from "@models/User";

export interface LoginRequestData {
  username: string;
  password: string;
}

export default interface LoginResponse {
  data: User;
}
