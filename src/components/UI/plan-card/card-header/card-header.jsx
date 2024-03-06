import React from "react";
import styles from "./card-header.module.scss";

export const CardHeader = ({ content, discount }) => {
  return (
    <div className={styles["card-header"]}>
      <h3 className={styles["card-header__header"]}>{content}</h3>
      {discount && +discount > 0 ? (
        <p className={styles["card-header__discount"]}>
          {"-" + discount + "%"}
        </p>
      ) : (
        false
      )}
    </div>
  );
};
