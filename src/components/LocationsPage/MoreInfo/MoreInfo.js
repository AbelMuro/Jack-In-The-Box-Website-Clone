import React from 'react';
import styles from './styles.module.css';
import weHiring from './styles.module.css';

function MoreInfo() {

    return(
        <main className={styles.container}>
            <div className={styles.flexItemOne}>
                <img src={weHiring} className={styles.images}/>
            </div>
            <div className={styles.flexItemTwo}>
                <h2>CAREERS</h2>
                <p>
                    Our food is great. Our commercials are funny. 
                    And Jack really does care about you! Feel the
                    pride that only our employees experience by 
                    working at Jack in the Box.
                </p>
            </div>
            <div className={styles.flexItemThree}>1</div>
            <div className={styles.flexItemFour}>1</div>
            <div className={styles.flexItemFive}>1</div>
            <div className={styles.flexItemSix}>1</div>
            <div className={styles.flexItemSeven}>1</div>
            <div className={styles.flexItemEight}>1</div>
        </main>
    )
}

export default MoreInfo;