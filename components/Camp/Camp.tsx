import styled from "@emotion/styled";
import Content from "./Comtent";
import { IsCampPageProps } from "./camp.interface";

export default function Camp({ camps }: IsCampPageProps) {
  return (
    <Wrapper>
      <Content camps={camps} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  width: 768px;
  margin: auto;
`;
