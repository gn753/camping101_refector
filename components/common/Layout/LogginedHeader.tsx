import styled from "@emotion/styled";
import { authUserData } from "@libs/store/authStore";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";

export const loadingAtom = atom({
  key: "loadingAtom ",
  default: true,
});
export default function LogginedHeader() {
  const user = useRecoilValue(authUserData);
  const [loading, setLoading] = useRecoilState(loadingAtom);

  useEffect(() => {
    if (user) {
      setTimeout(() => setLoading(false), 1000);
    }
  }, [user, setLoading]);
  const router = useRouter();
  const logout = () => {
    sessionStorage.removeItem("access-token");
    sessionStorage.removeItem("refresh-token");

    router.reload();
  };

  return (
    <>
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
            <Link href="/user" className="h5">
              마이페이지
            </Link>
            <UserProfile href="/">
              <ProfileIcon />
              <span className="h5">{user && user.nickname}</span>
            </UserProfile>
            <LogoutButton onClick={logout}>
              <span className="h5">{user && user.nickname && "로그아웃"} </span>
            </LogoutButton>
          </List>
        </NavigationWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  z-index: 997;
  border: 1px solid #eee;
  background-color: #fff;
  transition: 0.5s;
`;

const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  margin: 0 auto;
  height: 50px;
  box-sizing: border-box;
`;

const List = styled.div`
  position: relative;
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

const ProfileIcon = styled.i`
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  background-image: url("/icons/user_default.svg");
  background-size: 20px 20px;
  background-position: center;
  background-repeat: no-repeat;
  font-size: 0;
  margin-right: 5px;
`;

const UserProfile = styled(Link)`
  display: flex;
  align-items: center;
`;

const LogoutButton = styled.button`
  all: unset;
  display: block;
  height: 100%;
  cursor: pointer;
`;
