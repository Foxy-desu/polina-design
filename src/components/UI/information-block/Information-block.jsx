import React from "react";
import * as DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import styles from './Information-block.module.scss';

const InformationBlock = (props) => {
    const {heading, description} = props;
    function wrapInSpan(description) {
        const regex = /[0-9]+%/g;
        const result = description.replace(regex, `<span class=${styles.accent}>$&</span>`);
        return result;
    };
    const pure = DOMPurify.sanitize(wrapInSpan(description));

    return <div className={styles['information-block']}>
        <h3 className={styles['information-block__heading']}>{heading}</h3>
        <p className={styles['information-block__desc']}>{parse(pure)}</p>
    </div>
}

export {InformationBlock};