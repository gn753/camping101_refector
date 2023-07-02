import axiosInstance from "@libs/api/axiosInstance";

const getUserData = async () => {
  const url = "/api/member";

  const response = await axiosInstance.get(url);
  return response;
};
export default getUserData;
