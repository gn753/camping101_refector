import styled from "@emotion/styled";
import Image from "next/image";

export default function Banner() {
  return (
    <Wrapper>
      <BannerWrapper>
        <Title>
          즐거운 캠핑 예약 <br />
          캠핑101
        </Title>
        <BannerPhoto
          src="/imgs/img-home-banner.gif"
          alt="배너"
          sizes="(max-width: 768px) 100vw"
          fill
        />
      </BannerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 315px;
  background-color: #282d34;
`;

const BannerWrapper = styled.div`
  position: relative;
  width: 758px;
  height: 100%;
  margin: auto;
`;
const Title = styled.strong`
  position: absolute;
  top: 82px;
  left: 32px;
  font-size: 40px;
  color: #fff;
  z-index: 1000;
`;

const BannerPhoto = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
`;
