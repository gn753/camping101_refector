import axiosInstance from "../axiosInstance";

const putReComment = async (data: any) => {
  const { campLogId, content, reCommentId } = data;
  const response = await axiosInstance.put(
    `/api/camplog/recomment/${reCommentId}`,
    {
      campLogId,
      content,
    },
  );
  return response;
};

export default putReComment;
