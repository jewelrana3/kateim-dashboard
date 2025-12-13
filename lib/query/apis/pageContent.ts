import { api } from "@/lib/api";
import { ISection } from "@/types/others";

const getPageContents = async(slug:string) => {
  const res = await api.get(`/content/section/slug/${slug}`);
  return res.data;
}

const createPageContent = async(data:ISection) => {
  const res = await api.post(`/content/section`, data);
  return res.data;
}


const updatePageContent = async(data:ISection) => {
  const res = await api.put(`/content/section`, data);
  return res.data;
}

export const pageContentApi = {
    getPageContents,
    createPageContent,
    updatePageContent,
}