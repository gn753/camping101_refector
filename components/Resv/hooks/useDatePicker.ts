// 한국어 설정
import moment from "moment";
import "moment/locale/ko";
import { atom, useRecoilState } from "recoil";

const date = moment().format("YYYY-MM-DD");

export const pickeredDateAtom = atom<any>({
  key: "pickeredDateAtom",
  default: {
    startDate: date,
    endDate: date,
  },
});

export const datePickerAtom = atom<any>({
  key: "datePickerAtom",
  default: null,
});

export default function useDatePicker() {
  const [pick, setPick] = useRecoilState(pickeredDateAtom);

  const customDiff = (day1: string, day2: string) => {
    const dateDiff = moment(day2).diff(moment(day1), "days");
    return dateDiff;
  };

  // 선택한 캘린더의 날짜가 시작날짜와 종료날짜 사이에 있는 지 판별
  const isBetweendDate = (
    betweendDate: string,
    startDate: string,
    endDate: string,
  ) => {
    const result = moment(betweendDate).isBetween(
      moment(startDate),
      moment(endDate),
    );

    return result;
  };
  // 날짜 선택기

  const pickerMultipleDateRange = (clickedDate: string) => {
    const { startDate } = pick;
    const diff = customDiff(startDate, clickedDate);

    if (diff === 1) {
      setPick({
        startDate,
        endDate: clickedDate,
      });
    } else if (diff > 1 && diff < 8) {
      setPick({
        startDate,
        endDate: clickedDate,
      });
    } else {
      setPick({
        startDate: clickedDate,
        endDate: clickedDate,
      });
    }
  };

  return {
    pick,
    pickerMultipleDateRange,
    isBetweendDate,
  };
}
