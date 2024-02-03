import styles from './Anchor.module.scss';

const Anchor = (props) => {
    //activate .anchor_active using js//
    //activate on tabulation enter
    const {sectionId, content, isActive} = props;

    return <div className={`${isActive === 'true'? styles.anchor + ' ' + styles.anchor_active : styles.anchor}`}>
        <a className={styles.anchor__link} href={`#${sectionId}`}>{content}</a>
    </div>
}

export {Anchor};