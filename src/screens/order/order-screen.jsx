import React, { useEffect } from "react";
import styles from "./order-screen.module.scss";
import { SectionHeader } from "../../components/UI/section-header/section-header";
import { OrderForm } from "../../components/order-form/order-form";

export const OrderScreen = ({ orderData, setForceUpdate }) => {
  useEffect(() => {
    setForceUpdate("order-screen");
  });

  return (
    <section className={styles["order"]} id="order">
      <div className={styles["gradient"]}></div>
      <div className={styles["content-wrap"]}>
        <div className={styles["order__header"]}>
          <SectionHeader
            content={"Сделать заказ"}
            type={orderData.sectionHeading.type}
          />
        </div>
        <div>
          <OrderForm data={orderData.plans} />
        </div>
      </div>
    </section>
  );
};
