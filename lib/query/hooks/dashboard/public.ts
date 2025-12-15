import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "../../keys";
import { publicApi } from "../../apis/public";
import { IContact, IFaq, IPublic } from "@/types/others";
import { toast } from "react-toastify";

export const useGetPublicData = (type: string) => {
  return useQuery({
    queryKey: queryKeys.dashboard.public(type),
    queryFn: async () => {
      const data = await publicApi.getPublicData(type);
      return data.data || [];
    },
    staleTime: 3 * 60 * 1000, // 3 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useUpdateOrCreatePublicData = (type: string) => {
  return useMutation({
    mutationKey: queryKeys.dashboard.public(type),
    mutationFn: async (data: IPublic) => {
      return await publicApi.updateOrCreatePublicData(data);
    },
    onSuccess: (data) => {
      toast.success(data.message || `Successfully updated ${type}`);
    },
  });
};

export const useGetFaq = () => {
  return useQuery({
    queryKey: queryKeys.dashboard.faq(),
    queryFn: async () => {
      const data = await publicApi.getFaq();
      return data.data || [];
    },
    staleTime: 3 * 60 * 1000, // 3 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useCreateFaq = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: queryKeys.dashboard.faq(),
    mutationFn: async (data: IFaq) => {
      return await publicApi.createFaq(data);
    },
    onSuccess: (data) => {
      toast.success(data.message || `Successfully created FAQ`);
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.faq() });
    },
  });
};

export const useUpdateFaq = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: queryKeys.dashboard.faq(),
    mutationFn: async (data: IFaq) => {
      return await publicApi.updateFaq(id, data);
    },
    onSuccess: (data) => {
      toast.success(data.message || `Successfully updated FAQ`);
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.faq() });
    },
  });
};

export const useDeleteFaq = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: queryKeys.dashboard.faq(),
    mutationFn: async (id: string) => {
      return await publicApi.deleteFaq(id);
    },
    onSuccess: (data) => {
      toast.success(data.message || `Successfully deleted FAQ`);
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.faq() });
    },
    onError: (error) => {
      toast.error(error.message || `Failed to delete FAQ`);
    },
  });
};

export const useGetSupportMessage = () => {
  return useQuery({
    queryKey: queryKeys.dashboard.supportMessage(),
    queryFn: async () => {
      const data = await publicApi.getSupportMessage();
      return data.data || [];
    },
    staleTime: 3 * 60 * 1000, // 3 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useUpdateSupportMessage = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: queryKeys.dashboard.supportMessage(),
    mutationFn: async (data: Pick<IContact, "feedback">) => {
      return await publicApi.updateSupportMessage(id, data);
    },
    onSuccess: (res) => {
      const updatedMessage = res.data; // <--- updated message object

      toast.success(res.message || "Successfully updated support message");

      // Update the cache correctly
      queryClient.setQueryData<IContact[]>(
        queryKeys.dashboard.supportMessage(),
        (oldData) => {
          if (!oldData) return [];
          return oldData.map((msg) =>
            msg._id === id ? { ...msg, ...updatedMessage } : msg
          );
        }
      );
    },
  });
};

export const useDeleteSupportMessage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: queryKeys.dashboard.supportMessage(),
    mutationFn: async (id: string) => {
      return await publicApi.deleteSupportMessage(id);
    },
    onSuccess: (res) => {
      toast.success(res.message || "Successfully deleted support message");
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.supportMessage() });
    },
    onError: (error) => {
      toast.error(error.message || `Failed to delete support message`);
    },
  });
};
