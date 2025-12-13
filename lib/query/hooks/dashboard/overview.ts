import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../keys";

import { OverviewApis } from "../../apis/overview";

export const useGeneralStats = () => {
    return useQuery({
        queryKey: queryKeys.dashboard.stats(),
        queryFn: async () => {
            const data = await OverviewApis.getGeneralStats();
            return data.data;
        
        },
        staleTime: 2 * 60 * 1000, // 2 minutes - stats don't change frequently
        gcTime: 10 * 60 * 1000, // 10 minutes
        refetchOnMount: true,
        refetchOnWindowFocus: false,
    });
};



export const usePlatformRevenue = (params = {}) => {
    return useQuery({
        queryKey: queryKeys.dashboard.revenue(params),
        queryFn: async () => {
            const data = await OverviewApis.getPlatformRevenue(params);
            return data.data;
        },
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 15 * 60 * 1000, // 15 minutes
        // enabled: !!params.year, // Only fetch when year is provided
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
};


export const useTotalUsers = (params = {}) => {
    return useQuery({
        queryKey: queryKeys.dashboard.userStats(params),
        queryFn: async () => {
            const data = await OverviewApis.getMonthlyUserCounts(params);
            return data.data;
        },
        staleTime: 3 * 60 * 1000, // 3 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
        // enabled: !!params.year, // Only fetch when year is provided
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
};