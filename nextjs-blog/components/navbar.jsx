import React from "react";
import Image from "next/image";
import Link from "next/link";
import navbarStyle from "./navbar.module.css";
import utilStyles from "../styles/utils.module.css";
import logo from "/public/blob.svg";
import { useState, useEffect } from "react";

export default function navbar() {
  const logoName = "Techist AI";
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const nav = document.getElementById("navbar");
    if (clientWindowHeight >= 20) {
      nav.classList.add(navbarStyle.activeNavbar);
    } else {
      nav.classList.remove(navbarStyle.activeNavbar);
    }
  });
  return (
    <div className={navbarStyle.navbar} id="navbar">
      <div>
        <Link href="/" className={navbarStyle.logo}>
          <Image src={logo} width={50} height={50} alt="" />
          <h1 className={navbarStyle.title}>{logoName}</h1>
        </Link>
      </div>
      <div className={navbarStyle.links}>
        <ul>
          <Link href="/" className={navbarStyle.item}>
            <li>Home</li>
          </Link>
          <Link href="/" className={navbarStyle.item}>
            <li>Discover</li>
          </Link>
          <Link href="/" className={navbarStyle.item}>
            <li>About</li>
          </Link>
          <Link href="/" className={navbarStyle.item}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className={navbarStyle.sign}>
        <Link href="/" className={navbarStyle.item}>
          <button className={utilStyles.buttonStyle1}>Sign in</button>
        </Link>
        <Link href="/" className={navbarStyle.item}>
          <button className={utilStyles.buttonStyle2}>Sign up</button>
        </Link>
      </div>
    </div>
  );
}
