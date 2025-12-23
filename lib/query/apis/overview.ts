import { api } from "@/lib/api";
import { ApiResponse } from "@/types/api";
import { IGeneralStats, IPlatformRevenue } from "@/types/others";
import { IUser } from "@/types/users";

 const getGeneralStats = async (): Promise<ApiResponse<IGeneralStats>> => {   
    const res = await api.get('/dashboard/stats');
    return res.data;
}

 const getPlatformRevenue = async (params = {}): Promise<ApiResponse<IPlatformRevenue[]>> => {
    const res = await api.get('/dashboard/monthly-revenue', { params });
    return res.data;
}

 const getTotalUsers = async (params = {}): Promise<ApiResponse<IUser[]>> => {
    const res = await api.get('/dashboard/users', { params });
    return res.data;
}

const getMonthlyUserCounts = async (params = {}): Promise<ApiResponse<{
    employers: string;
    workers: number;
}[]>> => {
    const res = await api.get('/dashboard/monthly-user-counts', { params });
    return res.data;
}

 const getMonthlySubscriptions = async (params = {}): Promise<ApiResponse<IPlatformRevenue[]>> => {
    const res = await api.get('/dashboard/monthly-subscriptions', { params });
    return res.data;
}


 export const OverviewApis = {
    getGeneralStats,
    getPlatformRevenue,
    getTotalUsers,
    getMonthlyUserCounts,
    getMonthlySubscriptions
 }
