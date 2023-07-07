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

export const clendarDateListAtom = atom<any>({
  key: "clendarDateListAtom",
  default: null,
});

export default function useDatePicker() {
  const [pick, setPick] = useRecoilState(pickeredDateAtom);

  const customDiff = (day1, day2) => {
    const dateDiff = moment(day2).diff(moment(day1), "days");
    return dateDiff;
  };

  const isBetweendDate = (betweendDate, startDate, endDate) => {
    const result = moment(betweendDate).isBetween(
      moment(startDate),
      moment(endDate),
    );

    return result;
  };

  const pickerMultipleDateRange = (date) => {
    const clickedDate = date;
    const { startDate } = pick;
    const diff = customDiff(startDate, clickedDate);
    // console.log(endDate, clickedDate);
    // console.log(diff, "diff");
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
