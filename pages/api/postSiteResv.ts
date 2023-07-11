import axiosInstance from "@libs/api/axiosInstance";

const postSiteResv = async (data: any) => {
  await axiosInstance.post("/api/reservation", data);
};

export default postSiteResv;
