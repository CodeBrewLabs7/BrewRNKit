import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { getItem } from "src/services/apiService";
import { APIS } from "src/services/routes";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com", // Specify your base URL here
});

axiosInstance.interceptors.request.use((config) => {
  // Create a new object based on config
  const modifiedConfig = { ...config };

  // Add the Authorization header if a token is present
  const userData = getItem("userData");
  if (userData) {
    modifiedConfig.headers.Authorization = `Bearer ${userData.token}`;
  }

  return modifiedConfig;
});

export const useCustomQuery = <T>(url: APIS, query = "") =>
  // eslint-disable-next-line
  useQuery<T>({
    queryKey: [url + query],
    queryFn: async () => {
      const response = await axiosInstance.get<T>(url + query);
      return response.data;
    },
    retry: 3,
  });

interface MutationData {}

export const useCustomPost = <TData, TError, TVariables = MutationData, TContext = unknown>(
  url: APIS,
  options?: UseMutationOptions<AxiosResponse<TData>, TError, TVariables, TContext>,
): UseMutationResult<AxiosResponse<TData>, TError, TVariables, TContext> => {
  const result = useMutation<AxiosResponse<TData>, TError, TVariables, TContext>({
    ...options,
    mutationFn: (variables: TVariables) => axiosInstance.post<TData>(url, variables),
  });
  return result;
};
