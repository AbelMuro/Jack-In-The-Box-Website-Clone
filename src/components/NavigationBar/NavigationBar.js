import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {faBurger, faTag, faLocationDot, faCarSide} from '@fortawesome/free-solid-svg-icons';
import {faTiktok, faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from './images/jack in the box logo.png';
import styles from './styles.module.css';

function NavigationBar() {
    return(
        <>
            <div className={styles.navigationBar}>
                <div className={styles.foodMenu}>
                    <Link to="/" className={styles.logoContainer}>
                        <img src={logo} className={styles.logo}/> 
                    </Link>
                    <Link to="/food" className={styles.itemOne}>
                       <FontAwesomeIcon icon={faBurger}/> FOOD
                    </Link>
                    <div className={styles.itemTwo}>
                        <FontAwesomeIcon icon={faTag}/> OFFERS {"&"} STUFF
                    </div>
                    <div className={styles.itemThree}> 
                       <FontAwesomeIcon icon={faLocationDot}/> LOCATION
                    </div>
                    <div className={styles.itemFour}>
                        <FontAwesomeIcon icon={faCarSide}/> DELIVERY
                    </div>
                </div>

                <div className={styles.socialMedia}>
                    <div className={styles.navItem}>
                        <FontAwesomeIcon icon={faTiktok} />
                    </div>
                    <div className={styles.navItem}>
                        <FontAwesomeIcon icon={faInstagram}/>
                    </div>
                    <div className={styles.navItem}>
                        <FontAwesomeIcon icon={faFacebook}/>
                    </div>
                    <div className={styles.navItem}>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </div>
                    <div className={styles.navItem}>
                        <FontAwesomeIcon icon={faYoutube}/>
                    </div>
                </div>
            </div>
        </>
    )


}

export default NavigationBar;