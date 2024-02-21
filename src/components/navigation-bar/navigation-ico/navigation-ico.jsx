import React from "react";
import styles from "./navigation-ico.module.scss";
import useImage from "../../../custom-hooks/use-image";

export const NavigationIco = ({content, sectionId, icoPath, id, setClickedId, clickHandler= false}) => {
    const {loading, error, image} = useImage(icoPath);
    function handleCheck() {
        if (clickHandler) clickHandler();
        else return;
    }

    if (error) {
        return (
            <li className={styles["nav-bar__list-item"]} onClick={handleCheck}>
                <a className={styles["nav-bar__logo"]} href={'#' + sectionId}>
                    <img className={styles["nav-bar__logo-img"]} src={icoPath} alt={content}/>
                </a>
            </li>
        ) 
    };
    
    return (
       <li className={styles["nav-bar__list-item"]} onClick={()=> {
           setClickedId(id);
           handleCheck();
       }}>
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