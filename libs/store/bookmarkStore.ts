import { IsGetUserBookmarkList } from "@libs/api/getBookmarkList.interface";
import { atom } from "recoil";

export const bookmarkListAtom = atom<[] | IsGetUserBookmarkList[]>({
  key: "bookmarkListAtom",
  default: [],
});
