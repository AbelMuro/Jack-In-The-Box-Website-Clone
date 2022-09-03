import React from 'react';
import images from './images/*.png';
import styles from './styles.module.css';

function ShakesAndDessertsMenu(){
    return(
    <div className={styles.container}>
        <div className={styles.title}>SHAKES {"&"} DESSERTS</div>
        <div className={styles.gridItem}>
            <img src={images["OreoShake"]} className={styles.foodImage}/>
            <p>OREO COOKIE SHAKE</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["ChocolateShake"]} className={styles.foodImage}/>
            <p>CHOCOLATE SHAKE</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["VanillaShake"]} className={styles.foodImage}/>   
            <p>VANILLA SHAKE</p>        
        </div>
        <div className={styles.gridItem}>
            <img src={images["MiniChurros"]} className={styles.foodImage}/> 
            <p>MINI CHURROS</p>           
        </div>
        <div className={styles.gridItem}>
            <img src={images["ChocolateOverloadCake"]} className={styles.foodImage}/>
            <p>CHOCOLATE OVERLOAD CAKE</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["NYStyleCheesecake"]} className={styles.foodImage}/>
            <p>NY STYLE CHEESECAKE</p>
        </div>
    </div>
    )

}

export default ShakesAndDessertsMenu;