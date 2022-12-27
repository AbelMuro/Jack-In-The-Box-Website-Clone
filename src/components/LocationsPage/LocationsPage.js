import React from 'react';
import FeaturedMenuItems from './FeaturedMenuItems';
import MoreInfo from './MoreInfo';
import styles from './styles.module.css';

function LocationsPage(){

    const expand = (e) => {
        let dropDownButton = e.target;
        dropDownButton.classList.toggle(styles.toggle);
    }

    return(
        <>
            <main>
                <header className={styles.restaurantInfoContainer}>
                    <h1 className={styles.gridItemOne}>
                        JACK IN THE BOX
                    </h1>
                    <div className={styles.gridItemTwo}>
                        <p className={styles.hours}>
                            HOURS OF OPERATION
                        </p>
                    <button className={styles.dropdownButton} onClick={expand}>
                        <div className={styles.timeOpen}>MON 6:00 AM - 1:00 AM</div>
                        <div className={styles.timeOpen}>TUE 6:00 AM - 1:00 AM</div>
                        <div className={styles.timeOpen}>WED 6:00 AM - 1:00 AM</div>
                        <div className={styles.timeOpen}>THUR 6:00 AM - 1:00 AM</div>
                        <div className={styles.timeOpen}>FRI 6:00 AM - 1:00 AM</div>
                        <div className={styles.timeOpen}>SAT 6:00 AM - 1:00 AM</div>
                        <div className={styles.timeOpen}>SUN 6:00 AM - 1:00 AM</div>
                    </button>
                        
                    </div>
                    <div className={styles.gridItemThree}>
                        5613 W 38TH ST INDIANAPOLIS, IN 462554
                        <br/><br/>
                        {"("}317{")"} 291-5703
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

<select className={styles.dropdown}>
<option defaultValue="">6:00 AM - 1:00 AM</option>
</select>