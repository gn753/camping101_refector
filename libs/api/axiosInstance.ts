import { getAccessToken } from "@libs/services/authTokenService";
import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
export default axiosInstance;

axiosInstance.interceptors.request.use((config) => {
  if (typeof window !== undefined) {
    const token = getAccessToken();
    const HeaderToken = `Bearer ${token}`;
    config.headers.Authorization = HeaderToken;
    return config;
  } else return config;
});
