import deleteBookmark from "@libs/api/deleteBookmark";
import { IsGetUserBookmarkList } from "@libs/api/getBookmarkListType";
import getUserBookmarkList from "@libs/api/getUserBookmarkList";
import { bookmarkListAtom } from "@libs/store/bookmarkStore";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function useBookmarkList({ userId }: any) {
  const [bookmarkList, setBookmarkList] = useRecoilState(bookmarkListAtom);
  const removeBookmark = async (id: number) => {
    await deleteBookmark(id);
    const filterd = bookmarkList.filter(
      (it: IsGetUserBookmarkList) => it.bookMarkId !== id,
    );
    setBookmarkList(filterd);
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      if (userId) {
        getUserBookmarkList(userId).then((res) => setBookmarkList(res.content));
      }
    }
  }, [userId, setBookmarkList]);

  return { removeBookmark, bookmarkList };
}
