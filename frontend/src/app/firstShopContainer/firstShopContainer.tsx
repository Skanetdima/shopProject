import styles from "./firstShopContainer.module.scss";

export const FirstShopContainer = () => {
  return (
    <div
      className={styles.firstShopContainer}
      style={{ background: "url(/shopPreview.png) no-repeat center/cover" }}
    >
      <a className={styles.h1Link} href="/shop">
        Shop
      </a>
      <span>
        <a href="/">{"Home >"}</a> Shop
      </span>
    </div>
  );
};
