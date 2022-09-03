import React from 'react';
import images from './images/*.png';
import styles from './styles.module.css';

function LateNightMenu(){
    return(
    <div className={styles.container}>
        <div className={styles.title}>LATE NIGHT</div>
        <div className={styles.gridItem}>
            <img src={images["SpicyNachoChickenMeal"]} className={styles.foodImage}/>
            <p>SPICY NACHO MUNCHIE MEAL</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["SirachaBurgerMunchieMeal"]} className={styles.foodImage}/>
            <p>SIRACHA BURGER MUNCHIE MEAL</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["StackedGrilledCheeseBurger"]} className={styles.foodImage}/>   
            <p>STACKED GRILLED CHEESE BURGER MUNCHIE MEAL</p>        
        </div>
        <div className={styles.gridItem}>
            <img src={images["ChickenNTaterMunchieMeal"]} className={styles.foodImage}/> 
            <p>CHICK-N-TATER MELT MUNCHIE MEAL</p>           
        </div>
    </div>
    )

}

export default LateNightMenu;