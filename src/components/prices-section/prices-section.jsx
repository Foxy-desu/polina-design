import React, { useEffect, useRef, useState } from "react";
import styles from "./prices-section.module.scss";
import { PlanCard } from "../UI/plan-card/plan-card";
import { SectionHeader } from "../UI/section-header/section-header";
import { Button } from "../UI/button/button";
import { PricesCarousel } from "../prices-carousel/prices-carousel";
import { useIntersectionObserver } from "../../custom-hooks/use-intersection-observer";
import { useVisibleSections } from "../../custom-hooks/use-visible-sections";

const PricesHeader = ({ header }) => {
  return (
    <div className={styles["prices__header"]}>
      <SectionHeader content={header.content} type={header.type} />
    </div>
  );
};
const CardsRepresent = ({ width, breakpoint, renderPlans, plans }) => {
  return (
    <>
      {width > breakpoint ? (
        <ul className={styles["prices__list"]}>{renderPlans(plans)}</ul>
      ) : (
        <PricesCarousel plans={plans} />
      )}
    </>
  );
};
const PricesBtn = ({ btn }) => {
  return (
    <div className={styles["prices__btn"]}>
      <Button content={btn.content} path={btn.to} />
    </div>
  );
};

export const PricesSection = ({
  pricesData,
  setVisibleSections,
  visibleSections,
}) => {
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
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  useIntersectionObserver(section, setIsVisible, 0.7);
  useVisibleSections(section, visibleSections, isVisible, setVisibleSections);

  function renderPlans(plans) {
    return plans.map((plan, i) => {
      return (
        <li key={plan.id} className={styles["prices__list-item"]}>
          <PlanCard
            planName={plan.planName}
            perks={plan.perks}
            price={plan.price}
            prevPrice={plan.prevPrice}
            discount={plan.discount}
            type={plan.type}
            path="/order"
            id={plan.id}
            addToLocal={addToLocal}
          />
        </li>
      );
    });
  }
  function addToLocal(id) {
    const data = plans.find((plan) => {
      return plan.id === id;
    }).id;

    localStorage.setItem("plan", data);
  }

  return (
    <section className={styles["prices"]} id="prices" ref={section}>
      <div className={styles["gradient"]}></div>
      <div className={styles["content-wrap"]}>
        <PricesHeader header={header} />
        <CardsRepresent
          width={width}
          breakpoint={breakpoint}
          renderPlans={renderPlans}
          plans={plans}
        />
        <PricesBtn btn={btn} />
      </div>
    </section>
  );
};
