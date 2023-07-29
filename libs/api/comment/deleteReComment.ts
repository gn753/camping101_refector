import axiosInstance from "../axiosInstance";

const deleteReComment = async (recommentId: number) => {
  const response = await axiosInstance.delete(
    `/api/camplog/recomment/${recommentId}`,
  );
  return response;
};

export default deleteReComment;
