import React from "react";
import styles from "./prices.module.scss";

const Prices = (props) => {
    const {price, prevPrice} = props;

    return <div className={styles["prices"]}>
        <p className={styles["prices__current"]}>{price + ' rub'}</p>
        {prevPrice ? <p className={styles["prices__previous"]}>{prevPrice + ' rub'}</p> : false}
    </div>
};

export {Prices};