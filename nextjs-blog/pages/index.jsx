import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import homeStyles from "../styles/home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const size = useWindowSize();
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section
        className={
          size.width >= 1100
            ? utilStyles.heading2Xl
            : size.width >= 900
            ? utilStyles.headingXl
            : utilStyles.headingMd
        }
      >
        <div className={homeStyles.bigTitle}>
          <h1>
            Welcome to The New World <br />
            Take the Adventure
          </h1>
        </div>
        <Link href="./posts/firstPost">
          <button className={utilStyles.buttonStyle3}>
            <box-icon name="chevron-right"></box-icon> Discover more
          </button>
        </Link>
      </section>
      <div className={utilStyles.space}></div>
      <div className={utilStyles.space}></div>
      <div className={utilStyles.headingMd}>
        <h2>Get to know us</h2>
      </div>
      <section className={utilStyles.headingMd}>
        <div className={homeStyles.card}>
          <p className={homeStyles.description}>
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
        <div className={utilStyles.miniSpace}></div>
        <div className={utilStyles.miniSpace}></div>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <div className={utilStyles.space}></div>
      <div className={utilStyles.space}></div>
    </Layout>
  );
}
