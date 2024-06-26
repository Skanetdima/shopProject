import Link from "next/link";
import { thirdComponents } from "./data";
import "./thirdContainer.scss";

export const ThirdContainer = () => {
  const ulItems = thirdComponents.map((obj, index) => {
    return (
      <li key={index}>
        <div
          className="thirdItemImage"
          style={{ background: `url(${obj.img}) no-repeat center/cover` }}
        ></div>
        <section>
          <h3>{obj.h3}</h3>
          <p>{obj.p}</p>
          <span>
            {obj.span} <s>{obj.spanOld}</s>
          </span>
        </section>
        <div className="thirdOverlay">
          <Link href="/">Add to cart</Link>
        </div>
      </li>
    );
  });
  return (
    <div className="thirdContainer">
      <h2>Our Products</h2>
      <ul>{ulItems}</ul>
      <Link href="/shop">Show More</Link>
    </div>
  );
};
