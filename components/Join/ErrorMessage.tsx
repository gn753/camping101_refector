import styled from "@emotion/styled";

export default function ErrorMessage({ errors }: any) {
  return (
    <TextColor>
      <span>{errors && errors.message}</span>
    </TextColor>
  );
}
const TextColor = styled.div`
  span {
    color: red;
  }
`;
