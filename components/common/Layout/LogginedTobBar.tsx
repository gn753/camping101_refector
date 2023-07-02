import styled from "@emotion/styled";
import Link from "next/link";

export default function LogginedTobBar({ user, setUser }: any) {
  const logout = () => {
    sessionStorage.removeItem("access-token");
    sessionStorage.removeItem("refresh-token");
    setUser(null);
  };

  return (
    <>
      <UserProfile href="/user">
        <ProfileIcon />
        <span className="h5">{user && user.nickname}</span>
      </UserProfile>
      <span className="h5" onClick={logout}>
        로그아웃
      </span>
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

const Wrapper = styled.div`
  display: flex;
`;

const UserProfile = styled(Link)`
  display: flex;
  align-items: center;
`;
