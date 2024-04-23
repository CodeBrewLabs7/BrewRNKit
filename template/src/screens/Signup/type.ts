import { User } from "@models/User";

export interface SignupRequestData {
  name: string;
  email: string,
  password: string;
  username: string
}

export default interface SignupResponse {
  data: User;
}
