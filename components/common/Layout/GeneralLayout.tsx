import styled from "@emotion/styled";
import { ReactNode } from "libs/types";
import Footer from "./Footer";
import LogginedHeader from "./LogginedHeader";
import NotLogginedHeader from "./NotLogginedHeader";

type LayoutProps = {
  children: ReactNode;
  isLogin: boolean;
};
export default function GeneralLayout({ children, isLogin }: LayoutProps) {
  return (
    <div>
      {isLogin ? <LogginedHeader /> : <NotLogginedHeader />}
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
const Main = styled.main`
  position: relative;
  padding: 0 0 1rem 0;
  padding-top: 50px;
`;
