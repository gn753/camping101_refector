import styled from "@emotion/styled";
import ReviewCard from "@components/common/Card/ReviewCard";
import Pagination from "@components/common/Pagination/Pagination";
import usePagination from "@components/common/Pagination/paginationHook";
import TitleSection from "./ContentTitleSection";
import { IsReviewPageProps } from "./reviewType";

export default function Content({ reviews }: IsReviewPageProps) {
  const campReviews = reviews.campLogs;
  const { offset, limit, nextArrow, prevArrow, page, updatePagination } =
    usePagination();

  return (
    <Wrapper>
      <TitleSection title="매일 매일 업데이트 되는 캠핑장 목록" />
      <List>
        {reviews &&
          campReviews
            .slice(offset, offset + limit)
            .map((it) => <ReviewCard {...it} />)}
      </List>
      <Pagination
        limit={limit}
        nextArrow={nextArrow}
        prevArrow={prevArrow}
        page={page}
        updatePagination={updatePagination}
        total={reviews.total}
      />
    </Wrapper>
  );
}
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

const Wrapper = styled.section`
  position: relative;
  width: 768px;
  margin: auto;
`;
