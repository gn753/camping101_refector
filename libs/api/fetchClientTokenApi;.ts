import axiosInstance from "@libs/api/axiosInstance";
import axios from "axios";

const fetchClientTokenApi = () => {
  axiosInstance.defaults.headers.common.Authorization =
    axios.defaults.headers.common.Authorization;
  return axiosInstance;
};

export default fetchClientTokenApi;
