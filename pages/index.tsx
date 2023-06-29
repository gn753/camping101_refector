import Head from "next/head";
import Home from "components/Home/Home";
import Layout from "components/common/Layout/Layout";
import getCamps from "./api/getCamps";
import { IsCamp } from "./api/getCampsType";
import getReviews from "./api/getReviews";
import { IsReviews } from "./api/getReviewsType";

interface IsHomePageProps {
  reviews: IsReviews;
  camps: IsCamp[];
}

export default function HomePage({ camps, reviews }: IsHomePageProps) {
  return (
    <>
      <Head>
        <title>캠핑 101 페이지</title>
      </Head>
      <Layout>
        <Home reviews={reviews} camps={camps} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const camps = await getCamps();
  const reviews = await getReviews();
  return {
    props: { camps, reviews },
  };
}
