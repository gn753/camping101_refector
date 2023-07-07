import styled from "@emotion/styled";
import moment from "moment";
import "moment/locale/ko";
import { useRef } from "react";
import CalendarDate from "./CalendarDate";
import useDatePicker from "./datePickerHook";

interface Props {
  monthDates: any;
  month: number;
}

export default function CalendarItem({ monthDates, month }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { pickerMultipleDateRange, pick, isBetweendDate } = useDatePicker();

  const firstDay = moment(monthDates[0].date).day();

  return (
    <Wrapper>
      <Title>{month + 1}</Title>
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
  max-width: 360px;
  padding-bottom: 20px;
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
  font-size: 28px;
`;
const Blank = styled.div`
  width: 50px;
  height: 44px;
  line-height: 40px;
  text-align: center;
`;
