import React from "react";
import styles from "./all-prices.module.scss";
import {SectionHeader} from "../../components/UI/section-header/section-header";
import {Button} from "../../components/UI/button/button";

export const AllPricesScreen = ({allPricesData}) => {

    function renderPrices(plans) {
        return plans.map((plan)=> {
            return <li key={plan.id} className={styles["all-prices__list-item"]}><span className={styles["accent"]}>{plan.planName}</span> - <span>{plan.price}</span> руб.</li>
        })
    }

    return (
        <section className={styles["all-prices"]} id="all-prices">
            <div className={styles["gradient"]}></div>
            <div className={styles["content-wrap"]}>
                <div className={styles["all-prices__header"]}>
                    <SectionHeader content={allPricesData.sectionHeading.content} type={allPricesData.sectionHeading.type}/>
                </div>
                <ul className={styles["all-prices__list"]}>
                    {renderPrices(allPricesData.plans)}
                </ul>
                <div className={styles["all-prices__btns"]}>
                    <Button content={"на главную"} path={"/"}></Button>
                </div>
            </div>
        </section>
    )
}