import styled from "@emotion/styled";
import Banner from "./Banner";
import Content from "./Content";
import { IsHomePageProps } from "./homeType";

export default function Home({ camps, reviews }: IsHomePageProps) {
  return (
    <>
      <Banner />
      <Container>
        <Content camps={camps} reviews={reviews} />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 768px;
  margin: auto;
`;
