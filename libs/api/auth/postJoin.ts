import axiosInstance from "@libs/api/axiosInstance";

const postJoin = async (formData: FormData) => {
  const url = "/api/signup/mail";

  const response = await axiosInstance.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};

export default postJoin;
