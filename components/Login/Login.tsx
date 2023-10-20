import styled from "@emotion/styled";
import { authUserData } from "@libs/store/authStore";
import { useRouter } from "next/router";
import TitleSection from "@components/common/TitleSection";
import Form from "./Form";

export default function Login() {
  return (
    <>
      <Container>
        <Wrapper>
          <TitleSection title="로그인" />
          <Form />
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  width: 768px;
  height: 100%;
  margin: auto;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 35%;
  left: 35%;
  transform: translate(-50%, -50%);
`;
