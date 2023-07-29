import axiosInstance from "./axiosInstance";
import { IsPostBookmark } from "./postBookmarkType";

const url = "/api/bookmark";

const postBookmarkCreate = async (postData: IsPostBookmark) => {
  const response = await axiosInstance.post(url, postData);
  return response;
};

export default postBookmarkCreate;
