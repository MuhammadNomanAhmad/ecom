export interface APIError {
    message: string;
    code: number;
    data?: unknown;
  }
  
  export type APIResponse<T = unknown> = {
    data: T;
    success: boolean;
  };
  
  // Standard API response format
  export type PaginatedResponse<T> = {
    data: T[];
    total: number;
    page: number;
    limit: number;
  };