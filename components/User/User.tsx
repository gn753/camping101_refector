import styled from "@emotion/styled";
import { authUserData } from "@libs/store/authStore";
import Image from "next/image";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import TitleSection from "@components/Review/ContentTitleSection";
import Bookmark from "./Bookmark";
import UserResvAdmin from "./UserResvAdmin";

export default function User() {
  const userData = useRecoilValue(authUserData);
  const userId = userData?.member_id;
  const [nav, setNav] = useState("북마크");

  const handleMenu = (menu: string) => {
    setNav(menu);
  };

  return (
    <Container>
      <Wrapper>
        <SideBar>
          <div>
            <TitleSection title="마이페이지" />
            <Proifle>
              <div>
                {userData && (
                  <UserImage
                    src="/icons/user_default.svg"
                    width={40}
                    height={40}
                    alt="유저 이미지"
                  />
                )}
                <span className="h5">{userData?.nickname}</span>
              </div>
              <p className="h5">{userData?.email}</p>
            </Proifle>
            <MenuList>
              <li
                role="presentation"
                className={`h4 ${nav === "북마크" && "active"}`}
                onClick={() => handleMenu("북마크")}
              >
                북마크 목록
              </li>
              <li
                role="presentation"
                className={`h4 ${nav === "예약목록" && "active"}`}
                onClick={() => handleMenu("예약목록")}
              >
                예약 목록
              </li>
            </MenuList>
          </div>
        </SideBar>
        <Content>
          <div>
            {userId && nav === "북마크" && <Bookmark userId={userId} />}
            {userId && nav === "예약목록" && <UserResvAdmin userId={userId} />}
          </div>
        </Content>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;
const Container = styled.div`
  width: 1024px;
  margin: auto;
  height: calc(100vh - 55px);
`;

const SideBar = styled.section`
  width: 30%;
  height: 100%;
  background: #405261;
  & > div {
    box-sizing: border-box;
    padding: 20px 30px 0 30px;
  }
`;
const Content = styled.section`
  width: 70%;
  height: 100%;
  & > div {
    padding: 20px 30px 20px 30px;
  }
`;

const Proifle = styled.div`
  margin-bottom: 76px;
  & > div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  span {
    font-weight: 600;
    color: #fff;
  }
  p {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 10px;
  }
`;

const MenuList = styled.ul`
  li {
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    text-transform: lowercase;
  }
  .active {
    color: #fff;
  }
`;
const List = styled.div`
  width: 100%;
  min-height: 300px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  article {
    padding: 1.25rem 0;
  }
`;

const UserImage = styled(Image)`
  border-radius: 50%;
  margin-bottom: 10px;
`;
