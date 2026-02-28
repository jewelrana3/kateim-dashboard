import axios from "axios";
import {
  getValidToken,
  setAccessToken,
  redirectToLogin,
  clearAuthData,
} from "@/lib/api-utils";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

let requestIdCounter = 0;

api.interceptors.request.use(
  (config) => {
    config.headers["X-Request-ID"] = `req_${Date.now()}_${++requestIdCounter}`;

    const token = getValidToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Don't set Content-Type for FormData - let the browser set it with proper boundary
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }

    if (process.env.NODE_ENV === "development") {
      console.log(
        `[API Request] ${config.method?.toUpperCase()} ${config.url}`,
        {
          requestId: config.headers["X-Request-ID"],
          params: config.params,
          data: config.data,
        },
      );
    }

    return config;
  },
  (error) => {
    console.error("[API Request Error]", error);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    if (response.data?.data?.accessToken) {
      setAccessToken(response.data.data.accessToken);
    }

    if (process.env.NODE_ENV === "development") {
      console.log(
        `[API Response] ${response.config.method?.toUpperCase()} ${response.config.url}`,
        {
          requestId: response.config.headers["X-Request-ID"],
          status: response.status,
          data: response.data,
        },
      );
    }

    return response;
  },
  (error) => {
    if (process.env.NODE_ENV === "development") {
      console.error(
        `[API Error] ${error.config?.method?.toUpperCase()} ${error.config?.url}`,
        {
          requestId: error.config?.headers?.["X-Request-ID"],
          status: error.response?.status,
          message: error.response?.data?.message,
          error: error.response?.data,
        },
      );
    }

    if (error.response?.status === 401) {
      clearAuthData();

      if (typeof window !== "undefined") {
        const currentPath = window.location.pathname;
        const authPaths = [
          "/login",
          "/forgot-password",
          "/verify-otp",
          "/new-password",
        ];

        if (!authPaths.includes(currentPath)) {
          redirectToLogin();
        }
      }
    }

    if (error.response?.status === 403) {
      console.warn("Access forbidden:", error.response.data?.message);
    }

    return Promise.reject(error);
  },
);
