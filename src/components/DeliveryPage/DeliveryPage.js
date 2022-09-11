import React from 'react';
import styles from './styles.module.css'
import appleAppStore from './images/appleAppStore.png';
import googlePlayStore from './images/googlePlayStore.png';
import doordash from './images/doordash.png';
import ubereats from './images/ubereats.png';
import grubhub from './images/grubhub.png';
import postmates from './images/postmates.png';

function DeliveryPage() {
    return(
        <main className={styles.container}>
            <div className={styles.flexItemOne}>
                <h1 className={styles.jackDelivered}>
                    GET JACK <br/>
                    DELIVERED
                </h1>
            </div>
            <div className={styles.flexItemTwo}>
                <div className={styles.delivery}>
                    <h1 className={styles.jackApp}>
                        NOW AVAILABLE <br/>
                        THROUGH THE JACK APP!
                    </h1>
                    <div className={styles.blackButtons}>
                        <img src={appleAppStore} className={styles.button}/>
                        <img src={googlePlayStore} className={styles.button}/>
                    </div>
                    
                </div>
                <div className={styles.deliveryPartner}>
                    <h2 className={styles.deliveryPartnerTitle}>
                        PICK A DELIVERY PARTNER
                    </h2>
                    <div className={styles.deliveryApps}>
                        <img src={doordash} className={styles.appImages}/>
                        <img src={ubereats} className={styles.appImages}/>
                        <img src={grubhub} className={styles.appImages}/>
                        <img src={postmates} className={styles.appImages}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DeliveryPage;