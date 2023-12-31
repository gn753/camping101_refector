import fetchClientTokenApi from "./fetchClientTokenApi";
import { IsPostBookmark } from "./postBookmark.interface";

const url = "/api/bookmark";

const postBookmarkCreate = async (postData: IsPostBookmark) => {
  const api = fetchClientTokenApi();
  const response = await api.post(url, postData);
  return response;
};

export default postBookmarkCreate;
