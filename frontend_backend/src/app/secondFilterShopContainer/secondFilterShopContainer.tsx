import React, { useEffect, useRef, useState } from "react";
import styles from "./secondFilterShopContainer.module.scss";

export const SecondFilterShopContainer: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(16);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputTextValue, setInputTextValue] = useState<string>("Default");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      setInputValue(newValue);
    }
  };

  useEffect(() => {
    const disableScroll = (e: Event) => {
      e.preventDefault();
    };

    const inputElement = inputRef.current;
    if (inputElement) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
          disableScroll(e);
        }
      };

      inputElement.addEventListener("wheel", disableScroll);
      inputElement.addEventListener("keydown", handleKeyDown);

      // Cleanup event listeners on component unmount
      return () => {
        inputElement.removeEventListener("wheel", disableScroll);
        inputElement.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, []);

  return (
    <div className={styles.secondFilterShopContainer}>
      <div className={styles.secondFilterSection}>
        <button className={styles.secondFilterButton}>
          <div
            className=""
            style={{
              background: "url(/secondFilterImg.svg) no-repeat center/contain",
              width: "1.25vw",
              height: "1.25vw",
            }}
          ></div>{" "}
          Filter
        </button>
        <div className={styles.secondFilterViewOptions}>
          <button className={styles.secondFilterGrid}>
            <div
              style={{
                background:
                  "url(/secondFilterGrid.svg) no-repeat center/contain",
                width: "1vw",
                height: "1vw",
              }}
            ></div>
          </button>
          <button className={styles.secondFilterList}>
            <div
              style={{
                background:
                  "url(/secondFilterList.svg) no-repeat center/contain",
                width: "1vw",
                height: "1vw",
              }}
            ></div>
          </button>
        </div>
        <span className={styles.secondResultsInfo}>
          Showing 1–16 of 32 results
        </span>
      </div>
      <div className={styles.secondShowSortSection}>
        <label>Show</label>
        <input
          type="number"
          id={styles.secondShow}
          value={inputValue}
          min="1"
          max="100"
          onChange={handleChange}
          ref={inputRef}
        />
        <label>Sort by</label>
        <input
          type="string"
          id={styles.secondSortBy}
          value={inputTextValue}
          onChange={(e) => {
            let newValue = e.target.value;
            setInputTextValue(newValue);
          }}
        />
      </div>
    </div>
  );
};
