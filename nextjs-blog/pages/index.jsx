import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import homeStyles from "../styles/Home.module.css";
import indexStyle from "./index.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.space}></div>
      <section className={utilStyles.heading2Xl}>
        <div className={indexStyle.bigTitle}>
          <h1>
            Welcome to The <font className={indexStyle.difColor2}>New</font>{" "}
            World <br />
            Take the <font className={indexStyle.difColor1}>Adventure</font>
          </h1>
        </div>
        <Link href="./posts/firstPost">
          <button className={utilStyles.buttonStyle3}>See my first post</button>
        </Link>
      </section>
      <div className={utilStyles.space}></div>
      <div className={utilStyles.headingMd}>
        <h2>Get to know us</h2>
      </div>
      <section className={utilStyles.headingMd}>
        <div className={indexStyle.card}>
          <p className={indexStyle.description}>
            Techist AI is a cutting-edge startup founded by a team of experts in
            the field of AI and computer science, with a mission to provide
            innovative AI solutions to businesses across various industries. The
            company is dedicated to staying at the forefront of technology,
            leveraging the latest advancements in AI and computer science to
            create intelligent and efficient solutions. Techist AI also provides
            training and consulting services to help clients understand the
            potential of AI and how it can be applied to their operations. Their
            team of experts works closely with clients to identify areas where
            AI can add value and develop a roadmap for implementation.
          </p>
        </div>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
