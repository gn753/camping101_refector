import styled from "@emotion/styled";
import CalendarList from "./CalendarList";
import CalendarWeek from "./CalendarWeek";

export default function Calendar({ calendarDatas }: any) {
  return (
    <>
      <CalendarWrapper>
        <CalendarContainer>
          <CalendarWeek />
          <CalendarList data={calendarDatas} />
        </CalendarContainer>
      </CalendarWrapper>
      ;
    </>
  );
}

const CalendarWrapper = styled.div`
  position: relative;
`;
const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  height: 360px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const MonthsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 768px;
`;

const SelectedDates = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 1.2rem;
`;
