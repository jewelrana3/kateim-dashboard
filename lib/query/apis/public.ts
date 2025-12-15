import { api } from "@/lib/api";
import { IFaq, IPublic } from "@/types/others";

const getPublicData = async (type: string) => {
    const res = await api.get(`/public/${type}`);
  return res.data;
};

const updateOrCreatePublicData = async (data: IPublic) => {
    const res = await api.post(`/public/`, data);
  return res.data;
};

const getFaq = async () => {
    const res = await api.get(`/public/faq/all`);
    return res.data;
}
const createFaq = async (data: IFaq) => {
    const res = await api.post(`/public/faq`, data);
    return res.data;
}

const updateFaq = async (id: string, data: IFaq) => {
    const res = await api.patch(`/public/faq/${id}`, data);
    return res.data;
}

const deleteFaq = async (id: string) => {
    const res = await api.delete(`/public/faq/${id}`);
    return res.data;
}

export const publicApi = {
    getPublicData,
    updateOrCreatePublicData,
    getFaq,
    createFaq,
    updateFaq,
    deleteFaq,
}