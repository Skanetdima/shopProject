import React from "react";
import "./Header.scss";

const HeaderComponent = () => {
  return (
    <>
      <header>
        <div className="logoContainer">
          <img src="/favicon.svg" alt="" />
          <span>Furniro</span>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
