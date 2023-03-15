import React from "react";
import layoutStyle from "../styles/layout.module.css";
import { useState, useEffect } from "react";
import ArrowUp from "../components/arrowUp";

export default function scrollToTop() {
  const isBrowser = () => typeof window !== "undefined";
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const gotop = document.getElementById("gotop");

    if (clientWindowHeight >= 100) {
      gotop.classList.add(layoutStyle.goTopActive);
    } else {
      gotop.classList.remove(layoutStyle.goTopActive);
    }
  });
  return (
    <div id="gotop" className={layoutStyle.goTop} onClick={scrollToTop}>
      <i class="bx bxl-facebook-square">
        <ArrowUp />
      </i>
    </div>
  );
}
