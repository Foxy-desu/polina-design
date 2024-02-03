import React from "react";
import styles from './Section-header.module.scss';
import starsV1 from "../../../assets/images/stars-layer-v1.png";
import starsV2 from "../../../assets/images/stars-layer-v2.png";

const SectionHeader = (props) => {
    const {content, version = '2'} = props;

    return <div className={styles['section-header']}>
        <h2 className={styles['section-header__text']}>{content}</h2>
        <img className={version === '1'? styles["section-header__decoration_shifted"] : styles["section-header__decoration"]} src={version === '1'? starsV1 : starsV2} alt=""></img>
    </div>
}

export {SectionHeader};