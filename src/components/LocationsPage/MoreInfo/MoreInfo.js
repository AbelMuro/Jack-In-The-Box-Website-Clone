import React from 'react';
import styles from './styles.module.css';
import WeHiring from './images/WeHiring.jpg';
import delivery from './images/delivery.jpg';
import appStoreButton from './images/appStoreButton.png';
import googlePlayButton from './images/googlePlayButton.png';


function MoreInfo() {

    return(
        <main className={styles.container}>
            <div className={styles.flexItemOne}>
                <img src={WeHiring} className={styles.images}/>
            </div>
            <div className={styles.flexItemTwo}>
                <h2 className={styles.greyBoxTitle}>
                    CAREERS
                </h2>
                <p className={styles.greyBoxDescription}>
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
                <h2 className={styles.greyBoxTitle}>
                    JACK IN THE BOX MOBILE APP
                </h2>
                <p className={styles.greyBoxDescription}>
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
            <div className={styles.flexItemFour}>
                <img src={delivery} className={styles.images}/>
            </div>
            <div className={styles.flexItemFive}>
                <h2 className={styles.redBoxTitle}>
                    ABOUT JACK IN THE BOX
                </h2>
                <p className={styles.redBoxDescription}>
                    Let’s face it: you want what you want, 
                    when you want it. Jack in the Box serves 
                    the whole menu all day long! Want breakfast 
                    in the evening? We got it. Craving juicy 
                    burgers made with signature beef? Jack has 
                    them too. Yearning for a delicious chicken 
                    sandwich? Done. Stop by your nearby Jack in 
                    the Box to indulge in your favorite foods. 
                    Or, with delivery options available, you 
                    don’t even have to leave your couch!
                </p>
                <a className={styles.jackLink}>
                    JACKINTHEBOX.COM
                </a>
            </div>
            <div className={styles.flexItemSix}>
                <h2 className={styles.greyBoxTitle}>
                    AVAILABLE AT THIS LOCATION
                </h2>
                <ul className={styles.listContainer}>
                    <li className={styles.listItem}>
                        DRIVE THRU
                    </li>
                    <li className={styles.listItem}>
                        BREAKFAST
                    </li>
                    <li className={styles.listItem}>
                        DESSERT
                    </li>
                    <li className={styles.listItem}>
                        DINNER
                    </li>
                    <li className={styles.listItem}>
                        LUNCH
                    </li>
                </ul>
            </div>
            <div className={styles.flexItemSeven}>1</div>
            <div className={styles.flexItemEight}>1</div>
        </main>
    )
}

export default MoreInfo;