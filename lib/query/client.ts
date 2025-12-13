import { QueryClient } from '@tanstack/react-query';

/**
 * QueryClient Configuration
 * 
 * Centralized configuration for TanStack Query with optimized defaults
 */
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // Data remains fresh for 5 minutes
            staleTime: 5 * 60 * 1000,

            // Cache data for 10 minutes (formerly cacheTime)
            gcTime: 10 * 60 * 1000,

            // Retry failed requests once
            retry: 1,

            // Don't refetch on window focus (can be enabled per query)
            refetchOnWindowFocus: false,

            // Refetch when reconnecting to network
            refetchOnReconnect: true,

            // Refetch on mount if data is stale
            refetchOnMount: true,
        },
        mutations: {
            // Don't retry mutations by default
            retry: 0,
        },
    },
});

/**
 * Reset query client (useful for logout)
 */
export const resetQueryClient = () => {
    queryClient.clear();
};
