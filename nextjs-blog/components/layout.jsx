import Head from "next/head";
import layoutStyle from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import homeStyles from "../styles/home.module.css";
import Link from "next/link";
import Navbar from "./navbar";
import MiniNavbar from "./miniNavbar";
import ScrollToTop from "./scrollToTop";
import { useState, useEffect } from "react";

export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
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
    <div className={layoutStyle.bigContainer}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className={home ? homeStyles.container : layoutStyle.container}>
        <header className={layoutStyle.header}>
          {size.width >= 1100 ? <Navbar /> : <MiniNavbar />}
        </header>
        <div className={utilStyles.space}></div>
        {size.width >= 1100 ? <div className={utilStyles.space}></div> : <></>}
        {children}
        <div>
          {size.width}px / {size.height}px
        </div>
        {!home && (
          <div className={layoutStyle.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
        <ScrollToTop />
      </main>
    </div>
  );
}
