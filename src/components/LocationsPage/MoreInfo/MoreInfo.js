import React from 'react';
import styles from './styles.module.css';
import WeHiring from './images/WeHiring.jpg';
import appStoreButton from './images/appStoreButton.png';
import googlePlayButton from './images/googlePlayButton.png';

function MoreInfo() {

    return(
        <main className={styles.container}>
            <div className={styles.flexItemOne}>
                <img src={WeHiring} className={styles.images}/>
            </div>
            <div className={styles.flexItemTwo}>
                <h2 className={styles.title}>
                    CAREERS
                </h2>
                <p className={styles.description}>
                    Our food is great. Our commercials are funny. 
                    And Jack really does care about you! Feel the
                    pride that only our employees experience by 
                    working at Jack in the Box.
                </p>
                <button className={styles.applyButton}>
                    APPLY TODAY
                </button>
            </div>
            <div className={styles.flexItemThree}>
                <h2 className={styles.title}>
                    JACK IN THE BOX MOBILE APP
                </h2>
                <p className={styles.description}>
                    Get all your favorite food delivered from Jack's 
                    kitchen straight to your door. Order delivery from 
                    the Jack app today and get everything you're craving 
                    and more without leaving the comfort of your own home. 
                    So kick back, relax, we got you covered.
                </p>
                <div className={styles.blackButtons}>
                    <img src={appStoreButton} className={styles.buttonImage}/>
                    <img src={googlePlayButton} className={styles.buttonImage}/>
                </div>
            </div>
            <div className={styles.flexItemFour}>1</div>
            <div className={styles.flexItemFive}>1</div>
            <div className={styles.flexItemSix}>1</div>
            <div className={styles.flexItemSeven}>1</div>
            <div className={styles.flexItemEight}>1</div>
        </main>
    )
}

export default MoreInfo;