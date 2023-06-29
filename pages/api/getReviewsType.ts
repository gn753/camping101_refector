export interface IsReviews {
  total: number;
  pageNumber: number;
  recordSize: number;
  campLogs: IsReviewDetails[];
}
export interface IsReviewDetails {
  campLogId: number;
  writerEmail: string;
  writerNickName: string | null;
  siteId: number;
  visitedAt: string;
  visitedWith: string;
  recTags: object;
  title: string;
  description: any;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  like: number;
  view: number;
  createdAt: string;
  updatedAt: string | null;
}
