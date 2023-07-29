import axiosInstance from "@libs/api/axiosInstance";
import Head from "next/head";
import ReviewDetails from "@components/ReviewDetails/ReviewDetails";
import Layout from "@components/common/Layout/Layout";

export default function CampLogDetailsPage({ data, id }: any) {
  return (
    <>
      <Head>
        <title>캠프리뷰상세페이지</title>
      </Head>
      <Layout>
        <ReviewDetails data={data} id={id} />
      </Layout>
    </>
  );
}

const url = `${process.env.BASE_URL}/camplog/`;

export async function getServerSideProps({ query, res }: any) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59",
  );

  const { id } = query;
  const dynamicPath = `${url} + ${id}`;
  const response = await axiosInstance.get(dynamicPath);
  const data = await response.data;

  return {
    props: { data, id },
  };
}
