import Image from "next/image";
import { Outfit } from "next/font/google";
import styles from "@/styles/Home.module.css";
import layoutStyles from "@/styles/Layout.module.css";
import Layout from "@/components/Layout";
import hero from "/public/hero.png";
import logo1 from "/public/logo1.png";
import logo2 from "/public/logo2.png";
import logo3 from "/public/logo3.png";
import logo4 from "/public/logo4.png";

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
            <div className={layoutStyles.spacer}></div>
            <div className={styles.heroButtons}>
              <button className={styles.btn1}>Buy Ntfs</button>
              <button className={styles.btn2}>Sell Ntfs</button>
            </div>
          </div>
          <div className={styles.image}>
            <Image src={hero} width={500} alt="hero" />
          </div>
        </div>
        <div className={layoutStyles.spacer}></div>
        <div className={layoutStyles.spacer}></div>
        <div className={styles.sponsors}>
          <h2 className={layoutStyles.subHeading}>Featured On</h2>
          {/* <div className={layoutStyles.spacer}></div> */}
          <div className={styles.logos}>
            <Image src={logo1} alt="logo1" />
            <Image src={logo2} alt="logo2" />
            <Image src={logo3} alt="logo3" />
            <Image src={logo4} alt="logo4" />
          </div>
        </div>
      </main>
    </Layout>
  );
}
