import React from 'react';
import images from './images/*.png';
import styles from './styles.module.css';

function ChickenAndSaladPage(){
    return(
    <div className={styles.container}>
        <div className={styles.title}>CHICKEN {"&"} SALADS</div>
        <div className={styles.gridItem}>
            <img src={images["Chicken_Club_Salad"]} className={styles.foodImage}/>    
            <p >CHICKEN CLUB SALAD</p>        
        </div>
        <div className={styles.gridItem}>
            <img src={images["Chicken_Nuggets"]} className={styles.foodImage}/> 
            <p >CHICKEN NUGGETS</p>           
        </div>
        <div className={styles.gridItem}>
            <img src={images["Chicken_Fajita_Pita"]} className={styles.foodImage}/>
            <p >CHICKEN FAJITA PITA</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Chicken_Sandwich"]} className={styles.foodImage}/>
            <p >CHICKEN SANDWICH</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Chicken_Strips"]} className={styles.foodImage}/> 
            <p >CHICKEN STRIPS</p>           
        </div>
        <div className={styles.gridItem}>
            <img src={images["Cluck_Sandwich"]} className={styles.foodImage}/>   
            <p >CLUCK SANDWICH</p>        
        </div>
        <div className={styles.gridItem}>
            <img src={images["Grilled_Chicken_Salad"]} className={styles.foodImage}/>
            <p >GRILLED CHICKEN SALAD</p>        
        </div>
        <div className={styles.gridItem}>
            <img src={images["Homestyle_Ranch"]} className={styles.foodImage}/>
            <p >HOMESTYLE RANCH</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Jacks_Spicy_Chicken_Cheese"]} className={styles.foodImage}/>
            <p >JACKS SPICY CHICKEN CHEESE</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Jacks_Spicy_Chicken"]} className={styles.foodImage}/>
            <p >JACKS SPICY CHICKEN</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Side_Salad"]} className={styles.foodImage}/>
            <p >SIDE SALAD</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Southwest_Chicken_Salad"]} className={styles.foodImage}/>
            <p >SOUTHWEST CHICKEN SALAD</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["TERIYAKI CHICKEN BOWL"]} className={styles.foodImage}/>
            <p >TERIYAKI CHICKEN BOWL</p>
        </div>
    </div>
    )

}

export default ChickenAndSaladPage;