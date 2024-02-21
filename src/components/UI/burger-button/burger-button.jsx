import React, {useEffect, useState} from "react";
import styles from "./burger-button.module.scss";

export const BurgerButton = ({click, setClick= false}) => {
    const [type, setType] = useState("open");

    function toggleType() {
        if(type === "open") {
            setType("close");
        }
        else {
            setType("open");
        };
    }

    useEffect(() => {
        if (setClick) setClick(type);
        // console.log(type)
    }, [setClick, type]);

    useEffect(()=> setType(click), [click]
    )

    return (
        <div className={
            type === "open"
            ? styles["burger-button"]
            : `${styles["burger-button"]} ${styles["burger-button_close"]}`} onClick={toggleType}>
            <div className={styles["burger-button__line"]}></div>
            <div className={styles["burger-button__line"]}></div>
            <div className={styles["burger-button__line"]}></div>
        </div>
    )
}