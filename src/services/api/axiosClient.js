import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import { APIError, APIResponse } from './types';

const createAxiosClient = (baseURL: string): AxiosInstance => {
  const client = axios.create({
    baseURL,
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor
  client.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor
  client.interceptors.response.use(
    (response) => response.data,
    (error: AxiosError<APIError>) => {
      const formattedError: APIError = {
        message: error.response?.data?.message || 'Network Error',
        code: error.response?.status || 500,
        data: error.response?.data,
      };

      // Handle specific status codes
      if (formattedError.code === 401) {
        window.location.href = '/login';
      }

      return Promise.reject(formattedError);
    }
  );

  return client;
};

// Initialize with your base URL
export const axiosClient = createAxiosClient(import.meta.env.VITE_API_BASE_URL);