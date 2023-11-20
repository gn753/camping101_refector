import styled from "@emotion/styled";
import { IsGetUserBookmarkList } from "@libs/api/getBookmarkList.interface";
import Link from "next/link";
import Button from "@components/common/Button/StyledButton";

interface Props extends IsGetUserBookmarkList {
  removeBookmark: (id: number) => void;
}

export default function BookmarkCard({ ...rest }: Props) {
  const {
    bookMarkId,
    memberId,
    nickName,
    campLogId,
    title,
    description,
    image,
    removeBookmark,
  } = rest;
  return (
    <CardWrapper>
      <Container>
        <CardFigure src={image} />
        <CardBody>
          <CardTitle>
            <Link href={`/review/${campLogId}`}>{title}</Link>
          </CardTitle>
          <CardDescritpion>{description}</CardDescritpion>
          <CardFooter>
            <CardUserInfo>
              <i>유저프로필</i>
              <span>{nickName} </span>
            </CardUserInfo>
            <CardUserCreated onClick={() => removeBookmark(bookMarkId)}>
              삭제
            </CardUserCreated>
          </CardFooter>
        </CardBody>
      </Container>
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  display: flex;
  flex-basis: 48%;
  gap: 20px;
  height: 100px;
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 20px;
`;
const Container = styled.div`
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
  cursor: pointer;
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

const CardUserCreated = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
