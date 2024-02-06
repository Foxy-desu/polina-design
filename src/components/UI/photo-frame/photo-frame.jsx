import React from "react";
import useImage from "../../../custom-hooks/use-image";
import styles from "./photo-frame.module.scss";

const PhotoFrame = ({path, info, type}) => {
    const { loading, error, image } = useImage(path);

    function setStyle(type) {
        const types = {
            "designed": "photo-frame__image_designed",
            "plain": "photo-frame__image_plain",
        };

        for(let [key, value] of Object.entries(types)) {
            if(key === type) return styles[value];
        };
        return "";
    }

    
    if(error) return <img src="path" alt="info"/>
    return (
        <div className={styles["photo-frame"]}>
           {loading ? (
            <div>{'loading'}</div>
            ) : (

                <div className={styles["photo-frame__wrap"]}>
                    <img className={`${styles["photo-frame__image"]}${' ' + setStyle(type)}`} width={167} height={223} src={image} alt={info}/>
                </div>
            )
            }
        </div>
    )

};
export {PhotoFrame};