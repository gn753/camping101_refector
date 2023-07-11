import styled from "@emotion/styled";

const week = ["일", "월", "화", "수", "목", "금", "토"];
export default function CalendarWeek() {
  return (
    <Wrapper>
      <Container>
        <DayList>
          {week.map((day, index) => (
            <Day
              key={index}
              className={
                index === 0 // 일요일인 경우
                  ? "sunday"
                  : index === 6 // 토요일인 경우
                  ? "saturday"
                  : "weekday" // 나머지 평일인 경우
              }
            >
              {day}
            </Day>
          ))}
        </DayList>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  z-index: 100;
`;

const Container = styled.div`
  width: 768px;
`;
const DayList = styled.div`
  display: flex;
  justify-content: center;

  .sunday {
    color: rgb(220, 3, 40);
  }
  .saturday {
    color: #0152cc;
  }
`;

const Day = styled.div`
  width: 50px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
