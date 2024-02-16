import React from "react";
import styles from "./social-item.module.scss";
import useImage from "../../../../custom-hooks/use-image";

const SocialItem = ({link, name, iconPath}) => {
    const {loading, image} = useImage(iconPath);

    return (
    <li className={styles["social-item"]}>
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