import axiosInstance from "../axiosInstance";

const putComment = async (data: any) => {
  const { campLogId, content, commentId } = data;
  const response = await axiosInstance.put(
    `/api/camplog/comment/${commentId}`,
    {
      campLogId,
      content,
    },
  );
  return response;
};

export default putComment;
