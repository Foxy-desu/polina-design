import React from "react";
import {Button} from "../button/button";
import { PerksListItem } from "./perks-list-item/Perks-list-item";
import styles from './Plan-card.module.scss';

//TODO: implement styles

const PlanCard = (props)=> {
    const {plan, perks, price, prevPrice} = props.data;

    function createComponentKey(str) {
        return str.split('').reduce((prevHash, currVal) =>
          (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
    };

    function listPerks(perks) {
        return perks.map((perk)=> {
            const hashed = createComponentKey(perk);
            return <PerksListItem content={perk} key={hashed}/> 
        })
    };

    return <article>
        <h3>{plan}</h3>
        <ul>{listPerks(perks)}</ul>
        <p>{price}</p>
        <p>{prevPrice}</p>
        <Button content='заказать' type='lg'/>
    </article>
}

export {PlanCard};