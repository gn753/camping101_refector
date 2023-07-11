import styled from "@emotion/styled";
import Image from "next/image";

export default function ResvSiteCard() {
  return (
    <Wrapper>
      <div>
        <Figure>
          <Image
            src="http://placehold.it/1924x350"
            fill
            alt="2"
            sizes="(min-width: 808px) 50vw, 100vw"
          />
        </Figure>
        <div>
          <div>
            <h3 className="h4">캠핑장 이름</h3>
            <Description>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            </Description>
          </div>
          <CheckInAndPriceWrapper>
            <div>
              <span>숙박(15:00) ~ </span>
              <span className="h5">129,000</span>
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

const Wrapper = styled.div`
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
