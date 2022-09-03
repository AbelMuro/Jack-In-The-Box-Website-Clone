import React, {useState} from 'react';
import {Outlet, Link} from 'react-router-dom';
import styles from './styles.module.css';

function FoodPage(){
    const [, forceRender] = useState(0);


    const selectedLink = (e) => {
        let redBoxLinks = Array.from(document.querySelectorAll("." + styles.type));
        redBoxLinks.forEach((link) => {
            if(link.classList.contains(styles.currentLink))
                link.classList.remove(styles.currentLink)         
        })
        e.target.classList.add(styles.currentLink);
        forceRender(1);
    }

    return(
        <div className={styles.menuContainer}>
            <div className={styles.redBox}>
                <div className={styles.itemTypes}>
                    <Link to="/food/" className={[styles.type, styles.currentLink].join(" ")} onClick={selectedLink}>
                        BURGER
                    </Link>
                    <Link to="/food/ChickenAndSalad" className={styles.type} onClick={selectedLink}>
                        CHICKEN {"&"} SALADS
                    </Link>
                    <Link to="/food/TacosFriesSides" className={styles.type} onClick={selectedLink}>
                        TACOS, FRIES {"&"} SIDES
                    </Link>
                    <Link to="/food/Breakfast" className={styles.type} onClick={selectedLink}>
                        BREAKFAST
                    </Link>
                    <Link to="/food/LateNight" className={styles.type} onClick={selectedLink}>
                        LATE NIGHT
                    </Link>
                    <Link to="/food/ShakesAndDesserts" className={styles.type} onClick={selectedLink}>
                        SHAKES {"&"} DESSERTS
                    </Link>
                    <Link to="/food/Drinks" className={styles.type} onClick={selectedLink}>
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