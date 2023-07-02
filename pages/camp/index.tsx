import getCamps from "@pages/api/getCamps";
import { IsCamp } from "@pages/api/getCampsType";
import Head from "next/head";
import Camp from "@components/Camp/Camp";
import Layout from "components/common/Layout/Layout";

interface IsCampPageProps {
  camps: IsCamp[];
}

export default function CampPage({ camps }: IsCampPageProps) {
  return (
    <>
      <Head>
        <title>캠핑 101 페이지</title>
      </Head>
      <Layout>
        <Camp camps={camps} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const camps = await getCamps();
  return {
    props: { camps },
  };
}
