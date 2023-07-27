import styled from "@emotion/styled";

const week = ["일", "월", "화", "수", "목", "금", "토"];
export default function CalendarWeek() {
  const getClassName = (index: number) => {
    if (index === 0) {
      return "sunday";
    }
    if (index === 6) {
      return "saturday";
    }
    return "weekday";
  };
  return (
    <Wrapper>
      <Container>
        <DayList>
          {week.map((day, index) => (
            <Day key={index} className={getClassName(index)}>
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
  width: 640px;
`;
const DayList = styled.div`
  display: flex;
  .sunday {
    color: rgb(220, 3, 40);
  }
  .saturday {
    color: #0152cc;
  }
`;

const Day = styled.div`
  width: 84px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
