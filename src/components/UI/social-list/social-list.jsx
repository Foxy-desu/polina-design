import React from "react";
import { SocialItem } from "./social-item/social-item";
import styles from "./social-list.module.scss";

const SocialList = (props) => {
    const {data: socials} = props;
    function listItems(socials) {
        const list = socials.map((social) => {
            console.log(social);
            return <SocialItem link={social.link} name={social.name}/>
        });
        return list;
    }

    return <ul className={styles["social-list"]}>
        {listItems(socials)}
    </ul>

}

export {SocialList};