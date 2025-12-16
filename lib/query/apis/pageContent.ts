import { api } from "@/lib/api";
import { ISection } from "@/types/others";

const getSection = async(slug:string) => {
  const res = await api.get(`/content/section/slug/${slug}`);
  return res.data;
}

const createPageContent = async(data:FormData) => {
  const res = await api.post(`/content/section`, data);
  return res.data;
}


const updatePageContent = async(id:string, data:FormData) => {
  const res = await api.patch(`/content/section/${id}`, data);
  return res.data;
}

const getClientReview = async () => {
  const res = await api.get(`/clientreview/`);
  return res.data;
};
const createClientReview = async (data: FormData) => {
  const res = await api.post(`/clientreview`, data);
  return res.data;
};

const updateClientReview = async (id: string, data: FormData) => {
  const res = await api.patch(`/clientreview/${id}`, data);
  return res.data;
};

export const pageContentApi = {
    getSection,
    createPageContent,
    updatePageContent,
    getClientReview,
    createClientReview,
    updateClientReview,
}