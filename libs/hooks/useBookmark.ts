import deleteBookmark from "@libs/api/deleteBookmark";
import getUserBookmarkList from "@libs/api/getUserBookmarkList";
import postBookmarkCreate from "@libs/api/postBookmark";
import { IsPostBookmark } from "@libs/api/postBookmarkType";
import { bookmarkListAtom } from "@libs/store/bookmarkStore";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

export default function useBookmark({ userId }: any) {
  const [bookmarkList, setBookmarkList] = useRecoilState(bookmarkListAtom);

  const getBookmarks = useCallback(
    async (userId: any) => {
      const response = await getUserBookmarkList(userId);
      setBookmarkList(response.content);
    },
    [setBookmarkList],
  );

  const addBookmark = useCallback(async (newBookmark: IsPostBookmark) => {
    const userId = newBookmark?.memberId;
    if (userId) {
      await postBookmarkCreate(newBookmark);
    } else alert("로그인을 해주세요");
  }, []);

  const removeBookmark = async (bookmarkId: any) => {
    if (!bookmarkId) return null;
    await deleteBookmark(bookmarkId);

    const update = bookmarkList.filter(
      (bookmark) => bookmark.bookMarkId !== bookmarkId,
    );
    setBookmarkList(update);
    return null;
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      if (userId) {
        getBookmarks(userId);
      }
    }
  }, [userId, setBookmarkList]);

  return {
    removeBookmark,
    bookmarkList,
    deleteBookmark,
    addBookmark,
    getBookmarks,
  };
}
