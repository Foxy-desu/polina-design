import React from "react";
import { useState } from "react";
import { Anchor } from "../UI/anchor/anchor";
import styles from "./navigation-bar.module.scss";
import logo from "../../assets/icons/plndsg-logo.svg";

//TODO: move data to state if possible

const AnchorGroup = ({anchors}) => {
    const [clickedId, setClickedId] = useState(-1);

    return (
        <>
        {anchors.map((anchor, i) => {
            const anchorContent = anchor.content;
            const sectionId = anchor.sectionId;
            const type = anchor.type;

            if (type === 'image') {
                return <li className={styles["nav-bar__list-item"]} key={i}>
                    <a id={i} className={styles["nav-bar__logo"]} href={'#' + sectionId} onClick={()=> setClickedId(i)}>
                        <img className={styles["nav-bar__logo-img"]} src={logo} alt={anchorContent}/>
                    </a>
                </li>
            }
            return <li className={styles["nav-bar__list-item"]} key={i}><Anchor id={i} clickedId={clickedId} sectionId={sectionId} content={anchorContent} setClickedId={setClickedId}/></li>
        })}
        </>
    )
}

export const NavigationBar = (props) => {

    return <nav className={styles["nav-bar"]}>
        <ul className={styles["nav-bar__list"]}>
            <AnchorGroup anchors={[{content: "Полина Дизайн логотип", sectionId: "header", type: 'image'},{content: "преимущества", sectionId: "advantages", type: 'anchor'}, {content: "портфолио", sectionId: "portfolio", type: 'anchor'}, {content: "стоимость", sectionId: "prices", type: 'anchor'}]}/>
        </ul>
    </nav>
};