import "moment/locale/ko";
import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { getCalendarDateInMonth } from "./calendarService";

export const clendarDateListAtom = atom<any>({
  key: "clendarDateListAtom",
  default: null,
});

export default function useCalendarList() {
  const [dateList, setDateList] = useRecoilState(clendarDateListAtom);

  useEffect(() => {
    const data = getCalendarDateInMonth();
    setDateList(data);
  }, []);
  return {
    dateList,
  };
}
