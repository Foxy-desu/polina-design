import React from "react";
import styles from "./card-list-item.module.scss";

//TODO: implement line break after colon
const CardListItem = (props)=> {
    const {content} = props;
    
    return <li className={styles["card-list__item"]}>{content}</li>;
}
export {CardListItem}