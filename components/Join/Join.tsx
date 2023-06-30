import styled from "@emotion/styled";
import Form from "./Form";
import JoinTitleSection from "./JoinTitleSection";

export default function Join() {
  return (
    <Container>
      <Wrapper>
        <JoinTitleSection title="회원가입" />
        <Form />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 768px;
  margin: auto;
`;

const Wrapper = styled.div`
  width: auto;
`;
