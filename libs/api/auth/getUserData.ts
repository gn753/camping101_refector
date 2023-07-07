import axiosInstance from "@libs/api/axiosInstance";

const getUserData = async (accessToken?:any) => {
  const url = "/api/member";
  axiosInstance.defaults.headers.common.Authorization = accessToken;
  const response = await axiosInstance.get(url);
  return response;
};
export default getUserData;
