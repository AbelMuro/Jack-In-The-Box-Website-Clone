import React from 'react';
import styles from './styles.module.css'
import appleAppStore from './images/appleAppStore.png';
import googlePlayStore from './images/googlePlayStore.png';

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
                    <h2 className={styles.deliveryPartner}>
                        PICK A DELIVERY PARTNER
                    </h2>
                </div>
            </div>
        </main>
    )
}

export default DeliveryPage;