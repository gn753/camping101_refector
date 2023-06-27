import styled from "@emotion/styled";

export default function ReviewCard({ ...data }: any) {
  const { writerNickName, title, description, createdAt, image } = data;
  return (
    <CardWrapper>
      <CardFigure src={image} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardDescritpion>{description}</CardDescritpion>
        <CardFooter>
          <CardUserInfo>
            <i>유저프로필</i>
            <span>{writerNickName}</span>
          </CardUserInfo>
          <CardUserCreated>{createdAt}</CardUserCreated>
        </CardFooter>
      </CardBody>
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  display: flex;
  flex-basis: 48%;
  gap: 20px;
  height: 120px;
  overflow: hidden;
  cursor: pointer;
  padding: 10px 0;
  margin-bottom: 20px;
`;

const CardFigure = styled.img`
  min-width: 6.75rem;
  min-height: 6.75rem;
  cursor: pointer;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CardTitle = styled.h3`
  display: block;
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const CardDescritpion = styled.p`
  display: block;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
