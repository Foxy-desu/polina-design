import React from 'react';
import styles from './button.module.scss';

//TODO: the component is dirty. make it clear
const Button =(props)=> {
    const {content, type=''} = props;
    const additionalStyle = getStyle(checkType(type));

    function checkType(type) {
        const types = {
            colored: 'btn_colored',
            lg: 'btn_colored_lg'
        };

        for(let [key, value] of Object.entries(types)) {
           if(key === type) return value;
        }
        return '';
    };
    function getStyle(type) {
        if(type === '') return '';
        return styles[type];
    };
    
    return <button className={`${styles.btn}${' ' + additionalStyle}`} type='button'>{content}</button>
};

export {Button};