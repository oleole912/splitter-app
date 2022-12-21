import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

function Button({children, value, onClick, active}) {
    return (
        <button className={clsx(styles.button, active && styles.active)} value={value} onClick={onClick} type="button">{children}</button>
    )
}

export default Button;
