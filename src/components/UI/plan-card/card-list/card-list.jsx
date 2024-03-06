import React from "react";
import { CardListItem } from "./card-list-item/card-list-item.jsx";
import styles from "./card-list.module.scss";

export const CardList = ({ content }) => {
  function createComponentKey(str) {
    return str
      .split("")
      .reduce(
        (prevHash, currVal) =>
          ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
        0,
      );
  }
  function listPerks(perks) {
    return perks.map((perk) => {
      const hashed = createComponentKey(perk);
      return <CardListItem content={perk} key={hashed} />;
    });
  }

  return <ul className={styles["card-list"]}>{listPerks(content)}</ul>;
};
