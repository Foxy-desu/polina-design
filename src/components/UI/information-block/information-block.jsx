import React from "react";
import * as DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import styles from './information-block.module.scss';

const InformationBlock = ({heading, description, descType="small"}) => {
    function wrapInSpan(description) {
        const regex = /[0-9]+%/g;
        const result = description.replace(regex, `<span class=${styles.accent}>$&</span>`);
        return result;
    };

    function addLineBreak(itemContent) {
        const formated = itemContent.includes('\n')
        ? itemContent.replace('\n', '<br/>')
        : itemContent;

        return formated;
    };

    const pure = DOMPurify.sanitize(addLineBreak(wrapInSpan(description)));

    return <div className={styles['information-block']}>
        <h3 className={styles['information-block__heading']}>{heading}</h3>
        <p className={`${styles['information-block__desc']}${descType === "large" ? " " + styles['information-block__desc_lg'] : ""}`}>{parse(pure)}</p>
    </div>
}

export {InformationBlock};