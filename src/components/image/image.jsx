import React from "react";
import styles from "./image.module.scss";
import heroImage from "../../assets/images/hero-img.svg";


export const Image = (props) => {

    return (
        < div className={styles["image"]} id="card-design">
            <img className={styles["image__main-text"]} src={heroImage} alt="Эффектный дизайн"/>
            <div className={styles["image__block-wrap"]}>
                <div className={styles["image__add-block"]}>DИZАЙN</div>
            </div>
        </div>
    )
}