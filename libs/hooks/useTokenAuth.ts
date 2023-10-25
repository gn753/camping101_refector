import getUserData from "@libs/api/auth/getUserData";
import postRefresh from "@libs/api/auth/postRefresh";
import { IsAxiosErrorType } from "@libs/api/axiosErrorType";
import { getRefreshToken } from "@libs/services/authTokenService";
import { authAccessTokenAtom, authUserData } from "@libs/store/authStore";
import axios, { isAxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function useTokenAuth() {
  const [user, setUser] = useRecoilState(authUserData);
  const [accessToken, setAccessToken] = useRecoilState(authAccessTokenAtom);
  const [loading, setLoading] = useState(true); // 추가: 로딩 상태를 관리
  const router = useRouter();
  const currentPath = router.pathname;
  useEffect(() => {
    if (typeof window !== "undefined") {
      const refreshToken = getRefreshToken();
      // 리프레시 토큰이 있다면 요청
      const isCallRefreshApi = !accessToken && refreshToken && !user;
      if (isCallRefreshApi) {
        postRefresh()
          .then((response) => {
            const token = response?.data["access-token"];
            setAccessToken(token);
            delete axios.defaults.headers.common.Authorization;
            axios.defaults.headers.common.Authorization = token;
            getUserData().then((res) => {
              setUser(res.data);
              setLoading(false); // 데이터를 가져왔을 때 로딩 상태를 false로 변경
            });
          })
          .catch((error) => {
            if (isAxiosError<IsAxiosErrorType>(error)) {
              const status = error.response?.data.status;
              const message = error.response?.data.error_message;

              if (status === 400) {
                alert(`${status} : ${message}`);
              }
            }
            setLoading(false); // 에러가 발생했을 때도 로딩 상태를 false로 변경.
          });
      } else {
        setLoading(false); // 권한이 이미 있을 때도 로딩 상태를 false로 변경합니다.
      }
    }
  }, [accessToken, router, setAccessToken, setUser, user]);

  return { router, currentPath, user, loading };
}
