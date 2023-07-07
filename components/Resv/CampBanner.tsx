import styled from "@emotion/styled";
import Image from "next/image";

export default function CampBanner() {
  return (
    <Banner>
      <Image src="http://placehold.it/1024x350" alt="test" fill />
    </Banner>
  );
}

const Banner = styled.figure`
  & > img {
    object-fit: cover !important;
    position: relative !important;
    width: 100%;
    height: 200px !important;
  }
`;
