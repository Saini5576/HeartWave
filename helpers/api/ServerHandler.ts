"use server";

import axios from "axios";
import https from "https";

export const serverApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_ENDPOINT,
  withCredentials: true,
  httpsAgent:
    process.env.NODE_ENV === "development"
      ? new https.Agent({ rejectUnauthorized: false })
      : undefined,
});

serverApi.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  } else {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
});

// ------------------------
// SERVER RESPONSE INTERCEPTOR WITH LOGS
// ------------------------
serverApi.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;

    console.log("❌ SERVER API ERROR");
    console.log("URL:", original?.url);
    console.log("Status:", error.response?.status);
    console.log("Message:", error.response?.data || error.message);

    // ---- 401 → Try Refresh Token ----
    if (error.response?.status === 401 && !original._retry) {
      console.log("⚠️ 401 detected on server → trying refresh token...");
      original._retry = true;

      try {
        const refreshRes = await serverApi.post("/api/Auth/refresh");
        console.log("🔄 Refresh token success:", refreshRes.data);

        return serverApi(original);
      } catch (err) {
        console.log("❌ Server refresh token failed:", err);
        return Promise.reject(err);
      }
    }

    // ---- Other errors ----
    console.log("⛔ Server request failed. No retry.");
    return Promise.reject(error);
  }
);
