import styled from "@emotion/styled";
import TitleSection from "@components/Review/ContentTitleSection";
import CalendarMonth from "./CalendarMonth";

export default function Calendar({ reservationData }: any) {
  return (
    <>
      <TitleSection title="3개월 이내에 예약가능한 날짜를 찾아봐요." />
      <CalendarWrapper>
        <CalendarContainer>
          {Array.from({ length: 3 }).map((_, index) => (
            <CalendarMonth reservationData={reservationData} index={index} />
          ))}
        </CalendarContainer>
      </CalendarWrapper>
    </>
  );
}

const CalendarWrapper = styled.div``;
const CalendarContainer = styled.div`
  font-size: 1.2rem;
`;
