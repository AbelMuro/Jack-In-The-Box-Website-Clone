import React from 'react';
import styles from './styles.module.css';

function FlexBox(props) {

    return(
        <div className={styles.flexContainer}>
            {props.children}
        </div>
    )
}

export default FlexBox;
