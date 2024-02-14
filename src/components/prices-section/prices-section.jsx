import React from "react";
import styles from "./prices-section.module.scss";
import { PlanCard } from "../UI/plan-card/plan-card";
import { SectionHeader } from "../UI/section-header/section-header";
import { Button } from "../UI/button/button";

export const PricesSection = ({pricesData}) => {
    const header = pricesData.sectionHeading;
    const plans = pricesData.plans;

    function renderPlans(plans) {
        return (
            plans.map((plan)=> {
                return (
                <li key={plan.id} className={styles["prices__list-item"]}>
                    <PlanCard planName={plan.planName} perks={plan.perks} price={plan.price} prevPrice={plan.prevPrice} discount={plan.discount} type={plan.type}/>
                </li>
                )
            })
        )
    }

    return (
        <section className={styles["prices"]} id="prices">
            <div className={styles["gradient"]}></div>
            <div className={styles["content-wrap"]}>
                <div className={styles["prices__header"]}>
                    <SectionHeader content={header.content} type={header.type}/>
                </div>
                <ul className={styles["prices__list"]}>
                    {renderPlans(plans)}
                </ul>
                <div className={styles["prices__btn"]}>
                    <Button content={"полный список цен"}/>
                </div>
            </div>
        </section>
    );
}