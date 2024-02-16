import React from "react";
import styles from "./intro.module.scss";
import { PhotoFrame } from "../UI/photo-frame/photo-frame";
import { EmojiCard } from "../UI/emoji-card/emoji-card";
import { InformationBlock } from "../UI/information-block/information-block";

export const Intro =({introData})=> {
    const header = introData.sectionHeading;
    const plain = introData.cards.plain;
    const designed = introData.cards.designed;
    const description = introData.description;

    return (
        <div className={styles["intro"]}>
            <h1 className={styles["intro__header"]}>{header.content}</h1>
            <div className={styles["intro__content-wrap"]}>
                <div className={styles["intro__content"]}>
                    <div className={styles["cards"]}>
                        <div className={`${styles["cards__plain-card"]} ${styles["card-wrap"]}`}>
                            <EmojiCard type={plain.type} content={plain.cardDesc}/>
                            <PhotoFrame path={plain.path} info={plain.info} type={plain.type}/>
                        </div>
                        <div className={styles["cards__transform-arrow"]}>
                        </div>
                        <div className={`${styles["cards__designed-card"]} ${styles["card-wrap"]}`}>
                            <EmojiCard type={designed.type} content={designed.cardDesc}/>
                            <PhotoFrame path={designed.path} info={designed.info} type={designed.type}/>
                            <div className={styles["intro__arrow"]}></div>
                        </div>
                    </div>
                    <div className={styles["intro__info-wrap"]}>
                        <InformationBlock heading={description.heading} description={description.description} descType={description.descType}/>
                    </div>
                </div>
            </div>
        </div>
    )
}