import React from 'react';
import FeaturedMenuItems from './FeaturedMenuItems';
import MoreInfo from './MoreInfo';
import styles from './styles.module.css';

function LocationsPage(){

    return(
        <>
            <main className={styles.Container}>
                <header className={styles.restaurantInfoContainer}>
                    <h1 className={styles.gridItemOne}>
                        JACK IN THE BOX
                    </h1>
                    <div className={styles.gridItemTwo}>
                        <p className={styles.hours}>
                            HOURS OF OPERATION
                        </p>
                        <select className={styles.dropdown}>
                            <option defaultValue="">6:00 AM - 1:00 AM</option>
                        </select>
                    </div>
                    <div className={styles.gridItemThree}>
                        5613 W 38TH ST INDIANAPOLIS, IN 462554
                        <br/><br/>
                        {"("}317{")"}291-5703
                    </div>
                    <div className={styles.gridItemFour}>
                        <button className={styles.blackButtons}> GET DIRECTIONS</button>
                        <button className={styles.blackButtons}> GET DELIVERY</button>
                    </div>
                </header>
            </main>
            <FeaturedMenuItems/>   
            <MoreInfo/>     
        </>

    )

}

export default LocationsPage;        
