import axios, { AxiosInstance } from "axios";
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

// interceptor for adding token to the header
axiosInstance.interceptors.request.use(
  function (config) {
    const token = process.env.NEXT_PUBLIC_API_TOKEN || "";
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
