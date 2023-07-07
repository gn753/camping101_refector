import getCampResvDetails from "@pages/api/getCampResvDetails ";
import Head from "next/head";
import Resv from "@components/Resv/Resv";
import Layout from "components/common/Layout/Layout";

export default function ResvPage({ campResvDetails }: any) {
  return (
    <>
      <Head>
        <title>캠핑 101 페이지</title>
      </Head>
      <Layout>
        <Resv campResvDetails={campResvDetails} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ query }: any) {
  const { id } = query;
  const campResvDetails = await getCampResvDetails(id);
  return {
    props: { campResvDetails },
  };
}
