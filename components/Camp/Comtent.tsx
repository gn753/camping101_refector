import styled from "@emotion/styled";
import usePagination from "@components/common/Pagination/hooks/usePagination";
import TitleSection from "@components/Review/ContentTitleSection";
import CampCard from "@components/common/Card/CampCard";
import Pagination from "@components/common/Pagination/Pagination";
import { IsCampPageProps } from "./camp.interface";

export default function Content({ camps }: IsCampPageProps) {
  const { offset, limit, nextArrow, prevArrow, page, updatePagination } =
    usePagination();

  return (
    <>
      <TitleSection title="실시간 캠핑장" />
      <List>
        {camps &&
          camps.slice(offset, offset + limit).map((it) => <CampCard {...it} />)}
      </List>
      <Pagination
        limit={limit}
        nextArrow={nextArrow}
        prevArrow={prevArrow}
        page={page}
        updatePagination={updatePagination}
        total={camps.length}
      />
    </>
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
