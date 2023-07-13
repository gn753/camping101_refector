import getUserData from "@libs/api/auth/getUserData";
import postRefresh from "@libs/api/auth/postRefresh";
import { IsAxiosErrorType } from "@libs/api/axiosErrorType";
import axiosInstance from "@libs/api/axiosInstance";
import { getRefreshToken } from "@libs/services/authTokenService";
import { authLoginAtom, authUserData } from "@libs/store/authStore";
import { isAxiosError } from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function useAuthRefreshUserData() {
  const [user, setUser] = useRecoilState(authUserData);
  const [accessToken, setAccessToken] = useRecoilState(authLoginAtom);

  useEffect(() => {
    if (typeof window !== undefined) {
      const refreshToken = getRefreshToken();
      const isCallRefrshApi = !accessToken && refreshToken;
      if (isCallRefrshApi) {
        postRefresh()
          .then((response: any) => {
            const accessToken = response.data["access-token"];
            setAccessToken(accessToken);
            delete axiosInstance.defaults.headers.common.Authorization;
            axiosInstance.defaults.headers.common.Authorization = accessToken;
            getUserData(accessToken).then((res) => setUser(res.data));
          })
          .catch((error) => {
            if (isAxiosError<IsAxiosErrorType>(error)) {
              const status = error.response?.data.status;
              const message = error.response?.data.error_message;
              if (status === 400) {
                alert(`${status} : ${message}`);
              }
            }
          });
      }
    }
  }, [accessToken, setAccessToken, setUser]);
  return { user, setUser };
}
