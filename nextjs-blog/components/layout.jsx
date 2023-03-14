import Head from "next/head";
import layoutStyle from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import homeStyles from "../styles/home.module.css";
import Link from "next/link";
import Navbar from "./navbar";
import ScrollToTop from "./scrollToTop";

export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={layoutStyle.bigContainer}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
      </Head>
      <main className={home ? homeStyles.container : layoutStyle.container}>
        <header className={layoutStyle.header}>
          <Navbar />
        </header>
        <div className={utilStyles.space}></div>
        <div className={utilStyles.space}></div>
        {children}
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
