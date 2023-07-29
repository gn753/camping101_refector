import styled from "@emotion/styled";
import useBookmark from "@libs/hooks/useBookmark";
import { authUserData } from "@libs/store/authStore";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

interface Props {
  title: string;
  like: number;
  id: string | string[];
}
export default function ReviewBookmarkOnOff({ title, like, id }: Props) {
  const [isBookmark, setIsBookmark] = useState(false);
  const user = useRecoilValue(authUserData);
  const userId = user?.member_id;
  const { addBookmark, bookmarkList, removeBookmark } = useBookmark({ userId });

  const newBookmark = {
    campLogId: id,
    title,
    memberId: userId,
  };

  const idNum = Number(id);

  const bookmarkId = bookmarkList.find((it) => it.campLogId === idNum);

  useEffect(() => {
    if (bookmarkId) {
      setIsBookmark(true);
    }
  }, [bookmarkId]);

  const isActiveBookamrk = () => {
    if (!user) return false;
    setIsBookmark(!isBookmark);
  };

  return (
    <>
      {!isBookmark ? (
        <AddBookmark onClick={() => addBookmark(newBookmark)}>
          <IsActiveEvent onClick={isActiveBookamrk}>북마크 추가</IsActiveEvent>
        </AddBookmark>
      ) : (
        <DeleteBookmark onClick={() => removeBookmark(bookmarkId)}>
          <IsActiveEvent onClick={isActiveBookamrk}>북마크 제거</IsActiveEvent>
        </DeleteBookmark>
      )}
      <LikeNum>{`좋아요 수 :${like}`}</LikeNum>
    </>
  );
}

const AddBookmark = styled.i`
  display: block;
  background-image: url("/icons/bookmark-line.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 28px;
  height: 28px;

  cursor: pointer;
`;

const DeleteBookmark = styled.i`
  display: block;
  background-image: url("/icons/bookmark-fill.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 28px;
  height: 28px;
  font-size: 0;
  cursor: pointer;
`;

const LikeNum = styled.span`
  font-size: 28px;
`;

const IsActiveEvent = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  font-size: 0;
  width: 100%;
`;
