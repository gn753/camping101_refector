import Head from "next/head";
import Login from "@components/Login/Login";
import Header from "@components/common/Layout/Header";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>캠핑 101 로그인 페이지</title>
      </Head>
      <>
        <Header />
        <Login />
      </>
    </>
  );
}
