import styled from "@emotion/styled";
import useBookmark from "@libs/hooks/useBookmark";
import usePagination from "@libs/hooks/usePagination";
import TitleSection from "@components/Review/ContentTitleSection";
import Pagination from "@components/common/Pagination/Pagination";
import BookmarkCard from "./BookmarkCard";

interface Props {
  userId: number;
}

export default function Bookmark({ userId }: Props) {
  const { bookmarkList, removeBookmark } = useBookmark({ userId });
  const { offset, limit, nextArrow, prevArrow, page, updatePagination } =
    usePagination();

  return (
    <>
      <TitleSection title="내 북마크목록" />
      <List>
        {bookmarkList.length > 0 &&
          bookmarkList
            .slice(offset, offset + limit)
            .map((it) => (
              <BookmarkCard
                key={it.bookMarkId}
                removeBookmark={removeBookmark}
                {...it}
              />
            ))}
      </List>
      <Pagination
        total={bookmarkList.length}
        limit={limit}
        nextArrow={nextArrow}
        prevArrow={prevArrow}
        page={page}
        updatePagination={updatePagination}
      />
    </>
  );
}

const List = styled.div`
  width: 100%;
  min-height: 300px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  article {
    padding: 1.25rem 0;
  }
`;
