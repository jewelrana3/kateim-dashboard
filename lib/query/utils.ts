import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from './keys';

/**
 * Query utility functions
 */

/**
 * Invalidate all dashboard queries
 */
export const useInvalidateDashboard = () => {
    const queryClient = useQueryClient();

    return () => {
        queryClient.invalidateQueries({
            queryKey: queryKeys.dashboard.all
        });
    };
};

/**
 * Invalidate all auth queries
 */
export const useInvalidateAuth = () => {
    const queryClient = useQueryClient();

    return () => {
        queryClient.invalidateQueries({
            queryKey: queryKeys.auth.all
        });
    };
};

/**
 * Clear all queries (useful for logout)
 */
export const useClearAllQueries = () => {
    const queryClient = useQueryClient();

    return () => {
        queryClient.clear();
    };
};

/**
 * Prefetch query helper
 */
export const usePrefetchQuery = () => {
    const queryClient = useQueryClient();

    return async <T>(
        queryKey: readonly unknown[],
        queryFn: () => Promise<T>
    ) => {
        await queryClient.prefetchQuery({
            queryKey,
            queryFn,
        });
    };
};
