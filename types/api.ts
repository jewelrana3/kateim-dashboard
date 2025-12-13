/**
 * Generic API Response Types
 */
export interface ApiResponse<T = any> {
  statusCode: number;
  status: number;
  message: string;
  data?: T;
}

/**
 * API Error Response
 */
export interface ApiError {
  statusCode: number;
  status: number;
  message: string;
  errors?: Record<string, string[]>;
}

/**
 * Paginated Response
 */
export interface PaginatedResponse<T> {
  meta?: {
    page:number;
    limit:number;
    total:number;
    totalPages:number;
  };
  data: T[];
}

/**
 * Request Configuration Options
 */
export interface ApiRequestConfig {
  showErrorToast?: boolean;
  showSuccessToast?: boolean;
  successMessage?: string;
  retryOnFailure?: boolean;
  maxRetries?: number;
}
