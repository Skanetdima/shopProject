import Link from "next/link";
import styles from "./firstShopContainer.module.scss";

export const FirstShopContainer = () => {
  return (
    <div
      className={styles.firstShopContainer}
      style={{ background: "url(/shopPreview.png) no-repeat center/cover" }}
    >
      <Link className={styles.h1Link} href="/shop">
        Shop
      </Link>
      <span>
        <Link href="/">{"Home >"}</Link> Shop
      </span>
    </div>
  );
};
