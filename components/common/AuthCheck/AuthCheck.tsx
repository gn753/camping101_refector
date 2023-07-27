import getUserData from "@libs/api/auth/getUserData";
import postRefresh from "@libs/api/auth/postRefresh";
import { IsAxiosErrorType } from "@libs/api/axiosErrorType";
import axiosInstance from "@libs/api/axiosInstance";
import { getRefreshToken } from "@libs/services/authTokenService";
import { authLoginAtom, authUserData } from "@libs/store/authStore";
import { isAxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function AuthCheck() {
  const [user, setUser] = useRecoilState(authUserData);
  const [accessToken, setAccessToken] = useRecoilState(authLoginAtom);
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    if (typeof window !== undefined) {
      const refreshToken = getRefreshToken();
      const isCallRefrshApi = !accessToken && refreshToken && !user;
      if (isCallRefrshApi) {
        postRefresh()
          .then((response: any) => {
            const token = response.data["access-token"];
            setAccessToken(token);
            delete axiosInstance.defaults.headers.common.Authorization;
            axiosInstance.defaults.headers.common.Authorization = token;
            getUserData(token).then((res) => setUser(res.data));
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
      if (!accessToken && !refreshToken) {
        if (currentPath === "/user") {
          router.replace("/login");
        }
      }
    }
  }, [accessToken, currentPath, router, setAccessToken, setUser, user]);
  return null;
}
