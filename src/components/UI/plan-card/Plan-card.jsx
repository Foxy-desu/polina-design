import React from "react";
import { CardHeader } from "./card-header/card-header.jsx";
import { Button } from "../button/button.jsx";
import { CardList } from "./card-list/card-list.jsx";
import { Prices } from "./prices/prices.jsx";
import styles from './plan-card.module.scss';

//TODO: implement styles

const PlanCard = (props)=> {
    const {plan, perks, price, prevPrice, discount} = props.data;
    const type = props.type;

    return (
    <article className={
        `${styles["plan-card"]}
         ${type.includes('light')
         ? styles["plan-card_light"]
         : styles["plan-card_dark"]}
         ${type.includes('glowing')
         ? ' ' + styles["plan-card_glowing"]
         : false}`
        }>
        <div className={styles["plan-card__card-header"]}>
            <CardHeader content={plan} discount={discount}/>
        </div>
        <div className={styles["plan-card__card-list"]}>
            <CardList content={perks}/>
        </div>
        <div className={styles["plan-card__card-prices"]}>
            <Prices price={price} prevPrice={prevPrice}/>
        </div>
        <div className={styles["plan-card__card-btn"]}>
            <Button content='заказать' type='lg'/>
        </div>
    </article>)
}

export {PlanCard};