import React from "react";
import parse from "html-react-parser";
import styles from "./card-list-item.module.scss";

export const CardListItem = ({ content }) => {
  function addLineBreak(itemContent) {
    const formated = itemContent.includes(":")
      ? parse(itemContent.replace(": ", ":<br/>"))
      : itemContent;

    return formated;
  }

  return <li className={styles["card-list__item"]}>{addLineBreak(content)}</li>;
};
