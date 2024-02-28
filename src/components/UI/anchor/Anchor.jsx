import { useState } from 'react';
import styles from './anchor.module.scss';

const Anchor = (props) => {
    //activate .anchor_active using js//
    //activate on tabulation enter
    const {sectionId, content, id, clickedId, setClickedId, clickHandler} = props;
    function handleCheck() {
        if (clickHandler) clickHandler();
        else return;
    }
    
    return <div className={`${clickedId === id? styles["anchor"] + ' ' + styles["anchor_active"] : styles["anchor"]}`} onClick={()=> {
        setClickedId(id);
        handleCheck();
    }}>
        <a className={styles.anchor__link} href={`#${sectionId}`}>{content}</a>
    </div>
}

export {Anchor};