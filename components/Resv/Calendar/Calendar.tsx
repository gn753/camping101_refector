import styled from "@emotion/styled";
import TitleSection from "@components/Review/ContentTitleSection";
import CalendarList from "./CalendarList";
import CalendarWeek from "./CalendarWeek";

export default function Calendar({ calendarDatas }: any) {
  return (
    <>
      <TitleSection title="예약가능한 날짜를 찾아봐요" />
      <CalendarWrapper>
        <CalendarContainer>
          <div>
            <CalendarList data={calendarDatas} />
          </div>
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

  font-size: 1.2rem;
  height: 360px;
`;
