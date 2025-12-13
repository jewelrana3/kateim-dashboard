import { ISignInRequest } from "@/types/auth";
import { api } from "@/lib/api";

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


export const AuthApis = {
    login,
    verifyAccount,
    forgetPassword,
    resetPassword,
}