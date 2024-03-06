import React from "react";
import styles from "./social-list.module.scss";
import { SocialItem } from "./social-item/social-item";

export const SocialList = ({ socialData, clickHandler }) => {
  function listItems(socialData) {
    return socialData.map((social) => {
      return (
        <SocialItem
          link={social.link}
          name={social.name}
          iconPath={social.iconPath}
          clickHandler={clickHandler}
        />
      );
    });
  }

  return <ul className={styles["social-list"]}>{listItems(socialData)}</ul>;
};
