import styled from "@emotion/styled";
import Image from "next/image";

interface Props {
  image: string;
}

export default function Photo({ image }: Props) {
  return (
    <Figure>
      {image && (
        <Image src={image} alt="샘플이미지" width={1924} height={150} />
      )}
    </Figure>
  );
}

const Figure = styled.figure`
  img {
    width: 100%;
    height: 100px;
  }
`;
