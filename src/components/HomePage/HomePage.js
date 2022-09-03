import React from "react";
import OrderNowOnTheApp from "./images/OrderNowOnTheApp.jpg";
import CluckSandwhich from "./images/CluckSandwhich.jpg";
import TheJackPack from "./images/TheJackPack.jpg";
import WeHiring from "./images/WeHiring.jpg";
import styles from "./styles.module.css";

function HomePage() {
    return(
        <div className={styles.HomeContainer}>
            <div className={styles.FlexItemOne}>
                <img src={OrderNowOnTheApp} className={styles.OrderNowImage}/>
            </div>
            <div className={styles.FlexItemTwo}>
                <img src={CluckSandwhich} className={styles.CluckSandwhichImage}/>
                <img src={TheJackPack} className={styles.TheJackPackImage}/>
                <img src={WeHiring} className={styles.WeHiringImage}/>
            </div>
        </div>
    )
}

export default HomePage;