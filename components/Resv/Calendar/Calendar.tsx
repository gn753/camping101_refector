import styled from "@emotion/styled";
import TitleSection from "@components/Review/ContentTitleSection";
import CalendarList from "./CalendarList";

export default function Calendar({ calendarDatas, resvList }: any) {
  return (
    <>
      <TitleSection title="3개월 이내에 예약가능한 날짜를 찾아봐요." />
      <CalendarWrapper>
        <CalendarContainer>
          <div>
            <CalendarList data={calendarDatas} resvList={resvList} />
          </div>
        </CalendarContainer>
      </CalendarWrapper>
    </>
  );
}

const CalendarWrapper = styled.div`
  position: relative;
`;
const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  height: 360px;
`;
