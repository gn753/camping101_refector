import axiosInstance from "@libs/api/axiosInstance";

const getCamps = async () => {
  const url = `${process.env.BASE_URL}/camp`;
  try {
    const response = await axiosInstance.get(url);
    return response.data.content;
  } catch (error) {
    console.error(error);
    throw new Error("API 호출 중 오류가 발생했습니다.");
  }
};

export default getCamps;
