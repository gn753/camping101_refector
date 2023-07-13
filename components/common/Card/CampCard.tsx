import styled from "@emotion/styled";
import { IsCamp } from "@pages/api/getCampsType";
import Link from "next/link";

export default function CampCard({ ...rest }: IsCamp) {
  const { campId, campName, firstImage, location, intro } = rest;

  return (
    <CardWrapper>
      <LinkWrapper href={`/camp/resv/${campId}`}>
        <CardPhoto src={firstImage} alt="샘플이미지" />
        <CardBody>
          <CardTitle className="h5">{campName}</CardTitle>
          <CardDescription>{intro}</CardDescription>
          <CardComments>캠핑로그(20)</CardComments>
          <CardTag>
            <li>환경 : {location.environment}</li>
            <li>태그 : 킹왕짱</li>
          </CardTag>
        </CardBody>
      </LinkWrapper>
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  display: flex;
  flex-basis: 48%;
  gap: 20px;
  height: 100px;
  overflow: hidden;
  cursor: pointer;
  padding: 10px 0;
  margin-bottom: 20px;
`;

const LinkWrapper = styled(Link)`
  display: flex;
  color: #000;
`;

const CardPhoto = styled.img`
  width: 100px;
  height: 100%;
  border-radius: 5px;
`;
const CardBody = styled.div`
  display: block;
  text-decoration: none;
  background-color: #fff;
  margin-left: 1rem;
`;

const CardTitle = styled.h3`
  display: flex;
  justify-content: space-between;
`;

const CardDescription = styled.p`
  margin: 5px 0;
`;

const CardComments = styled.span`
  display: block;
  margin: 5px 0;
`;

const CardTag = styled.ul`
  display: flex;
  gap: 5px;
`;
