import React from "react";
import styles from "./all-prices.module.scss";
import {SectionHeader} from "../../components/UI/section-header/section-header";

export const AllPricesScreen = ({allPricesData}) => {

    return (
        <section className={styles["all-prices"]} id="all-prices">
            <div className={styles["gradient"]}></div>
            <div className={styles["content-wrap"]}>
                <div className={styles["all-prices__header"]}>
                    <SectionHeader content={allPricesData.header.content} type={allPricesData.header.type}/>
                </div>
                <ul className={styles["all-prices__list"]}>
                    цены
                </ul>
            </div>
        </section>
    )
}