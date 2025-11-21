"use client";

import axios from "axios";
import { App_Urls } from "../../routes/App_Urls";

export const clientApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_ENDPOINT,
  withCredentials: true,
});

clientApi.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  } else {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
});

clientApi.interceptors.response.use(
  (res) => res,
  async (error) => {
    console.log("❌ Client API Error:");
    console.log("URL:", error.config?.url);
    console.log("Status:", error.response?.status);
    console.log("Message:", error.response?.data || error.message);

    const original = error.config;

    // 401 => try refresh token
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;

      console.log("⚠️ 401 detected → trying refresh token...");

      try {
        const refreshRes = await clientApi.post("/api/Auth/refresh");
        console.log("🔄 Refresh token response:", refreshRes.data);

        return clientApi(original);
      } catch (err) {
        console.log("❌ Refresh token failed:", err);

        if (typeof window !== "undefined") {
          window.location.href = App_Urls.SignIn;
        }

        return Promise.reject(err);
      }
    }

    // 403 => forbidden
    if (error.response?.status === 403) {
      console.log("⛔ 403 Forbidden — redirecting to sign-in.");

      if (typeof window !== "undefined") {
        window.location.href = App_Urls.SignIn;
      }

      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);
