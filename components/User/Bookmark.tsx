import styled from "@emotion/styled";
import TitleSection from "@components/Review/ContentTitleSection";
import Pagination from "@components/common/Pagination/Pagination";
import usePagination from "@components/common/Pagination/paginationHook";
import BookmarkCard from "./BookmarkCard";
import useBookmarkList from "./bookmarkListHook";

interface Props {
  userId: number;
}

export default function Bookmark({ userId }: Props) {
  const { bookmarkList, removeBookmark } = useBookmarkList({ userId });
  const pagination = usePagination();
  return (
    <>
      <TitleSection title="내 북마크목록" />
      <List>
        {bookmarkList.length > 0 &&
          bookmarkList.map((it) => (
            <BookmarkCard
              key={it.bookMarkId}
              removeBookmark={removeBookmark}
              {...it}
            />
          ))}
      </List>
      <Pagination total={bookmarkList.length} {...pagination} />
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
