import { IUserFilterableFields } from "@/types/users";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "../../keys";

import { UserApis } from "../../apis/user";
import { toast } from "react-toastify";

export const useGetAllUser = (params = {} as IUserFilterableFields) => {
    return useQuery({
        queryKey: queryKeys.dashboard.users(params),
        queryFn: async () => {
            const response = await UserApis.geAllUser(params);
            return {
                data: response.data || [],
                meta: response.meta
            };
        },
        staleTime: 3 * 60 * 1000, // 3 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
    })
}


export const useGetUserDetail = (id: string) => {
    return useQuery({
        queryKey: ["dashboard", "users", "detail", id],
        queryFn: async () => {
            const data = await UserApis.getUserDetail(id);
            return data.data;
        },
        staleTime: 3 * 60 * 1000, // 3 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
    })
}

export const useUpdateUserStatus = (id: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["dashboard", "users", "updateStatus", id],
        mutationFn: async (userId: string) => {
            const data = await UserApis.updateUserStatus(userId);
            return data.data;
        },
        onSuccess: () => {
            // Invalidate all user queries to refetch data
            queryClient.invalidateQueries({
                queryKey: ['dashboard', 'users']
            });
        },
    })
}

export const useToggleUserVerification = (id: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["dashboard", "users", "toggleVerification", id],
        mutationFn: async (userId: string) => {
            const data = await UserApis.toggleUserVerification(userId);
            return data;
        },
        onSuccess: (data) => {
            toast.success(data.message || 'User verification status updated!');
            // Invalidate all user queries to refetch data
            queryClient.invalidateQueries({
                queryKey: ['dashboard', 'users']
            });
        },
    })
}
