import getCamps from "@pages/api/getCamps";
import { IsCamp } from "@pages/api/getCampsType";
import Head from "next/head";
import Camp from "@components/Camp/Camp";

interface IsCampPageProps {
  camps: IsCamp[];
}

export default function CampPage({ camps }: IsCampPageProps) {
  return (
    <>
      <Head>
        <title>캠핑 101 페이지</title>
      </Head>

      <Camp camps={camps} />
    </>
  );
}

export async function getServerSideProps() {
  const camps = await getCamps();
  return {
    props: { camps },
  };
}
