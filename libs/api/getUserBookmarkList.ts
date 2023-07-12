import axiosInstance from "./axiosInstance";

const url = "/api/bookmark/";

const getUserBookmarkList = async (memberId: number) => {
  if (!memberId) return false;
  const urlQuery = `${url}/${memberId}`;
  const response = await axiosInstance.get(urlQuery);

  return response.data;
};
export default getUserBookmarkList;
