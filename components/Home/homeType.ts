import { IsCamp } from "@pages/api/getCampsType";
import { IsReviews } from "@pages/api/getReviewsType";

export interface IsHomePageProps {
  reviews: IsReviews;
  camps: IsCamp[];
}
