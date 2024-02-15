import React from "react";
import styles from "./atmosphere-card.module.scss";
import useImage from "../../../custom-hooks/use-image";

export const AtmosphereCard = ({path, info}) => {
    const { loading, error, image } = useImage(path);
    
    if(error) return <img src={path} alt={info}/>
    return (
        <>
            {loading? <div>загрузка</div>
            : <img className={styles["card"]} src={image} alt={info}/>}
        </>
    )

}