import styled from "@emotion/styled";

export default function Footer() {
  return (
    <Wrapper>
      <Text className="h4">Camping101</Text>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 100px;
  background-color: none;
  display: flex;
  align-items: center;
`;

const Text = styled.h1`
  color: #fff;
`;
