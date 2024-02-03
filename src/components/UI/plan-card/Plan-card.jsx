import React from "react";
import {Button} from "../button/Button";
import { PerksListItem } from "./perks-list-item/Perks-list-item";
import styles from './Plan-card.module.scss';

//TODO: implement key prop for each list item (hashing perhaps?)
//TODO: implement styles

const PlanCard = (props)=> {
    const {plan, perks, price, prevPrice} = props.data;

    function listPerks(perks) {
        return perks.map((perk)=> {
            return <PerksListItem content={perk}/> 
        })
    }

    return <article>
        <h3>{plan}</h3>
        <ul>{listPerks(perks)}</ul>
        <p>{price}</p>
        <p>{prevPrice}</p>
        <Button content='заказать' type='lg'/>
    </article>
}

export {PlanCard};