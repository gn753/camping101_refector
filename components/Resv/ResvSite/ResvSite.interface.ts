export interface IsResvSiteList {
  siteId: number;
  name: string;
  rpImage: string;
  introduction: string;
  type: string;
  openYn: boolean;
  checkIn: string;
  checkOut: string;
  leastScheduling: number;
  siteCapacity: object;
  price: number;
  reservationInSiteList: {
    startDate: string;
    endDate: string;
    reservationId: number;
  }[];
}

export interface Response {
  animalCapable: string;
  businessNo: string;
  campId: number;
  campLogInCampList: [
    {
      campLogId: number;
      campLogName: string;
      createdAt: string;
      description: string;
      image: string;
      memberId: number;
      siteId: number;
      updatedAt: string;
      visitedAt: string;
    },
  ];
  equipmentTools: string;
  facility: string;
  facilityCnt: {
    showerCnt: number;
    toiletCnt: number;
    waterProofCnt: number;
  };
  firstImage: string;
  homepage: string;
  intro: string;
  leisure: string;
  location: {
    addr1: string;
    addr2: string;
    environment: string;
    latitude: string;
    longitude: string;
  };
  manageStatus: string;
  name: string;
  oneLineReserveYn: string;
  openDateOfWeek: string;
  openSeason: string;
  siteInCampList: [
    {
      checkIn: string;
      checkOut: string;
      introduction: string;
      leastScheduling: number;
      name: string;
      openYn: true;
      price: number;
      reservationInSiteList: [
        {
          endDate: string;
          reservationId: number;
          startDate: string;
        },
      ];
      rpImage: string;
      siteCapacity: any;
      siteId: number;
      type: string;
    },
  ];
  tel: string;
}
