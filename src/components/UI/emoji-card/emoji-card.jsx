import React from "react";
import styles from "./emoji-card.module.scss";

export const EmojiCard = ({ content, type = "plain" }) => {
  return (
    <div
      className={`${styles["emoji-card"]}${type === "plain" ? "" : " " + styles["emoji-card_designed"]}`}
    >
      <p
        className={`${styles["emoji-card__content"]}${type === "plain" ? "" : " " + styles["emoji-card__content_designed"]}`}
      >
        {content}
      </p>
      <div
        className={`${styles["emoji"]}${type === "plain" ? "" : " " + styles["emoji_designed"]}`}
      ></div>
    </div>
  );
};
