import Head from "next/head";
import Image from "next/image";
import layoutStyle from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Navbar from "./navbar";

const name = "DA3NAN";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={layoutStyle.bigContainer}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={layoutStyle.header}>
        <Navbar />
      </header>
      <div className={utilStyles.space}></div>
      <div className={utilStyles.space}></div>
      <main className={layoutStyle.container}>{children}</main>
      {!home && (
        <div className={layoutStyle.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
