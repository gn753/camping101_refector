import axiosInstance from "../axiosInstance";

interface CommentPostRequset {
  campLogId: string | string[] | undefined;
  content: string;
}

const url = "/api/camplog/comment";

const postCommentCreate = async (data: CommentPostRequset) => {
  const response = await axiosInstance.post(url, data);
  return response;
};

export default postCommentCreate;
