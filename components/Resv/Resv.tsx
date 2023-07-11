import styled from "@emotion/styled";
import Calendar from "./Calendar/Calendar";
import useCalendarList from "./Calendar/calendarListHook";
import CampBanner from "./CampBanner";
import CampMainInfo from "./CampMainInfo";
import ReviewList from "./ReviewList";

export default function Resv({ campResvDetails }: any) {
  const { campLogInCampList,siteIn } = campResvDetails;
  const { dateList } = useCalendarList();
  return (
    <Container>
      <CampBanner />
      <Calendar calendarDatas={dateList} />
      <CampMainInfo campResvDetails={campResvDetails} />
      <ReviewList reviewList={campLogInCampList} />
    </Container>
  );
}

const Container = styled.div`
  width: 768px;
  margin: auto;
`;
