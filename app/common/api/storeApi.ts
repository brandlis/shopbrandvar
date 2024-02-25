import axios from "axios";

export const storeApi = axios.create({
  baseURL: "https://fakestoreapi.com",
});

storeApi.interceptors.response.use((response) => {
  if (response.status === 204) {
    return { ...response, data: "Successful update" };
  }
  return response;
});
