import React from "react";
import styles from "./intro.module.scss";
import { PhotoFrame } from "../UI/photo-frame/photo-frame";

export const Intro =({cardsData, infoBlockData})=> {
    const plain = cardsData.plain;
    const designed = cardsData.designed;

    return (
        <div className={styles["intro"]}>
            <h1 className={styles["intro__header"]}>Карточки товаров</h1>
            <div className={styles["intro__content-wrap"]}>
                <div className={styles["intro__content"]}>
                    <div className={styles["cards"]}>
                        <div className={`${styles["cards__plain-card"]} ${styles["card-wrap"]}`}>
                            <PhotoFrame path={plain.path} info={plain.info} type='plain'/>
                        </div>
                        <div className={`${styles["cards__designed-card"]} ${styles["card-wrap"]}`}>
                            <PhotoFrame path={designed.path} info={designed.info} type='designed'/>
                        </div>
                    </div>
                    <div className={styles["intro__info-wrap"]}>
                        infoblock
                        arrow
                    </div>
                </div>
            </div>
        </div>
    )
}