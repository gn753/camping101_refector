import Content from "./Content";
import { IsReviewPageProps } from "./reviewType";

export default function Review({ reviews }: IsReviewPageProps) {
  return <div><Content reviews={reviews}/></div>;
}
