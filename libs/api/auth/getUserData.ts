import fetchClientTokenApi from "../fetchClientTokenApi";

const getUserData = async () => {
  const axiosInstance = fetchClientTokenApi();
  const url = "/api/member";

  const response = await axiosInstance.get(url);
  return response;
};
export default getUserData;
