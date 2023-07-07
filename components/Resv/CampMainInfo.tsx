import styled from "@emotion/styled";

export default function CampMainInfo({ campResvDetails }: any) {
  const { tel, location, name } = campResvDetails;

  return (
    <Wrapper>
      <Title> {name} 입니다</Title>
      <List>
        <li>
          <span>위치</span> <span>{location.addr1}</span>
        </li>
        <li>
          <span>환경</span> <span>{location.environment}</span>
        </li>
        <li>
          <span>tel </span> <span>{tel}</span>
        </li>
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  & > img {
    object-fit: cover !important;
    position: relative !important;
    width: 100%;
    height: 200px !important;
  }
`;

const Title = styled.h3`
  font-size: 28px;
  margin-top: 10px;
`;

const List = styled.ul`
  span {
    width: 50px;
    font-size: 12px;
  }
`;
