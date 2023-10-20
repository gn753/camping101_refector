import styled from "@emotion/styled";
import moment from "moment";
import { useState } from "react";
import CalendarItem from "./CalendarItem ";

export default function CalendarList({ data, resvList }: any) {
  const [calendarIndex, setCalendarIndex] = useState(0);

  const nextMonth = () => {
    if (calendarIndex >= 2) {
      setCalendarIndex(0);
      alert("해당월은 예약이 불가능합니다");
      return false;
    }
    setCalendarIndex((pre) => pre + 1);
  };
  const prevMonth = () => {
    if (calendarIndex < 1) {
      return false;
    }
    setCalendarIndex((pre) => pre - 1);
  };

  return (
    <>
      <ArrowWrapper>
        <li>
          <button onClick={prevMonth}>이전</button>
        </li>
        <li>
          <button onClick={nextMonth}>다음</button>
        </li>
      </ArrowWrapper>
      <MonthsContainer>
        {data && data.length > 0 && (
          <CalendarItem
            resvList={resvList}
            monthDates={data[calendarIndex]}
            key={`${data[0].date}`}
          />
        )}
      </MonthsContainer>
    </>
  );
}

const MonthsContainer = styled.div``;

const ArrowWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
`;
