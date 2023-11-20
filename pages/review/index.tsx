import getReviews from "@pages/api/getReviews";
import { IsReviews } from "@pages/api/getReviews.interface";
import Head from "next/head";
import Review from "@components/Review/Review";

interface IsReviewPageProps {
  reviews: IsReviews;
}
export default function ReviewPage({ reviews }: IsReviewPageProps) {
  return (
    <>
      <Head>
        <title>캠핑 101 페이지</title>
      </Head>

      <Review reviews={reviews} />
    </>
  );
}
export async function getServerSideProps() {
  const reviews = await getReviews();
  return {
    props: { reviews },
  };
}
