import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
// import Script from "next/script";s

export default function FirstPost() {
  return (
    <Layout FirstPost>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  );
}
