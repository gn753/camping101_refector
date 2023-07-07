import {
  getRefreshToken,
  removeAccessAndRefresh,
} from "@libs/services/authTokenService";
import { isAxiosError } from "axios";
import axiosInstance from "../axiosInstance";

interface Error {
  status: number;
  error_message: string;
  reason_of_error: string;
}

const data: any = {};
const postRefresh = async () => {
  try {
    const response = await axiosInstance.post(
      "/api/signin/refresh",
      (data["refresh-token"] = `Bearer ${getRefreshToken()}`),
    );
    return response;
  } catch (error) {
    if (isAxiosError<Error>(error)) {
      const status = error.response?.data.status;
      const message = error.response?.data.error_message;
      if (status === 401) {
        removeAccessAndRefresh();
        console.log(`${status} : ${message}`);
        alert("로그인이 만료되었습니다. 다시 로그인해주세요");
        window.location.href = "/login";
      }
    }
  }
};
export default postRefresh;
