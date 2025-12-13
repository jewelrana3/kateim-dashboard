export interface ISignInRequest {
  email: string;
  password: string;
}



export type IAuthResponse = {
    statusCode: number
    status: number
    message: string
    data?: {
        role?: string
        token?: string
        accessToken?: string
        refreshToken?: string
    }
    
}

