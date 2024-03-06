import React from "react";
import parse from "html-react-parser";
import styles from "./prices.module.scss";

export const Prices = ({ price, prevPrice }) => {
  return (
    <div className={styles["prices"]}>
      <p className={styles["prices__current"]}>{price + " rub"}</p>
      {prevPrice ? (
        <p className={styles["prices__previous"]}>{prevPrice + " rub"}</p>
      ) : (
        <p
          className={`${styles["prices__previous"]} ${styles["prices__previous_transparent"]}`}
        >
          {parse("&nbsp;")}
        </p>
      )}
    </div>
  );
};
