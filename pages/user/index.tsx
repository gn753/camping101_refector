import Head from "next/head";
import User from "@components/User/User";

export default function UserPage() {
  return (
    <>
      <Head>
        <title>유저 정보 페이지</title>
      </Head>
      <User />
    </>
  );
}
