import axiosInstance from "../axiosInstance";

const deleteComment = async (commentId: number) => {
  await axiosInstance.delete(`/api/camplog/comment/${commentId}`);
};

export default deleteComment;
