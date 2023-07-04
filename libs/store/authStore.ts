import getUserData from "@libs/api/auth/getUserData";
import { getAccessToken } from "@libs/services/authTokenService";
import { atom, selector } from "recoil";

interface Props {
  isLogin: string | null;
}
interface IsUserDataProps {
  email: string;
  image: string;
  member_id: number;
  member_type: string;
  nickname: string;
  phone_number: string;
  sign_up_type: string;
}

export const authLoginAtom = atom<string | null>({
  key: "authLoginAtom",
  default: null,
});

export const authUserData = atom<IsUserDataProps | null>({
  key: "user",
  default: null,
});
