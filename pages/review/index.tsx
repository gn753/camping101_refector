import getReviews from "@pages/api/getReviews";
import { IsReviews } from "@pages/api/getReviewsType";
import Head from "next/head";
import Review from "@components/Review/Review";
import Layout from "@components/common/Layout/Layout";

interface IsReviewPageProps {
  reviews: IsReviews;
}
export default function ReviewPage({ reviews }: IsReviewPageProps) {
  return (
    <>
      <Head>
        <title>캠핑 101 페이지</title>
      </Head>
      <Layout>
        <Review reviews={reviews} />
      </Layout>
    </>
  );
}
export async function getServerSideProps() {
  const reviews = await getReviews();
  return {
    props: { reviews },
  };
}
