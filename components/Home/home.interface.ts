import { IsCamp } from "@pages/api/getCamps.interface";
import { IsReviews } from "@pages/api/getReviews.interface";

export interface IsHomePageProps {
  reviews: IsReviews;
  camps: IsCamp[];
}
