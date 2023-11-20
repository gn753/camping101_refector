import Content from "./Content";
import { IsReviewPageProps } from "./review.interface";

export default function Review({ reviews }: IsReviewPageProps) {
  return (
    <div>
      <Content reviews={reviews} />
    </div>
  );
}
