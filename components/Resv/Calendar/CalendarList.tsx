import styled from "@emotion/styled";
import moment from "moment";
import { useState } from "react";
import CalendarItem from "./CalendarItem ";

export default function CalendarList({ data }: any) {
  const currentMonth = moment().month();
  const [month, setMonth] = useState(currentMonth);

  const nextMonth = () => {
    if (month < 12) {
      console.log(month);
      setMonth((pre) => pre + 1);
    }
  };
  const prevMonth = () => {
    setMonth((pre) => pre - 1);
  };
  const monthList = data && data.slice(month, month + 2);
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
        {monthList &&
          monthList.map((it: any, index: number) => (
            <Wrapper>
              <CalendarItem monthDates={it} key={`${it[0].date}-${index}`} />
            </Wrapper>
          ))}
      </MonthsContainer>
    </>
  );
}

const MonthsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Wrapper = styled.div`
  max-width: 360px;
`;

const ArrowWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
`;
