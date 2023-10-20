import styled from "@emotion/styled";
import Link from "next/link";

export default function NotLogginedHeader() {
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
            <>
              <Link href="/login" className="h5">
                <i>아이콘</i>로그인
              </Link>
              <Link href="/join" className="h5">
                회원가입
              </Link>
            </>
          </List>
        </NavigationWrapper>
      </Wrapper>
    </>
  );
}

const SkeletonWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 1000;
  background-color: #f2f2f2;
  position: relative;
  overflow: hidden;
  border-radius: 4px;

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: skeleton-gradient 1.5s infinite ease-in-out;
  }
`;

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
