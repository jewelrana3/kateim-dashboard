import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { clearAuthData, isAuthenticated } from '@/lib/api-utils';
import { queryKeys } from '@/lib/query/keys';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { AuthApis } from '../apis/auth';


export const useAuthStatus = () => {
    return useQuery({
        queryKey: queryKeys.auth.status(),
        queryFn: () => {
            return isAuthenticated();
        },
        staleTime: 1 * 60 * 1000, // 1 minute
        gcTime: 5 * 60 * 1000, // 5 minutes
        refetchOnMount: true,
        refetchOnWindowFocus: true,
    });
};



export const useLogin = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ email, password }: { email: string; password: string }) => {
            return await AuthApis.login({ email, password });
        },

        onSuccess: (data) => {
            // Show success message
            toast.success(data.message || 'Login successful!');

            // Invalidate auth queries to refetch user data
            queryClient.invalidateQueries({
                queryKey: queryKeys.auth.all
            });

            // Check for redirect URL
            const redirectUrl = typeof window !== 'undefined'
                ? sessionStorage.getItem('redirectAfterLogin')
                : null;

            if (redirectUrl) {
                sessionStorage.removeItem('redirectAfterLogin');
                router.push(redirectUrl);
            } else {
                router.push('/');
            }
        },

        onError: (error: any) => {
            // Error handling is done by apiRequest utility
            console.error('Login failed:', error);
        },
    });
};


export const useLogout = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async () => {
            // Clear authentication data
            clearAuthData();
            return Promise.resolve();
        },

        onSuccess: () => {
            // Clear all cached queries
            queryClient.clear();

            // Show success message
            toast.success('Logged out successfully!');

            // Redirect to login
            router.push('/login');
        },

        onError: (error) => {
            console.error('Logout error:', error);
            toast.error('Logout failed');
        },
    });
};


export const useVerifyAccount = () => {
    return useMutation({
        mutationFn: async ({ email, otp }: { email: string; otp: string }) => {
            // return await AuthApis.verifyAccount(email, otp);
        },

        onSuccess: (data) => {
            // Success toast is handled by apiRequest
            console.log('Account verified:', data);
        },

        onError: (error) => {
            // Error handling is done by apiRequest utility
            console.error('Verification failed:', error);
        },
    });
};

