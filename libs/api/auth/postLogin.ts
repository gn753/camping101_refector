import axiosInstance from "../axiosInstance";

const postLogin = async (data: any) => {
  try {
    const response = await axiosInstance.post("/api/signin/mail", data);
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("API 호출 중 오류가 발생했습니다.");
  }
};

export default postLogin;
