import fetchClientTokenApi from "./fetchClientTokenApi;";
import { IsGetResvList } from "./getResvListType";

const getResvList = async (userId: number): Promise<IsGetResvList[]> => {
  const api = fetchClientTokenApi();
  const response = await api.get(`/api/reservation/customer/${userId}`);
  return response.data;
};

export default getResvList;
