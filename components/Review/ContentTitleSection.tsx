import styled from "@emotion/styled";

interface Props {
  title: string;
}

export default function TitleSection({ title }: Props) {
  return (
    <TitleWrapper>
      <h2 className="h2">{title}</h2>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3.75rem 0 2.5rem;
`;
