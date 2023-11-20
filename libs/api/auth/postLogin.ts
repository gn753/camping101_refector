import { IsAxiosErrorType } from "@libs/api/axiosError.interface";
import { isAxiosError } from "axios";
import axiosInstance from "../axiosInstance";

const postLogin = async (data: any) => {
  try {
    const response = await axiosInstance.post("/api/signin/mail", data);
    return response;
  } catch (error) {
    if (isAxiosError<IsAxiosErrorType>(error)) {
      const status = error.response?.data.status;
      const message = error.response?.data.error_message;
      if (status === 500) {
        alert(`${status} : ${message}`);
      }
    }
  }
};

export default postLogin;
