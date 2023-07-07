import styled from "@emotion/styled";
import { useRef, useState } from "react";

export default function CalendarDate({
  data,
  day,
  pickerMultipleDateRange,
  pick,
  isBetweenDate,
}: any) {
  const ref = useRef<HTMLDivElement>(null);
  const { startDate, endDate } = pick;

  const devideDate = () => {
    if (startDate === data.date) {
      return "start";
    } else if (endDate === data.date) {
      return "end";
    } else if (isBetweenDate(data.date, startDate, endDate)) {
      return "between";
    } else return false;
  };

  const devidedDate = devideDate();

  return (
    <>
      {data.isPast ? (
        <NotSale disabled={true}>{day + 1}</NotSale>
      ) : (
        <OnSale
          ref={ref}
          data-date={data.date}
          data-datetype={data.weekdays}
          className={devidedDate}
          onClick={() => pickerMultipleDateRange(data.date)}
        >
          {day + 1}
        </OnSale>
      )}
    </>
  );
}

const NotSale = styled.button`
  width: 50px;
  height: 44px;
  line-height: 40px;
  text-align: center;
  background-color: #f8f8f8;
  color: #bdbdbd;
  cursor: default;
`;

const OnSale = styled.div<any>`
  width: 50px;
  height: 44px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #42c994;
    border-color: #42c994;
  }
  &.start,
  &.between,
  &.end {
    background: #42c994;
    border-color: #42c994;
    color: #fff;
  }
`;
