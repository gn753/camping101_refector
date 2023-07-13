import styled from "@emotion/styled";
import Calendar from "./Calendar/Calendar";
import useCalendarList from "./Calendar/useCalendarList";
import CampBanner from "./CampBanner";
import CampMainInfo from "./CampMainInfo";
import ResvSite from "./ResvSite/ResvSite";
import ReviewList from "./ReviewList";

export default function Resv({ campResvDetails }: any) {
  const { campLogInCampList, siteInCampList } = campResvDetails;
  const { dateList } = useCalendarList();
  return (
    <Container>
      <CampBanner />
      <CampMainInfo campResvDetails={campResvDetails} />
      <Calendar calendarDatas={dateList} />
      <ResvSite resvList={siteInCampList} />
      <ReviewList reviewList={campLogInCampList} />
    </Container>
  );
}

const Container = styled.div`
  width: 768px;
  margin: auto;
`;
