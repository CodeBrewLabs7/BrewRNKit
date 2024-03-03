import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getItem, storage } from "src/services/apiService";
import { APIS } from "src/services/routes";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com", // Specify your base URL here
});

axiosInstance.interceptors.request.use((config) => {
  // Add the Authorization header if a token is present
  const userData = getItem("userData");
  if (!!userData) {
    config.headers.Authorization = `Bearer ${userData.token}`;
  }
  return config;
});

function useCustomQuery<T>(url: APIS, query = "") {
  return useQuery<T>({
    queryKey: [url+query],
    queryFn: async () => {
      const response = await axiosInstance.get<T>(url + query);
      return response.data;
    },
    retry: 3,
  });
}

export default useCustomQuery;
