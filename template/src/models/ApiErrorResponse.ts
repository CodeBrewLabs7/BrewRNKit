import { AxiosError,AxiosResponse } from "axios"


type ResponseStatus = {
  data: {
    error: string,
    status: boolean
  }
}

  export interface ApiErrorResponse {
    status?: boolean;
    message?: string;
    error?: Error;
    response?: ResponseStatus;
  }
  
  export interface ExtendedApiErrorResponse extends ApiErrorResponse {
    axiosError?: AxiosError;
  }