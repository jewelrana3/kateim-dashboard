import { useMutation, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../keys";
import { pageContentApi } from "../../apis/pageContent";
import { queryClient } from "../../client";
import { toast } from "react-toastify";

export const useGetSection = (slug: string) => {
  return useQuery({
    queryKey: queryKeys.dashboard.section(slug),
    queryFn: async () => {
      const data = await pageContentApi.getSection(slug);
      return data.data || [];
    },
    staleTime: 3 * 60 * 1000, // 3 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useUpdateSection = (slug: string) => {
  return useMutation({
    mutationKey: queryKeys.dashboard.section(slug),
    mutationFn: async (params: { id: string; data: FormData }) => {
      const data = await pageContentApi.updatePageContent(
        params.id,
        params.data,
      );
      return data.data || {};
    },
    onSuccess: (data) => {
      toast.success(data.message || "Page content updated successfully");
      // Invalidate and refetch categories query
      queryClient.invalidateQueries({
        queryKey: queryKeys.dashboard.section(slug),
      });
    },
    onError: (error) => {
      console.error("Page content update error:", error);
    },
  });
};

export const useCreateSection = (slug: string) => {
  return useMutation({
    mutationKey: queryKeys.dashboard.section(slug),
    mutationFn: async (params: { data: FormData }) => {
      const data = await pageContentApi.createPageContent(params.data);
      return data.data || {};
    },
    onSuccess: (data) => {
      toast.success(data.message || "Page content created successfully");
      // Invalidate and refetch categories query
      queryClient.invalidateQueries({
        queryKey: queryKeys.dashboard.section(slug),
      });
    },
    onError: (error) => {
      console.error("Page content creation error:", error);
    },
  });
};

export const useGetClientReview = (slug: string) => {
  return useQuery({
    queryKey: queryKeys.dashboard.clientReview(slug),
    queryFn: async () => {
      const data = await pageContentApi.getClientReview();
      return data.data || [];
    },
    staleTime: 3 * 60 * 1000, // 3 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useCreateClientReview = (slug: string) => {
  console.log("click");
  return useMutation({
    mutationKey: queryKeys.dashboard.clientReview(slug),
    mutationFn: async (params: { data: FormData }) => {
      const data = await pageContentApi.createClientReview(params.data);
      console.log("data", data);
      return data.data || {};
    },
    onSuccess: (data) => {
      console.log("data", data);
      toast.success(data.message || "Client review created successfully");
      // Invalidate and refetch categories query
      queryClient.invalidateQueries({
        queryKey: queryKeys.dashboard.clientReview(slug),
      });
    },
    onError: (error) => {
      console.error("Client review creation error:", error);
    },
  });
};

export const useUpdateClientReview = (slug: string) => {
  return useMutation({
    mutationKey: queryKeys.dashboard.clientReview(slug),
    mutationFn: async (params: { id: string; data: FormData }) => {
      const data = await pageContentApi.updateClientReview(
        params.id,
        params.data,
      );
      return data.data || {};
    },
    onSuccess: (data) => {
      toast.success(data.message || "Client review updated successfully");
      // Invalidate and refetch categories query
      queryClient.invalidateQueries({
        queryKey: queryKeys.dashboard.clientReview(slug),
      });
    },
    onError: (error) => {
      console.error("Client review update error:", error);
    },
  });
};
