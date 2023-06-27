import styled from "@emotion/styled";
import Link from "next/link";

export default function Header() {
  return (
    <Wrapper>
      <NavigationWrapper>
        <List>
          <Link href="/" className="h5">
            캠핑101
          </Link>
          <Link href="/" className="h5">
            홈
          </Link>
          <Link href="/camp" className="h5">
            캠핑장
          </Link>
          <Link href="/campLog" className="h5">
            캠핑장 리뷰
          </Link>
        </List>
        <List>
          <Link href="/signIn" className="h5">
            <i>아이콘</i>로그인
          </Link>
          <Link href="/signUp" className="h5">
            회원가입
          </Link>
        </List>
      </NavigationWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  border: 1px solid #eee;
  background-color: #fff;
`;

const NavigationWrapper = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  margin: 0 auto;
  height: 50px;
  box-sizing: border-box;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  a {
    display: flex;
    align-items: center;
    height: 55px;
    text-decoration: none;
    color: black;
    font-weight: 400;
  }
  button {
    display: flex;
    align-items: center;
    font-size: 16px;
    vertical-align: middle;
  }
  i {
    display: inline-block;
    background-image: url("/icons/log_in.svg");
    background-size: cover;
    width: 30px;
    height: 30px;
    font-size: 0;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;

  i {
    display: inline-block;
    background-image: url("/icons/user_default.svg");
    background-size: contain;
    width: 20px;
    height: 20px;
    font-size: 0;
    margin-right: 5px;
  }
`;
