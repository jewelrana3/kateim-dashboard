import { api } from "@/lib/api";
import { IClientreview, IFaq, IPublic } from "@/types/others";

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
};
const createFaq = async (data: IFaq) => {
  const res = await api.post(`/public/faq`, data);
  return res.data;
};

const updateFaq = async (id: string, data: IFaq) => {
  const res = await api.patch(`/public/faq/${id}`, data);
  return res.data;
};

const deleteFaq = async (id: string) => {
  const res = await api.delete(`/public/faq/${id}`);
  return res.data;
};

const getSupportMessage = async () => {
  const res = await api.get(`/public/contact/all`);
  return res.data;
};

const updateSupportMessage = async (id: string, data: any) => {
  const res = await api.post(`/public/contact/reply/${id}`, data);
  return res.data;
};

const deleteSupportMessage = async (id: string) => {
  const res = await api.delete(`/public/contact/${id}`);
  return res.data;
};


export const publicApi = {
  getPublicData,
  updateOrCreatePublicData,
  getFaq,
  createFaq,
  updateFaq,
  deleteFaq,
  getSupportMessage,
  updateSupportMessage,
  deleteSupportMessage,
};
