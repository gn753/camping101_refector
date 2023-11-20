export interface IsGetResvList {
  memberId: number;
  reservationId: number;
  siteId: number;
  siteName: string;
  startDate: string;
  endDate: string;
  humanCapacity: number;
  status: string;
  payment: number;
  createdAt: string;
  cancelAt: object;
  campLogYn: boolean;
  campLogWritableYn: boolean;
}
