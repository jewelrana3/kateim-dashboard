import { useMutation, useQuery } from "@tanstack/react-query";

import { CategoryApis } from "../../apis/category";
import { ICategory, ICreateCategory } from "@/types/others";
import { queryClient } from "../../client";
import { queryKeys } from "../../keys";

export const useGetCategories = () => {
    return useQuery({
        queryKey: queryKeys.dashboard.categories(),
        queryFn: async () => {
            const data = await CategoryApis.getCategories();
            return data.data || [];
        },
        staleTime: 3 * 60 * 1000, // 3 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
    })
}

export const useCreateCategory = () => {
    return useMutation({
        mutationKey: queryKeys.dashboard.categories(),
        mutationFn: async (category: FormData) => {
            const data = await CategoryApis.createCategory(category);
            return data.data || {};
        },
        onSuccess: () => {
          queryClient.invalidateQueries({ 
            queryKey: queryKeys.dashboard.categories() 
          });
        },
        onError: (error) => {
          console.error("Category creation error:", error);
        }
    })
}

export const useUpdateCategory = () => {
    return useMutation({
        mutationKey: queryKeys.dashboard.categories(),
        mutationFn: async (params: { id: string; category: FormData }) => {
          const { id, category } = params;
          const data = await CategoryApis.updateCategory(id, category);
          return data.data || {};
        },
        onSuccess: () => {
          // Invalidate and refetch categories query
          queryClient.invalidateQueries({ 
            queryKey: queryKeys.dashboard.categories() 
          });
        },
        onError: (error) => {
          console.error("Category update error:", error);
        }
      });
}

export const useDeleteCategory = () => {
    return useMutation({
        mutationKey: queryKeys.dashboard.categories(),
        mutationFn: async ({_id}: {_id: string}) => {
            const data = await CategoryApis.deleteCategory(_id);
            return data.data || {};
        },
        onSuccess: () => {
          // Invalidate and refetch categories query
          queryClient.invalidateQueries({ 
            queryKey: queryKeys.dashboard.categories() 
          });
        },
    })
}