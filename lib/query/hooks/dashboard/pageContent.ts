import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../keys";
import { pageContentApi } from "../../apis/pageContent";

export const useGetPageContent = (slug: string) => {
    return useQuery({
        queryKey: queryKeys.dashboard.pageContent(),
        queryFn: async () => {
            const data = await pageContentApi.getPageContents(slug);
            return data.data || [];
        },
        staleTime: 3 * 60 * 1000, // 3 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
    })
}
