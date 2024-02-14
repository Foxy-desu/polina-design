import React from "react";
import styles from './section-header.module.scss';
import starsV1 from "../../../assets/images/stars-layer-v1.png";
import starsV2 from "../../../assets/images/stars-layer-v2.png";

const SectionHeader = ({content, type = '2'}) => {

    return <div className={styles['section-header']}>
        <h2 className={styles['section-header__text']}>{content}</h2>
        <img className={type === '1'? styles["section-header__decoration_shifted"] : styles["section-header__decoration"]} src={type === '1'? starsV1 : starsV2} alt=""></img>
    </div>
}

export {SectionHeader};