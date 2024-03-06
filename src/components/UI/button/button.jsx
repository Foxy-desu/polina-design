import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.scss";

//TODO: the component is dirty. make it clear
export const Button = ({
  content,
  type = "",
  path,
  btnId = false,
  addToLocal = false,
}) => {
  const additionalStyle = getStyle(checkType(type));
  function checkType(type) {
    const types = {
      colored: "btn_colored",
      lg: "btn_colored_lg",
    };

    for (let [key, value] of Object.entries(types)) {
      if (key === type) return value;
    }
    return "";
  }
  function getStyle(type) {
    if (type === "") return "";
    return styles[type];
  }
  if (addToLocal !== false) {
    return (
      <Link
        className={`${styles.btn}${" " + additionalStyle}`}
        to={path}
        onClick={() => {
          addToLocal(btnId);
        }}
      >
        {content}
      </Link>
    );
  }

  return (
    <Link className={`${styles.btn}${" " + additionalStyle}`} to={path}>
      {content}
    </Link>
  );
};
