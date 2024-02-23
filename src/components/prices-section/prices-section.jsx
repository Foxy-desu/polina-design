import React, {useEffect, useState} from "react";
import styles from "./prices-section.module.scss";
import { PlanCard } from "../UI/plan-card/plan-card";
import { SectionHeader } from "../UI/section-header/section-header";
import { Button } from "../UI/button/button";
import {PricesCarousel} from "../prices-carousel/prices-carousel";


export const PricesSection = ({pricesData, blockType}) => {
    const header = pricesData.sectionHeading;
    const plans = pricesData.plans;
    const btn = pricesData.buttons[0];

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 873;

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResizeWindow);
        return ()=> {
            window.removeEventListener("resize", handleResizeWindow);
        }
    }, []);

    function renderPlans(plans) {
        return (
            plans.map((plan, i)=> {
                return (
                <li
                    key={plan.id}
                    className={styles["prices__list-item"]}>
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
                { width > breakpoint
                    ? (<ul className={styles["prices__list"]}>
                        {renderPlans(plans)}
                    </ul>)
                    : <PricesCarousel plans={plans}/>
                }
                <div className={styles["prices__btn"]}>
                    <Button content={btn.content}/>
                </div>
            </div>
        </section>
    );
}