// 한국어 설정
import holidays from "@public/data/holidays.json";
import moment from "moment";
import "moment/locale/ko";

const isHoliday = (date: any) => {
  return holidays.includes(date);
};

const getMonthDates = (
  firstDay: moment.Moment,
  today: moment.Moment,
  monthIndex: any,
) => {
  const monthDates = [];
  const date = moment(firstDay).add(monthIndex, "months");

  while (date.month() === monthIndex) {
    const isPast = date.isBefore(today, "day");
    const dateFormat = date.clone().format("YYYY-MM-DD");
    const weekdays = isHoliday(dateFormat) ? "공휴일" : date.format("dddd");

    monthDates.push({
      date: dateFormat,
      isPast,
      weekdays,
    });

    date.add(1, "days");
  }

  return monthDates;
};

// 달력의 모든 달에 대한 날짜들을 가져오는 함수
export const getCalendarDateInMonth = () => {
  const today = moment();
  const dates: any = [];
  const firstDay = moment().startOf("year");

  // 12개의 달에 대해 반복하며 각 달의 날짜들을 가져옵니다.
  Array.from({ length: 12 }).forEach((_, i) => {
    const monthDates = getMonthDates(firstDay, today, i);
    dates.push(monthDates);
  });

  return dates;
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
