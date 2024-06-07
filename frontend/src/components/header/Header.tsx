import React from "react";
import { Poppins } from "next/font/google";
import "./Header.scss";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const HeaderComponent = () => {
  return (
    <>
      <header className={poppins.className}>
        <div className="headerLogoContainer">
          <img src="/favicon.svg" alt="" />
          <span>Furniro</span>
        </div>
        <nav>
          <Link href="/">Home</Link>
          <a href="#">Shop</a>
          <Link href="/about">About</Link>
          <a href="#">Contact</a>
        </nav>
        <div className="headerUserInfo">
          <a
            style={{
              background:
                "url(/account-alert-outline.svg) no-repeat center/contain",
            }}
            href="#"
          ></a>
          <a
            style={{
              background: "url(/header-search.svg) no-repeat center/contain",
            }}
            href="#"
          ></a>
          <a
            style={{
              background: "url(/header-heart.svg) no-repeat center/contain",
            }}
            href="#"
          ></a>
          <a
            style={{
              background: "url(/header-shop.svg) no-repeat center/contain",
            }}
            href="#"
          ></a>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
