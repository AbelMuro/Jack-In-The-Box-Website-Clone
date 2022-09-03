import React from 'react';
import images from './images/*.png'
import styles from './styles.module.css';

function BurgersPage(){
    return(
        <div className={styles.container}> 
            <div className={styles.title}>BURGERS</div>
            <div className={styles.gridItem}>
                <img src={images["Sourdough_Jack"]} className={styles.foodImage}/>
                <p>SOURDOUGH JACK</p>
            </div>
            <div className={styles.gridItem}>
                <img src={images["Classic_Buttery_Jack"]} className={styles.foodImage}/> 
                <p>CLASSIC BUTTERY JACK </p>
            </div>
            <div className={styles.gridItem}>
                <img src={images["Bacon_Buttery_Jack"]} className={styles.foodImage}/>
                <p>BACON BUTTERY JACK</p>
            </div>
            <div className={styles.gridItem}>
                <img src={images["Double_Jack"]} className={styles.foodImage}/>  
                <p>DOUBLE JACK</p>
            </div>
            <div className={styles.gridItem}>
                <img src={images["Ultimate_Cheeseburger"]} className={styles.foodImage}/>     
                <p>ULTIMATE CHEESEBURGER</p>
            </div>          
            <div className={styles.gridItem}>
                <img src={images["Bacon_Ultimate_CheeseBurger"]} className={styles.foodImage}/>
                <p>BACON ULTIMATE CHEESEBURGER</p>
            </div>
            <div className={styles.gridItem}>
                <img src={images["Jumbo_Jack"]} className={styles.foodImage}/>
                <p>JUMBO JACK CHEESEBURGER</p>
            </div>
            <div className={styles.gridItem}>
                <img src={images["Jumbo_Jack_NoCheese"]} className={styles.foodImage}/>
                <p>JUMBO JACK</p>
            </div>   
            <div className={styles.gridItem}>
                <img src={images["Jr_Jumbo_Jack_NoCheese"]} className={styles.foodImage}/> 
                <p>JR JUMBO JACK</p>
            </div>  
            <div className={styles.gridItem}>
                <img src={images["Jr_Jumbo_Jack"]} className={styles.foodImage}/>    
                <p>JR JUMBO JACK CHEESEBURGER</p>  
            </div>      
            <div className={styles.gridItem}>
                <img src={images["Jr_Bacon_CheeseBurger"]} className={styles.foodImage}/>
                <p>JR BACON CHEESEBURGER</p>
            </div>
        </div>
    )
}

export default BurgersPage;