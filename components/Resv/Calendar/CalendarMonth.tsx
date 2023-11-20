import moment from "moment";
import { useEffect, useState } from "react";
import CalendarItem from "./CalendarItem ";
import { getCalendar } from "./calendar.service";

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
  const [year, setYear] = useState(today.year());
  const [month, setMonth] = useState(today.month() + index);
  const [calendarDates, setCalendarDates] = useState<any>([]);
  // 예약가능한날짜인지구분
  const startDate = moment([year, month, 1]);
  const renderMonth = startDate.format("YYYY년 MM월");

  useEffect(() => {
    if (month >= 12) {
      const yearsToAdd = Math.floor(month / 12);
      console.log(yearsToAdd, "yearstoad");
      setYear((pre) => pre + 1);
      setMonth(yearsToAdd - 1);
      const data = getCalendar(
        year + 1,
        yearsToAdd - 1,
        today,
        reservationData,
      );
      setCalendarDates(data);
    } else {
      const data = getCalendar(year, month, today, reservationData);
      setCalendarDates(data);
    }
  }, []);

  return (
    <>
      {calendarDates.length > 0 && (
        <CalendarItem monthDates={calendarDates} renderMonth={renderMonth} />
      )}
    </>
  );
}
