import React, {useEffect} from 'react';
import styles from './styles.module.css';
import purpleFries from './images/purple fries.png';
import QRcode from './images/QR CODE.png';
import appStoreButton from './images/appStoreButton.png';
import googlePlayButton from './images/googlePlayButton.png';

function OffersAndStuffPage() {

    const changeQRcodeToButtons = () => {
        let blackButtons = document.querySelector("." + styles.blackButtons);
        let QRcode = document.querySelector("." + styles.QRcodeImage);

        if(window.innerWidth <= 1000){
            if(blackButtons.classList.contains(styles.displayNone)){
                QRcode.style.display = "none"                
                blackButtons.classList.remove(styles.displayNone);
                blackButtons.classList.add(styles.displayFlex)
            }        
        }       
        else{
            if(!blackButtons.classList.contains(styles.displayNone)){
                QRcode.style.display = "inline-block";
                blackButtons.classList.remove(styles.displayFlex);
                blackButtons.classList.add(styles.displayNone);
            }
        }
    }

    useEffect(() => {
        window.addEventListener("resize", changeQRcodeToButtons);

        return () => {
            window.removeEventListener("resize",changeQRcodeToButtons);
        }
    })

    return(
        <main className={styles.offersContainer}>
            <img src={purpleFries} className={styles.purpleFriesImage}/>
            <div className={styles.title}>
                GET AWESOME OFFERS, DEALS AND APP EXCLUSIVE SAVINGS.
            </div>
            <div className={styles.earnRewards}>
                Plus, earn rewards points on every app order with The Jack Pack!
            </div>
            <div className={styles.download}>   
                Download the Jack in the Box app!
            </div>
            <div className={[styles.blackButtons, styles.displayNone].join(" ")}>
                <img src={appStoreButton} className={styles.appStoreButton}/>
                <img src={googlePlayButton} className={styles.googlePlayButton}/>
            </div>  
            <img src={QRcode} className={styles.QRcodeImage}/>
        </main>
    )
}

export default OffersAndStuffPage;