import Head from "next/head";
import User from "@components/User/User";
import Header from "@components/common/Layout/Header";
import Layout from "@components/common/Layout/Layout";

export default function UserPage() {
  return (
    <>
      <Head>
        <title>유저 정보 페이지</title>
      </Head>
      <Header />
      <User />
    </>
  );
}
