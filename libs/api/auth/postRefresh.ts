import axiosInstance from "../axiosInstance";

export const postRefresh = async (data: any) => {
  try {
    const response = await axiosInstance.post("/api/signin/refresh", data);
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("API 호출 중 오류가 발생했습니다.");
  }
};
