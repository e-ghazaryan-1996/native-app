import { API_URL } from "@/config/api";
import axios from "axios";
import { getAccessToken, removeAccessToken } from "./auth/helper";
import { errorCatch } from "./error";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  const accessToken = await getAccessToken();

  if (config.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

axiosInstance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response.status === 401 ||
        errorCatch(error) === "jwt expired" ||
        errorCatch(error) === "jwt must be provided") &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        return axiosInstance.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === "jwt expired") await removeAccessToken();
      }
    }

    throw error;
  }
);

export default axiosInstance;
