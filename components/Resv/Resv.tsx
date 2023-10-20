import styled from "@emotion/styled";
import Calendar from "./Calendar/Calendar";
import CampBanner from "./CampBanner";
import CampMainInfo from "./CampMainInfo";
import ResvSite from "./ResvSite/ResvSite";
import ReviewList from "./ReviewList";

export default function Resv({ campResvDetails }: any) {
  const { campLogInCampList, siteInCampList } = campResvDetails;

  return (
    <Container>
      <CampBanner />
      <CampMainInfo campResvDetails={campResvDetails} />
      <Calendar reservationData={siteInCampList[0].reservationInSiteList} />
      <ResvSite resvList={siteInCampList} />
      <ReviewList reviewList={campLogInCampList} />
    </Container>
  );
}

const Container = styled.div`
  width: 768px;
  margin: auto;
`;
