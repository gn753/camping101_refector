import axiosInstance from "@libs/api/axiosInstance";

const getCampResvDetails = async (campId: any) => {
  const url = `${process.env.BASE_URL}/camp/detail/customer/${campId}`;
  const response = await axiosInstance.get(url);
  const { data } = response;
  return data;
};

export default getCampResvDetails;
