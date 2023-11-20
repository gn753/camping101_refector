import { decode } from "jsonwebtoken";

export const getRefreshToken = () => {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem("refresh-token");
  }
};

export const setRefreshToken = (token: string) => {
  return sessionStorage.setItem("refresh-token", token);
};
export const tokenWithoutBearer = (token: string) => {
  return token.replace("Bearer ", "");
};

export const setAccessAndRefreshToken = (res: any) => {
  const accessToken = tokenWithoutBearer(res.headers["access-token"]);
  const refreshToken = tokenWithoutBearer(res.headers["refresh-token"]);
  setRefreshToken(refreshToken);
};

const decodeJWT = (token: string) => {
  const decodedToken = decode(token);
  return decodedToken;
};

const isTokenValidOrUndefined = (token: any) => {
  if (!token) return "토큰 없음";

  const decodedToken: any = decodeJWT(token);
  const expirationTimeInSeconds = decodedToken.exp;
  const now = new Date();
  const expirationTimeInMilliseconds = expirationTimeInSeconds * 1000;
  const isvalid =
    expirationTimeInMilliseconds >= now.getTime() ? "토큰 유효" : "토큰 만료";
  return isvalid;
};

export const removeAccessAndRefresh = () => {
  sessionStorage.removeItem("access-token");
  sessionStorage.removeItem("refresh-token");
};
