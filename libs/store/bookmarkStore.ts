import { IsGetUserBookmarkList } from "@libs/api/getBookmarkListType";
import { atom } from "recoil";

export const bookmarkListAtom = atom<[] | IsGetUserBookmarkList[]>({
    key: "bookmarkListAtom",
    default: [],
  });