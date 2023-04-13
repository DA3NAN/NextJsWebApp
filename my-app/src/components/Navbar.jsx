import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">krypto</Link>
      </div>
      <div className={styles.links}>
        <ul>
          <Link href="#">
            <li className={styles.link}>about</li>
          </Link>
          <Link href="#">
            <li className={styles.link}>princing</li>
          </Link>
          <Link href="#">
            <li className={styles.link}>contact</li>
          </Link>
          <Link href="#" className={styles.pop}>
            <div className={styles.dot}></div>
            <li>buy ntf</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
