import axiosInstance from "./axiosInstance";

const deleteBookmark = async (id: number) => {
  await axiosInstance.delete(`/api/bookmark/${id}`);
};

export default deleteBookmark;
