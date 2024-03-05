import React, {useEffect, useRef, useState} from "react";
import styles from "./prices-section.module.scss";
import { PlanCard } from "../UI/plan-card/plan-card";
import { SectionHeader } from "../UI/section-header/section-header";
import { Button } from "../UI/button/button";
import {PricesCarousel} from "../prices-carousel/prices-carousel";


export const PricesSection = ({pricesData, blockType, setVisibleSections, visibleSections}) => {
    const header = pricesData.sectionHeading;
    const plans = pricesData.plans;
    const btn = pricesData.buttons[0];
    const breakpoint = 873;
    const [width, setWidth] = useState(window.innerWidth);
    const [isVisible, setIsVisible] = useState(false);
    const section = useRef(null);

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResizeWindow);
        return ()=> {
            window.removeEventListener("resize", handleResizeWindow);
        }
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.7,
            }
        );

        if(section.current) {
            observer.observe(section.current);
        }

        return ()=> {
            if(section.current) {
                observer.unobserve(section.current);
            }
        };
    }, []);

    useEffect(()=> {
        const key = section.current.id;
        const index = visibleSections.indexOf(key);
        if(isVisible) {
            if(index === -1) {
                setVisibleSections([...visibleSections, key])
            }
        }if(!isVisible){
            if(index > -1) {
                setVisibleSections(visibleSections.filter((elem)=> {
                    return elem !== key;
                }));
            }
        }
    }, [isVisible]);

    function renderPlans(plans) {
        return (
            plans.map((plan, i)=> {
                return (
                <li
                    key={plan.id}
                    className={styles["prices__list-item"]}>
                    <PlanCard
                        planName={plan.planName}
                        perks={plan.perks}
                        price={plan.price}
                        prevPrice={plan.prevPrice}
                        discount={plan.discount}
                        type={plan.type}
                        path="/order"
                        id={plan.id}
                        addToLocal={addToLocal}/>
                </li>
                )
            })
        )
    };
    function addToLocal(id) {
        const data = plans.find((plan)=> {
            return plan.id === id;
        }).id;

        localStorage.setItem('plan', data);
    }

    return (
        <section className={styles["prices"]} id="prices" ref={section}>
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
                    <Button content={btn.content} path={btn.to}/>
                </div>
            </div>
        </section>
    );
}