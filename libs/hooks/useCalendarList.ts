import moment from "moment";
import "moment/locale/ko";
import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { getCalendarDateInMonth } from "@components/Resv/Calendar/calendarService";

export const clendarDateListAtom = atom<any>({
  key: "clendarDateListAtom",
  default: null,
});

export default function useCalendarList() {
  const [dateList, setDateList] = useRecoilState(clendarDateListAtom);

  useEffect(() => {
    const year = moment().year();
    const month = moment().month();
    const calendarList = getCalendarDateInMonth(year, month, 3);
    setDateList(calendarList);
    return () => setDateList(null);
  }, [setDateList]);
  return {
    dateList,
  };
}
