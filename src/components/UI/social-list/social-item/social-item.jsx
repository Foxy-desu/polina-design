import React from "react";
import vk from "../../../../assets/icons/socials-vk-ico.svg";
import inst from "../../../../assets/icons/socials-instagram-ico.svg";
import tg from "../../../../assets/icons/socials-telegram-ico.svg";
import styles from "./social-item.module.scss";

const SocialItem = (props) => {
    const {link, name} = props;
    
    function getImage(name) {
        const socials = {
            'vkontakte': vk,
            'instagram': inst,
            'telegram': tg,
        };

        for(let [key, value] of Object.entries(socials)) {
            if (key === name) {
                return value;
            }
        }
        return '';
    }

    return (
    <li className={styles["social-item"]}>
        <a className={styles["social-item__link"]} href={link}>
            <img className={styles["social-item__image"]} src={getImage(name)} alt={name}/>
        </a>
    </li>
    )
}

export {SocialItem};