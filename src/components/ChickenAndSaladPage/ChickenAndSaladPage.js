import React from 'react';
import images from './images/*.png';
import styles from './styles.module.css';

function ChickenAndSaladPage(){
    return(
    <div className={styles.container}>
        <div className={styles.title}>CHICKEN {"&"} SALADS</div>
        <div className={styles.gridItem}>
            <img src={images["Chicken_Club_Salad"]} className={styles.foodImage}/>    
            <p className={styles.itemTitle}>CHICKEN CLUB SALAD</p>        
        </div>
        <div className={styles.gridItem}>
            <img src={images["Chicken_Fajita_Pita"]} className={styles.foodImage}/>
            <p className={styles.itemTitle}>CHICKEN FAJITA PITA</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Chicken_Nuggets"]} className={styles.foodImage}/> 
            <p className={styles.itemTitle}>CHICKEN NUGGETS</p>           
        </div>
        <div className={styles.gridItem}>
            <img src={images["Chicken_Sandwich"]} className={styles.foodImage}/>
            <p className={styles.itemTitle}>CHICKEN SANDWICH</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Chicken_Strips"]} className={styles.foodImage}/> 
            <p className={styles.itemTitle}>CHICKEN STRIPS</p>           
        </div>
        <div className={styles.gridItem}>
            <img src={images["Cluck_Sandwich"]} className={styles.foodImage}/>   
            <p className={styles.itemTitle}>CLUCK SANDWICH</p>        
        </div>
        <div className={styles.gridItem}>
            <img src={images["Grilled_Chicken_Salad"]} className={styles.foodImage}/>
            <p className={styles.itemTitle}>GRILLED CHICKEN SALAD</p>        
        </div>
        <div className={styles.gridItem}>
            <img src={images["Homestyle_Ranch"]} className={styles.foodImage}/>
            <p className={styles.itemTitle}>HOMESTYLE RANCH</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Jacks_Spicy_Chicken_Cheese"]} className={styles.foodImage}/>
            <p className={styles.itemTitle}>JACKS SPICY CHICKEN CHEESE</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Jacks_Spicy_Chicken"]} className={styles.foodImage}/>
            <p className={styles.itemTitle}>JACKS SPICY CHICKEN</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Side_Salad"]} className={styles.foodImage}/>
            <p className={styles.itemTitle}>SIDE SALAD</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Southwest_Chicken_Salad"]} className={styles.foodImage}/>
            <p className={styles.itemTitle}>SOUTHWEST CHICKEN SALAD</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["TERIYAKI CHICKEN BOWL"]} className={styles.foodImage}/>
            <p className={styles.itemTitle}>TERIYAKI CHICKEN BOWL</p>
        </div>
    </div>
    )

}

export default ChickenAndSaladPage;