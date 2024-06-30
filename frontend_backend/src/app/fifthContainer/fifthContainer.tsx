import styles from "./fifthContainer.module.scss";
import { fifthData } from "./data";

export const FifthContainer = () => {
  const divItems = fifthData.map((obj, index) => {
    return (
      <div
        className={styles.divIconContainer}
        style={{ background: `url(${obj.icon}) no-repeat center/cover` }}
        key={index}
      ></div>
    );
  });
  return (
    <div className={styles.fifthContainer}>
      <span>Great</span>
      <h2>#FuniroFurniture</h2>
      {divItems}
    </div>
  );
};
