import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function FirstPost() {
  return (
    <Layout FirstPost>
      <Head>
        <title>First Post</title>
      </Head>
      <section className={utilStyles.heading2Xl}>First Post</section>
    </Layout>
  );
}
