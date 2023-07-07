import styled from "@emotion/styled";
import moment from "moment";
import CalendarItem from "./CalendarItem ";

export default function CalendarList({ data }: any) {
  const currentMonth = moment().month();
  return (
    <MonthsContainer>
      {
        <>
          {data &&
            data.map(
              (monthDates, index) =>
                index >= currentMonth && (
                  <CalendarItem
                    monthDates={monthDates}
                    month={index}
                    key={`${index}-월`}
                  />
                ),
            )}
        </>
      }
    </MonthsContainer>
  );
}
const MonthsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 768px;
`;
