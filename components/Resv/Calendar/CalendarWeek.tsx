import styled from "@emotion/styled";

const week = ["일", "월", "화", "수", "목", "금", "토"];
export default function CalendarWeek() {
  return (
    <Wrapper>
      <Container>
        <TopBar>
          <div>
            <div>캠핑장 예약</div>
          </div>
        </TopBar>
        <DayList>
          {week.map((day, index) => (
            <div
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
            </div>
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

const TopBar = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  min-height: 4.8rem;
  justify-content: center;
`;

const DayList = styled.div`
  display: flex;
  justify-content: center;

  .sunday {
    color: rgb(220, 3, 40);
  }
  .sturday {
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
