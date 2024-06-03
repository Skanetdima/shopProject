import React from "react";
import "./Header.scss";

const HeaderComponent = () => {
  return (
    <>
      <header>
        <div className="headerLogoContainer">
          <img src="/favicon.svg" alt="" />
          <span>Furniro</span>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
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
