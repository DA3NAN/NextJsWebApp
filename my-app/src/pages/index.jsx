import Image from "next/image";
import { Outfit } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import hero from "/public/hero.svg";

export default function Home() {
  return (
    <Layout>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className={styles.blob3}></div>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.content}>
            <div className={styles.bigTitle}>
              Discover And Collect Rare NTFs
            </div>
            <p className={styles.heroDescription}>
              The most secure marketplace for buying and selling unique crypto
              assets.
            </p>
          </div>
          <div className={styles.image}></div>
        </div>
      </main>
    </Layout>
  );
}
