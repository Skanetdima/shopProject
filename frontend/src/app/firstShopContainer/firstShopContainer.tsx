import styles from "./firstShopContainer.module.scss";

export const FirstShopContainer = () => {
  return (
    <div
      className={styles.firstContainer}
      style={{ background: "url(/shopPreview.png) no-repeat center/cover" }}
    >
      <h1>Shop</h1>
      <span>
        <b>{"Home >"}</b> Shop
      </span>
    </div>
  );
};
