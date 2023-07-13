import styled from "@emotion/styled";
import useAuthRefreshUserData from "@libs/hooks/useAuthRefreshUserData";
import Link from "next/link";
import LogginedTobBar from "./LogginedTobBar";

export default function Header() {
  const { user } = useAuthRefreshUserData();

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
          <Link href="/review" className="h5">
            캠핑장 리뷰
          </Link>
        </List>

        <List>
          {user ? (
            <LogginedTobBar user={user} />
          ) : (
            <>
              <Link href="/login" className="h5">
                <i>아이콘</i>로그인
              </Link>
              <Link href="/join" className="h5">
                회원가입
              </Link>
            </>
          )}
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
  i {
    font-size: 0;
  }
`;
