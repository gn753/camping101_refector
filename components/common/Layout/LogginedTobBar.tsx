import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LogginedTobBar({ user }: any) {
  const router = useRouter();
  const logout = () => {
    sessionStorage.removeItem("access-token");
    sessionStorage.removeItem("refresh-token");
    setTimeout(function () {
      router.reload();
    }, 1000);
  };

  return (
    <>
      <UserProfile href="/user">
        <ProfileIcon />
        <span className="h5">{user && user.nickname}</span>
      </UserProfile>
      <LogoutButton className="h5" onClick={logout}>
        로그아웃
      </LogoutButton>
    </>
  );
}

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
