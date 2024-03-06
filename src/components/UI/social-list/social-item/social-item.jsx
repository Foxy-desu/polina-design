import React from "react";
import useImage from "../../../../custom-hooks/use-image";
import styles from "./social-item.module.scss";

export const SocialItem = ({ link, name, iconPath, clickHandler = false }) => {
  const { loading, image } = useImage(iconPath);

  function handleCheck() {
    if (clickHandler) clickHandler();
  }
  return (
    <li className={styles["social-item"]} onClick={handleCheck}>
      {loading ? (
        "загрузка"
      ) : (
        <a className={styles["social-item__link"]} href={link}>
          <img
            className={styles["social-item__image"]}
            src={image}
            alt={name}
          />
        </a>
      )}
    </li>
  );
};
