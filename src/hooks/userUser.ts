import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

function useCustomQuery<T>(url: string) {
  return useQuery<T>({
    queryKey: [url],
    queryFn: async () => {
      const response = await axios.get<T>(url);
      return response.data;
    },
    retry: 3,
  });
}

export default useCustomQuery