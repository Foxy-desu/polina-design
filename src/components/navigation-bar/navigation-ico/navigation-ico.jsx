import React from "react";
import styles from "./navigation-ico.module.scss";
import useImage from "../../../custom-hooks/use-image";

export const NavigationIco = ({content, sectionId, icoPath, id, setClickedId}) => {
    const {loading, error, image} = useImage(icoPath);

    if (error) {
        return (
            <li className={styles["nav-bar__list-item"]}>
                <a className={styles["nav-bar__logo"]} href={'#' + sectionId}>
                    <img className={styles["nav-bar__logo-img"]} src={icoPath} alt={content}/>
                </a>
            </li>
        ) 
    };
    
    return (
       <li className={styles["nav-bar__list-item"]} onClick={()=> setClickedId(id)}>
            {loading
                ? "загрузка"
                : (
                    <a className={styles["nav-bar__logo"]} href={'#' + sectionId}>
                        <img className={styles["nav-bar__logo-img"]} src={image} alt={content}/>
                    </a>
                )
            }
        </li>
    )
}