import React from 'react';
import styles from './Title.module.scss';

function Title({children}) {
    return (
        <p className={styles.title} >{children}</p>
    )
}

export default Title;