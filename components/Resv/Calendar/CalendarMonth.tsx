import moment from "moment";
import CalendarItem from "./CalendarItem ";

interface IsProps {
  reservationData: {
    startDate: string;
    endDate: string;
    reservationId: number;
  }[];
  index: number;
}

export default function CalendarMonth({ reservationData, index }: IsProps) {
  const today = moment();
  const year = today.year();
  const month = today.month() + index;
  const daysInMonth = today.daysInMonth();
  const startDate = moment([year, month, 1]);
  const dates = [];
  // 예약가능한날짜인지구분

  const isDateReserved = (date: any) => {
    return reservationData.some((reservation) => {
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

  const renderMonth = startDate.format("YYYY년 MM월");

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

  return (
    <>
      <CalendarItem monthDates={dates} renderMonth={renderMonth} />
    </>
  );
}
