import styled from "@emotion/styled";
import { IsReviewDetails } from "@pages/api/getReviewsType";
import Link from "next/link";

export default function ReviewCard({ ...data }: IsReviewDetails) {
  const {
    writerNickName,
    title,
    description,
    createdAt,
    image,
    campLogName,
    campLogId,
  } = data;
  const isTitle = campLogName || title;
  return (
    <CardWrapper>
      <LinkWrapper href={`/review/details/${campLogId}`}>
        <CardFigure src={image} />
        <CardBody>
          <CardTitle>{isTitle}</CardTitle>
          <CardDescritpion>{description}</CardDescritpion>
          <CardFooter>
            <CardUserInfo>
              <i>유저프로필</i>
              <span>{writerNickName} </span>
            </CardUserInfo>
            <CardUserCreated>{createdAt.slice(0, 10)}</CardUserCreated>
          </CardFooter>
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
const CardFigure = styled.img`
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
  display: block;
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  margin-bottom: 10px;
`;

const CardDescritpion = styled.p`
  display: block;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
`;

const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const CardUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 14px;

  i {
    width: 20px;
    height: 20px;
    border-radius: 15px;
    background-image: url("/icons/user_default.svg");
    background-size: contain;
    font-size: 0;
  }
`;

const CardUserCreated = styled.div`
  font-size: 14px;
`;
