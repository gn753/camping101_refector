// 한국어 설정
import moment from "moment";
import "moment/locale/ko";

export const getCalendar = (
  year: number,
  month: number,
  today: moment.Moment,
  reservationData: any,
) => {
  const daysInMonth = today.daysInMonth();

  const dates = [];

  const isDateReserved = (date: any) => {
    return reservationData.some((reservation: any) => {
      return date.isBetween(
        reservation.startDate,
        reservation.endDate,
        null,
        "[]",
      );
    });
  };
  // 지나간 날짜짜처리
  const isDatePast = (date: any) => {
    return date.isBefore(today, "day");
  };

  for (let i = 1; i < daysInMonth; i++) {
    const currentDate = moment([year, month, i]);
    const isReserved = isDateReserved(currentDate);
    const isPast = isDatePast(currentDate);

    dates.push({
      date: currentDate.format("YYYY-MM-DD"),
      isPast,
      availability: isReserved && !isPast ? "예약 가능" : "예약 불가능",
    });
  }
  return dates;
};
