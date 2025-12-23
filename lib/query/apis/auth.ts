import { ISignInRequest } from "@/types/auth";
import { api } from "@/lib/api";
import { IUser } from "@/types/users";

const login = async (data: ISignInRequest) => {
    const res = await api.post('/auth/admin-login', data);
    return res.data;
}

const verifyAccount = async (token: string) => {
    const res = await api.post('/auth/verify-account');
    return res.data;
}

const forgetPassword = async (email: string) => {
    const res = await api.post('/auth/forget-password', { email });
    return res.data;
}

const resetPassword = async (token: string, data: { password: string, confirmPassword: string }) => {
    const res = await api.post('/auth/reset-password', data, { headers: { 'Authorization': `${token}` } });
    return res.data;
}


const getProfile = async () => {
    const res = await api.get('/user/profile')
    return res.data
}

const updateProfile = async ({ data }: { data: Partial<IUser> }) => {
    console.log(data)
    const res = await api.patch('/user/profile', data)
    return res.data
}

const uploadImage = async ({ data }: { data: FormData }) => {
    const res = await api.post('/user/upload-images', data)
    return res.data
}

const changePassword = async ({ data }: { data: { currentPassword: string, newPassword: string, confirmPassword: string } }) => {
    const res = await api.post('/auth/change-password', data)
    return res.data
}

export const AuthApis = {
    login,
    verifyAccount,
    forgetPassword,
    resetPassword,
    getProfile,
    updateProfile,
    uploadImage,
    changePassword
}