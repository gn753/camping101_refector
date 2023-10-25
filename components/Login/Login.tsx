import styled from "@emotion/styled";
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
  height: 500px;
  margin: auto;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
