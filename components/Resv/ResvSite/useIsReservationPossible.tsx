import moment from "moment";
import { useEffect, useState } from "react";

// 다른 예약 데이터들...

const compareStartDate = (캘린더선택시작날짜: any, 예약가능한날짜: any) => {
  if (캘린더선택시작날짜.isBefore(예약가능한날짜)) {
    // startDate가 endDate보다 이전인 경우
    return false;
  }
  if (캘린더선택시작날짜.isSame(예약가능한날짜)) {
    // startDate와 endDate가 동일한 경우
    return true;
  }
  // startDate가 endDate보다 이후인 경우
  return true;
};
const compareEndDate = (캘린더종료날짜: any, 예약가능한날짜: any) => {
  if (캘린더종료날짜.isBefore(예약가능한날짜)) {
    // startDate가 endDate보다 이전인 경우
    return true;
  }
  if (캘린더종료날짜.isSame(예약가능한날짜)) {
    // startDate와 endDate가 동일한 경우
    return true;
  }

  return false;
};

const getAvailableCampSite = (pick: any, reservationData: any) => {
  if (!pick) {
    return null;
  }

  const 예약선택시작날짜 = moment(pick.startDate);
  const 예약선택종료날짜 = moment(pick.endDate);

  const 예약가능한시작날짜 = moment(reservationData.startDate);

  const 예약가능한종료날짜 = moment(reservationData.endDate);

  if (
    compareStartDate(예약선택시작날짜, 예약가능한시작날짜) &&
    compareEndDate(예약선택종료날짜, 예약가능한종료날짜)
  ) {
    return reservationData;
  }
  return null;
};

export default function useIsReservationPossible({
  pick,
  reservationInSiteList,
}: any) {
  const [availableSites, setAvailableSites] = useState<any>(null); // 예약가능한 캠핑장 데이터 날짜

  useEffect(() => {
    if (!typeof window !== undefined && reservationInSiteList) {
      const findResv = reservationInSiteList.find(
        (예약데이터: any) =>
          예약데이터 && getAvailableCampSite(pick, 예약데이터),
      );

      if (findResv) {
        setAvailableSites(findResv);
      } else {
        setAvailableSites(null);
      }
    }

    return () => setAvailableSites(null);
  }, [pick, reservationInSiteList]);
  return availableSites;
}
