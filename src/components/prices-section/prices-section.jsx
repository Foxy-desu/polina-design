import React, {useState} from "react";
import styles from "./prices-section.module.scss";
import { PlanCard } from "../UI/plan-card/plan-card";
import { SectionHeader } from "../UI/section-header/section-header";
import { Button } from "../UI/button/button";


export const PricesSection = ({pricesData}) => {
    const header = pricesData.sectionHeading;
    const plans = pricesData.plans;
    const btn = pricesData.buttons[0];

    const [hoverIndex, setHover] = useState(2);

    function renderPlans(plans) {

        return (
            plans.map((plan, i)=> {
                return (
                <li
                    key={plan.id}
                    className={ hoverIndex === i? styles["prices__list-item"] : `${styles["prices__list-item"]} ${styles["prices__list-item_darkened"]}`}>
                    <PlanCard planName={plan.planName} perks={plan.perks} price={plan.price} prevPrice={plan.prevPrice} discount={plan.discount} type={plan.type} index={i} effects={{hoverIndex, setHover}}/>
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
                <ul className={styles["prices__list"]} onMouseLeave={()=>{setHover(2)}}>
                    {renderPlans(plans)}
                </ul>
                <div className={styles["prices__btn"]}>
                    <Button content={btn.content}/>
                </div>
            </div>
        </section>
    );
}