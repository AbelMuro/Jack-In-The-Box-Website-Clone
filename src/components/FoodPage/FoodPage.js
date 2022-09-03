import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import styles from './styles.module.css';

function FoodPage(){

    return(
        <div className={styles.menuContainer}>
            <div className={styles.redBox}>
                <div className={styles.itemTypes}>
                    <Link to="/food/Burgers" className={styles.type}>
                        BURGER
                    </Link>
                    <Link to="/food/ChickenAndSaladPage" className={styles.type}>
                        CHICKEN {"&"} SALADS
                    </Link>
                    <Link to="/food/TacosFriesSides" className={styles.type}>
                        TACOS, FRIES {"&"} SIDES
                    </Link>
                    <Link to="/food/Breakfast" className={styles.type}>
                        BREAKFAST
                    </Link>
                    <Link to="/food/LateNight" className={styles.type}>
                        LATE NIGHT
                    </Link>
                    <Link to="/food/ShakesAndDesserts" className={styles.type}>
                        SHAKES {"&"} DESSERTS
                    </Link>
                    <Link to="/food/Drinks" className={styles.type}>
                        DRINKS
                    </Link>
                </div>                
                <div className={styles.otherInfo}>
                        <div>
                            INGREDIENTS |
                        </div>  
                        <div>
                            ALLERGENS |
                        </div>
                        <div>
                            NUTRITION
                        </div> 
                </div>
            </div>
            <div className={styles.whiteBox}>
                <Outlet/>
            </div>
        </div>
    )
}

export default FoodPage;