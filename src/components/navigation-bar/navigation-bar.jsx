import React, { useEffect } from "react";
import styles from "./navigation-bar.module.scss";
import { useState } from "react";
import { Anchor } from "../UI/anchor/anchor";
import { NavigationIco } from "./navigation-ico/navigation-ico";

const AnchorGroup = ({
  anchors,
  clickHandler,
  visibleSections,
  setVisibleSections,
  forceUpdate,
}) => {
  const [clickedId, setClickedId] = useState(-1);

  useEffect(() => {
    if (forceUpdate) setVisibleSections([]);
  }, [forceUpdate]);

  return (
    <>
      {anchors.map((anchor, i) => {
        const id = anchor.id;
        const anchorContent = anchor.content;
        const sectionId = anchor.sectionId;
        const type = anchor.type;
        const icoPath = anchor.icoPath;

        if (type === "image") {
          return (
            <NavigationIco
              key={id}
              content={anchorContent}
              sectionId={sectionId}
              id={i}
              icoPath={icoPath}
              setClickedId={setClickedId}
              clickHandler={clickHandler}
            />
          );
        }
        return (
          <li className={styles["nav-bar__list-item"]} key={id}>
            <Anchor
              id={i}
              clickedId={clickedId}
              sectionId={sectionId}
              content={anchorContent}
              setClickedId={setClickedId}
              clickHandler={clickHandler}
              visibleSections={visibleSections}
              setVisibleSections={setVisibleSections}
              forceUpdate={forceUpdate}
            />
          </li>
        );
      })}
    </>
  );
};

export const NavigationBar = ({
  anchorsData,
  clickHandler,
  visibleSections,
  setVisibleSections,
  forceUpdate,
}) => {
  return (
    <nav className={styles["nav-bar"]}>
      <ul className={styles["nav-bar__list"]}>
        <AnchorGroup
          anchors={anchorsData}
          clickHandler={clickHandler}
          visibleSections={visibleSections}
          setVisibleSections={setVisibleSections}
          forceUpdate={forceUpdate}
        />
      </ul>
    </nav>
  );
};
