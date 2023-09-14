import styled from "@emotion/styled";
import { ReactNode } from "libs/types";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
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
