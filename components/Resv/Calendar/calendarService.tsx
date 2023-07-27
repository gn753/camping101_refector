// 한국어 설정
import holidays from "@public/data/holidays.json";
import moment, { Moment } from "moment";
import "moment/locale/ko";

const isHoliday = (date: any) => {
  return holidays.includes(date);
};

const getMonthDates = (month: any) => {
  const firstDate = moment(month).clone().startOf("month");
  const lastDate = moment(month).clone().endOf("month");
  const today = moment();
  const monthDates: any = [];

  Array.from({ length: lastDate.daysInMonth() }).forEach((s, index) => {
    const isPast = firstDate.clone().add(index, "day").isBefore(today, "day");
    const dateFormat = firstDate.clone().add(index, "day").format("YYYY-MM-DD");
    const weekdays = isHoliday(dateFormat)
      ? "공휴일"
      : firstDate.clone().add(index, "day").format("dddd");

    monthDates.push({
      isPast,
      date: dateFormat,
      weekdays,
    });
  });

  return monthDates;
};

// 달력의 모든 달에 대한 날짜들을 가져오는 함수
export const getCalendarDateInMonth = (
  year: number,
  month: number,
  calendarNumRender: number,
) => {
  const calendarList: any[] = [];
  Array.from({ length: calendarNumRender }).forEach((_, i) => {
    const startDate = moment({ year, month });
    const currentMonth = startDate.clone().add(i, "months");

    const calendar = getMonthDates(currentMonth);
    calendarList.push(calendar);
  });

  return calendarList;
};

export const getSelectedDatesPeriod = (selectedList: any) => {
  const isRender = selectedList.length > 0;
  const startDate = moment(selectedList[0]).format("YYYY년 M월 D일");
  const endDate = moment(selectedList[selectedList.length - 1]).format(
    "YYYY년 M월 D일",
  );
  const result = isRender && `${startDate} - ${endDate}`;

  return result;
};
