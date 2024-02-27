import React from 'react';
import {Link} from 'react-router-dom';
import styles from './button.module.scss';

//TODO: the component is dirty. make it clear
const Button =({content, type='', path})=> {
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
    
    // return <button className={`${styles.btn}${' ' + additionalStyle}`} type='button'>{content}</button>
    return <Link className={`${styles.btn}${' ' + additionalStyle}`} to={path}>{content}</Link>
};

export {Button};