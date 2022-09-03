import React from 'react';
import images from './images/*.png';
import styles from './styles.module.css';

function TacosFriesSidesMenu(){
    return(
    <div className={styles.container}>
        <div className={styles.title}>TACOS, FRIES {"&"} SIDES</div>
        <div className={styles.gridItem}>
            <img src={images["Seasoned_Curly_Fries"]} className={styles.foodImage}/>
            <p>SEASONED CURLY FRIES</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["French_Fries"]} className={styles.foodImage}/>
            <p>FRENCH FRIES</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Tiny_Tacos"]} className={styles.foodImage}/>   
            <p>TINY TACOS</p>        
        </div>
        <div className={styles.gridItem}>
            <img src={images["Loaded_Tiny_Tacos"]} className={styles.foodImage}/> 
            <p>LOADED TINY TACOS</p>           
        </div>
        <div className={styles.gridItem}>
            <img src={images["Onion_Rings"]} className={styles.foodImage}/> 
            <p>ONION RINGS</p>           
        </div>
        <div className={styles.gridItem}>
            <img src={images["Two_Tacos"]} className={styles.foodImage}/> 
            <p>TWO TACOS</p>           
        </div>
        <div className={styles.gridItem}>
            <img src={images["Egg_Rolls"]} className={styles.foodImage}/> 
            <p>EGG ROLLS</p>           
        </div>
        <div className={styles.gridItem}>
            <img src={images["Stuffed_Jalapeno"]} className={styles.foodImage}/> 
            <p>STUFFED JALAPENOS</p>           
        </div>
        <div className={styles.gridItem}>
            <img src={images["Apple_Sauce_Pouch"]} className={styles.foodImage}/> 
            <p>TREE TOP APPLESAUCE POUCH</p>           
        </div>
    </div>
    )

}

export default TacosFriesSidesMenu;