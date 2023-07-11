import styled from "@emotion/styled";
import { authUserData } from "@libs/store/authStore";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { IsResvSiteList } from "./ResvSiteType";

export default function ResvSiteCard({ ...rest }: IsResvSiteList) {
  const { siteId, name, checkIn, checkOut, price, introduction, siteCapacity } =
    rest;
  const user = useRecoilValue(authUserData);
  console.log(user, "user");
  return (
    <Wrapper>
      <div>
        <Figure>
          <Image
            src="https://campingagains3.s3.ap-northeast-2.amazonaws.com/thumbnail__4f07163e26.jpeg"
            fill
            alt="2"
            sizes="(min-width: 808px) 50vw, 100vw"
          />
        </Figure>
        <div>
          <div>
            <h3 className="h4">{name}</h3>
            <Description>{introduction}</Description>
          </div>
          <CheckInAndPriceWrapper>
            <div>
              <span>숙박({checkIn}) ~ </span>
              <span className="h5">{price}</span>
            </div>
          </CheckInAndPriceWrapper>
          <ButtonWrapper>
            <button>예약</button>
          </ButtonWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  padding: 15px 19px;
  height: 400px;
`;

const Figure = styled.figure`
  position: relative;
  height: 228px;
  img {
    object-fit: cover;
  }
`;

const Description = styled.p`
  margin: 10px 0;
`;

const CheckInAndPriceWrapper = styled.div`
  div {
    display: flex;
    justify-content: space-between;
  }
  span:nth-of-type(2) {
    color: #1a1a1a;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;
