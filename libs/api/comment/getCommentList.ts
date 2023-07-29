import axiosInstance from "@libs/api/axiosInstance";

const url = "/api/camplog/comment";

const getCommentList = async (campLogId: number | string) => {
  const response = await axiosInstance.get(url, {
    params: {
      campLogId,
    },
  });
  return response;
};

export default getCommentList;
