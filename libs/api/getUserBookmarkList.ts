import fetchClientTokenApi from "./fetchClientTokenApi";

const url = "/api/bookmark/";

const getUserBookmarkList = async (memberId: number) => {
  const api = fetchClientTokenApi();
  if (!memberId) return false;
  const urlQuery = `${url}/${memberId}`;
  const response = await api.get(urlQuery);

  return response.data;
};
export default getUserBookmarkList;
