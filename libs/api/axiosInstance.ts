import axios from "axios";
import postRefresh from "./auth/postRefresh";

const axiosInstance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
export default axiosInstance;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async function refresh(error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      console.log("만료된 Access Token 입니다.");
      originalRequest._retry = true;
      const response = await postRefresh();
      if (response?.status === 200) {
        const accessToken = response.data["access-token"];
        axios.defaults.headers.common.Authorization = accessToken;
        axiosInstance.defaults.headers.common.Authorization = accessToken;
        return axiosInstance(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);
