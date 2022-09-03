import React from 'react';
import images from './images/*.png';
import styles from './styles.module.css';

function BreakfastPage(){
    return(
    <div className={styles.container}>
        <div className={styles.title}>BREAKFAST</div>
        <div className={styles.gridItem}>
            <img src={images["Sausage_Croissant"]} className={styles.foodImage}/>
            <p>SAUSAGE CROISSANT</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Loaded_Breakfast_Sandwich"]} className={styles.foodImage}/>
            <p>LOADED BREAKFAST SANDWICH</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Grilled_Sourdough_Swiss_Sandwich"]} className={styles.foodImage}/>   
            <p>GRILLED SOURDOUGH SWISS SANDWHICH</p>        
        </div>
        <div className={styles.gridItem}>
            <img src={images["Grande_Sausage_Breakfast_Burrito"]} className={styles.foodImage}/> 
            <p>GRANDE SAUSAGE BREAKFAST BURRITO</p>           
        </div>
        <div className={styles.gridItem}>
            <img src={images["Meat_Lovers_Breakfast_Burrito"]} className={styles.foodImage}/>
            <p>MEAT LOVERS BURRITO</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Extreme_Sausage_Sandwich"]} className={styles.foodImage}/>
            <p>EXTREME SAUSAGE SANDWICH</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Ultimate_Breakfast_Sandwich"]} className={styles.foodImage}/>
            <p>ULTIMATE BREAKFAST SANDWICH</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Bacon_Egg_Cheese_Biscuit"]} className={styles.foodImage}/>
            <p>BACON EGG AND CHEESE BISCUIT</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Sausage_Egg_Cheese_Buscuit"]} className={styles.foodImage}/>
            <p>SAUSAGE EGG CHEESE BUSCUIT</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Breakfast_Jack"]} className={styles.foodImage}/> 
            <p>BREAKFAST JACK</p>           
        </div>
        <div className={styles.gridItem}>
            <img src={images["Sausage_Breakfast_Jack"]} className={styles.foodImage}/>
            <p>SAUSAGE BREAKFAST JACK</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Bacon_Breakfast_Jack"]} className={styles.foodImage}/>    
            <p>BACON BREAKFAST JACK</p>        
        </div>
        <div className={styles.gridItem}>
            <img src={images["Jumbo_Breakfast_Platter"]} className={styles.foodImage}/>
            <p>JUMBO BREAKFAST PLATTER</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Hashbrown"]} className={styles.foodImage}/>
            <p>GRILLED SOURDOUGH SWISS SANDWHICH</p>        
        </div>
        <div className={styles.gridItem}>
            <img src={images["Mini_Pancakes"]} className={styles.foodImage}/>
            <p>MINI PANCAKES</p>
        </div>
    </div>
    )

}

export default BreakfastPage;