import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import type { APIError } from '../services/api/types';

export const useApiQuery = <T>(
  key: string[],
  fetchFn: () => Promise<T>,
  options?: UseQueryOptions<T, APIError>
) => {
  return useQuery<T, APIError>({
    queryKey: key,
    queryFn: fetchFn,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: (failureCount, error) => {
      if (error.code === 401) return false; // Don't retry auth errors
      return failureCount < 2;
    },
    ...options,
  });
};