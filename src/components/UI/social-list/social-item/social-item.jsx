import React from "react";
import styles from "./social-item.module.scss";
import useImage from "../../../../custom-hooks/use-image";

const SocialItem = ({link, name, iconPath, clickHandler= false}) => {
    const {loading, image} = useImage(iconPath);

    function handleCheck() {
        if (clickHandler) clickHandler();
        else return;
    }
    return (
    <li className={styles["social-item"]} onClick={handleCheck}>
        {loading
        ? "загрузка"
        : (
            <a className={styles["social-item__link"]} href={link}>
                <img className={styles["social-item__image"]} src={image} alt={name}/>
            </a>
        )
        }
    </li>
    )
}

export {SocialItem};