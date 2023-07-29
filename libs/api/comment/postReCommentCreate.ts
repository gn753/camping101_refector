import axiosInstance from "../axiosInstance";

const postReCommentCreate = async (postData: any) => {
  try {
    const response = await axiosInstance.post(
      "/api/camplog/recomment",
      postData,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default postReCommentCreate;
