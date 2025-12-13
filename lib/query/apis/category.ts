import { api } from "@/lib/api";
import { ApiResponse } from "@/types/api";
import { ICategory, ICreateCategory } from "@/types/others";

const getCategories = async (): Promise<ApiResponse<ICategory[]>> => {
    const res = await api.get("/category");
    return res.data;
}

const createCategory = async (category: FormData): Promise<ApiResponse<ICategory>> => {
    const res = await api.post("/category", category);
    return res.data;
}

const updateCategory = async (id: string, category: FormData): Promise<ApiResponse<ICategory>> => {
    const res = await api.patch(`/category/${id}`, category);
    return res.data;
}

const deleteCategory = async (id: string): Promise<ApiResponse<ICreateCategory>> => {
    const res = await api.delete(`/category/${id}`);
    return res.data;
}

export const CategoryApis = {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
}