import styled from "@emotion/styled";
import useDatePicker from "@libs/hooks/useDatePicker";
import moment from "moment";
import "moment/locale/ko";
import { useRef } from "react";
import CalendarDate from "./CalendarDate";
import CalendarWeek from "./CalendarWeek";

interface Props {
  monthDates: any;
  resvList: any;
}

export default function CalendarItem({ monthDates, resvList }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { pickerMultipleDateRange, pick, isBetweendDate } = useDatePicker();

  const firstDay = moment(monthDates[0].date).day();
  const calendarMonth = monthDates[0].date.slice(0, 7);
  return (
    <Wrapper>
      <Title className="h5">{calendarMonth}월</Title>
      <CalendarWeek />
      <CalendarMonthWrapper ref={ref}>
        {[...Array(firstDay)].map((_, index) => (
          <Blank key={index} />
        ))}
        {monthDates.map((data: any, index: number) => (
          <CalendarDate
            data={data}
            day={index}
            key={data.date}
            pickerMultipleDateRange={pickerMultipleDateRange}
            pick={pick}
            isBetweenDate={isBetweendDate}
          />
        ))}
      </CalendarMonthWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-bottom: 20px;
  width: 640px;
`;

const CalendarMonthWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  [data-datetype="토요일"] {
    color: blue;
  }
  [data-datetype="일요일"],
  [data-datetype="공휴일"] {
    color: rgb(222, 46, 95);
  }
`;

const Title = styled.strong`
  flex: none;
  display: block;
  text-align: center;
`;
const Blank = styled.div`
  width: 84px;
  height: 44px;
  line-height: 40px;
  text-align: center;
`;
