import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledButton = styled.button<any>`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  cursor: pointer;
  color: ${(props) => props.color || "gray"};
  background: ${(props) => props.background || "white"};
  ${(props) =>
    props.full &&
    css`
      width: 100%;
    `}
  ${(props) =>
    props.primary &&
    css`
      color: white;
      background: ${props.theme.color.primary};
      border-color: ${props.theme.color.primary};
    `}
  ${(props) =>
    props.green &&
    css`
      color: white;
      background: ${props.theme.color.green};
      border-color: ${props.theme.color.green};
    `}
    ${(props) =>
    props.teal &&
    css`
      color: white;
      background: ${props.theme.color.teal};
      border-color: ${props.theme.color.teal};
    `}
`;

export default function Button({ children, ...props }: any) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
