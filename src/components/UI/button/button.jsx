import React from 'react';
import styles from './button.module.scss'

const Button =(props)=> {
    return <button className={`${styles.btn} ${styles.btn_colored_lg}`} type='button'>{props.value}</button>
}

export {Button};