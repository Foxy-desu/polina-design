import {useEffect, useState} from 'react';
import {HashLink as Link} from "react-router-hash-link";
import styles from './anchor.module.scss';

const Anchor = ({sectionId, content, id, clickedId, setClickedId, clickHandler, visibleSections}) => {

const [isVisible, setIsVisible] = useState(()=> {
    if(visibleSections.includes(sectionId)) return true;
    return false
})

    useEffect(()=> {
        const section = sectionId;
        if(visibleSections.includes(section)) {
            setIsVisible( true);
        }else setTimeout(()=> {
            setIsVisible(false);
        }, 150);
    })
    function handleCheck() {
        if (clickHandler) clickHandler();
        else return;
    }
    return <div className={`${isVisible===true && clickedId === id? styles["anchor"] + ' ' + styles["anchor_active"] : styles["anchor"]}`} onClick={()=> {
        setClickedId(id);
        handleCheck();
    }}>
        <Link className={styles["anchor__link"]} to={`/#${sectionId}`}>{content}</Link>
    </div>
}

export {Anchor};