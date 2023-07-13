import axiosInstance from "./axiosInstance";
import { IsGetResvList } from "./getResvListType";

const getResvList = async (userId: number): Promise<IsGetResvList[]> => {
  const response = await axiosInstance.get(
    `/api/reservation/customer/${userId}`,
  );
  return response.data;
};

export default getResvList;
