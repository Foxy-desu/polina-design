import React from "react";
import { CardHeader } from "./card-header/card-header.jsx";
import { Button } from "../button/button.jsx";
import { CardList } from "./card-list/card-list.jsx";
import { Prices } from "./prices/prices.jsx";
import styles from "./plan-card.module.scss";

const PlanCardHeader = ({ planName, discount }) => {
  return (
    <div className={styles["plan-card__card-header"]}>
      <CardHeader content={planName} discount={discount} />
    </div>
  );
};
const PlanCardContent = ({ perks, price, prevPrice }) => {
  return (
    <div className={styles["plan-card__card-content"]}>
      <div className={styles["plan-card__card-list"]}>
        <CardList content={perks} />
      </div>
      <div className={styles["plan-card__card-prices"]}>
        <Prices price={price} prevPrice={prevPrice} />
      </div>
    </div>
  );
};
const PlanCardBtn = ({ path, id, addToLocal }) => {
  return (
    <div className={styles["plan-card__card-btn"]}>
      <Button
        content="заказать"
        type="lg"
        path={path}
        btnId={id}
        addToLocal={addToLocal}
      />
    </div>
  );
};
export const PlanCard = ({
  planName,
  perks,
  price,
  prevPrice,
  discount,
  type,
  shadow = "false",
  path,
  id,
  addToLocal,
}) => {
  return (
    <article
      className={`${styles["plan-card"]}
         ${
           type.includes("light")
             ? styles["plan-card_light"]
             : styles["plan-card_dark"]
         }
         ${type.includes("glowing") ? " " + styles["plan-card_glowing"] : false}
         ${
           shadow.includes("slight") && type.includes("glowing")
             ? " " + styles["slight-shadow"]
             : false
         }`}
    >
      {/*<div className={styles["plan-card__card-header"]}>*/}
      {/*    <CardHeader content={planName} discount={discount}/>*/}
      {/*</div>*/}
      {/*<div className={styles["plan-card__card-content"]}>*/}
      {/*    <div className={styles["plan-card__card-list"]}>*/}
      {/*        <CardList content={perks} />*/}
      {/*    </div>*/}
      {/*    <div className={styles["plan-card__card-prices"]}>*/}
      {/*        <Prices price={price} prevPrice={prevPrice}/>*/}
      {/*    </div>*/}
      {/*</div>*/}
      {/*<div className={styles["plan-card__card-btn"]}>*/}
      {/*    <Button content='заказать' type='lg' path={path} btnId={id} addToLocal={addToLocal}/>*/}
      {/*</div>*/}
      <PlanCardHeader planName={planName} discount={discount} />
      <PlanCardContent price={price} prevPrice={prevPrice} perks={perks} />
      <PlanCardBtn path={path} id={id} addToLocal={addToLocal} />
    </article>
  );
};
