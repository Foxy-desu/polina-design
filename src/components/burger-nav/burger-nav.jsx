import React, { useCallback, useEffect, useState } from "react";
import styles from "./burger-nav.module.scss";
import { BurgerButton } from "../UI/burger-button/burger-button";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { SocialList } from "../UI/social-list/social-list";

const NavBtn = ({ setClickWrap, click }) => {
  return (
    <div className={styles["navigation__btn"]}>
      <BurgerButton setClick={setClickWrap} click={click} />
    </div>
  );
};
const NavMenu = ({
  anchorsData,
  clickHandler,
  click,
  visibleSections,
  setVisibleSections,
  forceUpdate,
  socialData,
}) => {
  return (
    <div
      className={
        click === "open"
          ? styles["navigation__menu"]
          : `${styles["navigation__menu"]} ${styles["navigation__menu_active"]}`
      }
    >
      <NavigationBar
        anchorsData={anchorsData}
        clickHandler={clickHandler}
        visibleSections={visibleSections}
        setVisibleSections={setVisibleSections}
        forceUpdate={forceUpdate}
      />
      <div className={styles["navigation__socials"]}>
        <SocialList socialData={socialData} clickHandler={clickHandler} />
      </div>
    </div>
  );
};
export const BurgerNav = ({
  anchorsData,
  socialData,
  setPos = false,
  visibleSections,
  setVisibleSections,
  forceUpdate,
}) => {
  const [click, setClick] = useState("open");
  const setClickWrap = useCallback((val) => setClick(val), [setClick]);

  useEffect(() => {
    if (setPos) setPos(click);
    console.log(click);
  }, [setPos, click]);

  function clickHandler() {
    if (click === "close") {
      setClick("open");
    } else return;
  }

  return (
    <div className={styles["navigation"]}>
      <NavBtn setClickWrap={setClickWrap} click={click} />
      <NavMenu
        anchorsData={anchorsData}
        clickHandler={clickHandler}
        click={click}
        visibleSections={visibleSections}
        setVisibleSections={setVisibleSections}
        forceUpdate={forceUpdate}
        socialData={socialData}
      />
    </div>
  );
};
