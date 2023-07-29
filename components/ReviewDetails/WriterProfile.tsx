import styled from "@emotion/styled";

export default function WriterProfile({ data }: any) {
  const { title, writerNickName, createdAt } = data;

  return (
    data && (
      <Wrapper>
        <Title>{title}</Title>
        <UserProfile>
          <i>프로필아이콘</i>
          <div>
            <span>{writerNickName}</span>
            <span>{createdAt}</span>
          </div>
        </UserProfile>
      </Wrapper>
    )
  );
}

const Wrapper = styled.header`
  padding: 1.5rem 0;
`;

const Title = styled.h3`
  font-size: 28px;
`;

const UserProfile = styled.div`
  display: flex;
  gap: 10px;
  i {
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-image: url("/icons/user_default.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    font-size: 0;
  }
  span {
    display: block;
  }
`;
