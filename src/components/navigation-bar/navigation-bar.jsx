import React from "react";
import { useState } from "react";
import { Anchor } from "../UI/anchor/anchor";
import styles from "./navigation-bar.module.scss";
import { NavigationIco } from "./navigation-ico/navigation-ico";


const AnchorGroup = ({anchors, clickHandler, visibleSections}) => {
    const [clickedId, setClickedId] = useState(-1);

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
                    <NavigationIco key={id} content={anchorContent} sectionId={sectionId} icoPath={icoPath} id={i} setClickedId={setClickedId} clickHandler={clickHandler}/>
                )
            }
            return (
                <li className={styles["nav-bar__list-item"]} key={id}>
                    <Anchor id={i} clickedId={clickedId} sectionId={sectionId} content={anchorContent} setClickedId={setClickedId} clickHandler={clickHandler} visibleSections={visibleSections}/>
                </li>
            )
        })}
        </>
    )
}

export const NavigationBar = ({anchorsData, clickHandler, visibleSections}) => {

    return <nav className={styles["nav-bar"]}>
        <ul className={styles["nav-bar__list"]}>
            <AnchorGroup anchors={anchorsData} clickHandler={clickHandler} visibleSections={visibleSections}/>
        </ul>
    </nav>
};