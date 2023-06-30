import Head from "next/head";
import Join from "@components/Join/Join";
import Layout from "@components/common/Layout/Layout";

export default function JoinPage() {
  return (
    <>
      <Head>
        <title>캠핑 101 페이지</title>
      </Head>
      <Layout>
        <Join />
      </Layout>
    </>
  );
}
