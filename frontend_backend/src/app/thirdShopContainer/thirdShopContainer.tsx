import Link from "next/link";
import { thirdShopComponents } from "./data";
import styles from "./thirdShopContainer.module.scss";

export const ThirdShopContainer = () => {
  const ulItems = thirdShopComponents.map((obj, index) => {
    return (
      <li key={index}>
        <div
          className={styles.thirdItemImage}
          style={{ background: `url(${obj.img}) no-repeat center/cover` }}
        ></div>
        <section>
          <h3>{obj.h3}</h3>
          <p>{obj.p}</p>
          <span>
            {obj.span} <s>{obj.spanOld}</s>
          </span>
        </section>
        <div className={styles.thirdOverlay}>
          <Link href="/">Add to cart</Link>
        </div>
      </li>
    );
  });
  return (
    <div className={styles.thirdContainer}>
      <ul>{ulItems}</ul>
    </div>
  );
};
