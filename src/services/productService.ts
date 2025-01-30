import { axiosClient } from './api/axiosClient';
import { ENDPOINTS } from './api/endpoints';
import type { APIResponse, PaginatedResponse, Product } from './api/types';

export const ProductService = {
  getProducts: async (
    params?: Record<string, unknown>
  ): Promise<APIResponse<PaginatedResponse<Product>>> => {
    return axiosClient.get(ENDPOINTS.PRODUCTS.LIST, { params });
  },

  getProductById: async (id: string): Promise<APIResponse<Product>> => {
    return axiosClient.get(ENDPOINTS.PRODUCTS.DETAIL(id));
  },

  searchProducts: async (
    query: string
  ): Promise<APIResponse<Product[]>> => {
    return axiosClient.get(ENDPOINTS.PRODUCTS.SEARCH, {
      params: { q: query },
    });
  },
};