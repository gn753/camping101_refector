import styled from "@emotion/styled";
import Link from "next/link";
import CampCard from "@components/common/Card/CampCard";
import ReviewCard from "@components/common/Card/ReviewCard";
import { IsHomePageProps } from "./homeType";

export default function Content({ camps, reviews }: IsHomePageProps) {
  const campReviews = reviews.campLogs;

  return (
    <Wrapper>
      <TitleSection title="실시간 인기캠핑장" href="/camp" />
      <List>
        {camps && camps.map((camp) => <CampCard key={camp.campId} {...camp} />)}
      </List>
      <TitleSection title="실시간 캠핑장리뷰" href="/review" />
      <List>
        {reviews &&
          campReviews.map((it) => <ReviewCard key={it.campLogId} {...it} />)}
      </List>
    </Wrapper>
  );
}

function TitleSection({ title, href }: any) {
  return (
    <TitleWrapper>
      <h2 className="h2">{title}</h2>
      <MoreSeeButton href={href}>더보기</MoreSeeButton>
    </TitleWrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  width: 768px;
  margin: auto;
`;

const List = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  article {
    padding: 1.25rem 0;
  }
`;

const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3.75rem 0 2.5rem;
`;

const MoreSeeButton = styled(Link)`
  color: #000;
  font-weight: bold;
  cursor: pointer;
  margin-right: 50px;
`;
