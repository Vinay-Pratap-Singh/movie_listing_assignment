"use client";

import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true,
});

// interceptor for adding token to the header
axiosInstance.interceptors.request.use(
  function (config) {
    const token = process.env.API_TOKEN || "";
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
