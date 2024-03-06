import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./anchor.module.scss";

export const Anchor = ({
  sectionId,
  content,
  clickHandler,
  visibleSections,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionId;
    if (visibleSections[visibleSections.length-1] === section) {
    // if (visibleSections.includes(section)) { -not good enough for burger menu
      setIsVisible(true);
    } else
      setTimeout(() => {
        setIsVisible(false);
      }, 150);
  });
  function handleCheck() {
    //hide burger menu on click
    if (clickHandler) clickHandler();
    else return;
  }
  return (
    <div
      className={`${isVisible === true ? styles["anchor"] + " " + styles["anchor_active"] : styles["anchor"]}`}
      onClick={() => {
        handleCheck();
      }}
    >
      <Link className={styles["anchor__link"]} to={`/#${sectionId}`}>
        {content}
      </Link>
    </div>
  );
};
