import styled from "@emotion/styled";
import { authAccessTokenAtom } from "@libs/store/authStore";
import { ReactNode } from "libs/types";
import { useRecoilValue } from "recoil";
import Footer from "./Footer";
import LogginedHeader from "./LogginedHeader";
import NotLogginedHeader from "./NotLogginedHeader";

type LayoutProps = {
  children: ReactNode;
};
export default function GeneralLayout({ children }: LayoutProps) {
  const isLogin = useRecoilValue(authAccessTokenAtom);
  return (
    <div>
      {isLogin ? <LogginedHeader /> : <NotLogginedHeader />}
      <Main>{children}</Main>
    </div>
  );
}
const Main = styled.main`
  position: relative;
  padding: 0 0 1rem 0;
  padding-top: 50px;
`;
