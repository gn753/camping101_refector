export interface IsCamp {
  animalCapable: string;
  campId: number;
  campName: string;
  firstImage: string;
  intro: string;
  location: {
    addr1: string;
    addr2: string;
    environment: string;
    latitude: string;
    longitude: string;
  };
  manageStatus: string;
  openSeason: string;
  campLogCnt: number;
}
