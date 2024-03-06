import React, { useEffect } from "react";
import styles from "./all-prices.module.scss";
import { SectionHeader } from "../../components/UI/section-header/section-header";
import { Button } from "../../components/UI/button/button";

const PricesHeader = ({ allPricesData }) => {
  return (
    <div className={styles["all-prices__header"]}>
      <SectionHeader
        content={allPricesData.sectionHeading.content}
        type={allPricesData.sectionHeading.type}
      />
    </div>
  );
};
const PricesList = ({ allPricesData }) => {
  function renderPrices(plans) {
    return plans.map((plan) => {
      return (
        <li key={plan.id} className={styles["all-prices__list-item"]}>
          <span className={styles["accent"]}>{plan.planName}</span> -{" "}
          <span>{plan.price}</span> руб.
        </li>
      );
    });
  }

  return (
    <ul className={styles["all-prices__list"]}>
      {renderPrices(allPricesData.plans)}
    </ul>
  );
};
const PricesBtns = () => {
  return (
    <div className={styles["all-prices__btns"]}>
      <Button content={"на главную"} path={"/"}></Button>
    </div>
  );
};
export const AllPricesScreen = ({ allPricesData, setForceUpdate }) => {
  useEffect(() => {
    setForceUpdate("prices-screen");
  });

  return (
    <section className={styles["all-prices"]} id="all-prices">
      <div className={styles["gradient"]}></div>
      <div className={styles["content-wrap"]}>
        <PricesHeader allPricesData={allPricesData} />
        <PricesList allPricesData={allPricesData} />
        <PricesBtns />
      </div>
    </section>
  );
};
