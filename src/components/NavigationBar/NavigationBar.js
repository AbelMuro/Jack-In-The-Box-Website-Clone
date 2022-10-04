import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {faBurger, faTag, faLocationDot, faCarSide} from '@fortawesome/free-solid-svg-icons';
import {faTiktok, faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from './images/jack in the box logo.png';
import styles from './styles.module.css';

function NavigationBar() {
    const selectedLink = (e) => {
        let navLinks = Array.from(document.querySelector("." + styles.foodMenu).children);
        navLinks.forEach((link) => {
            if(link.classList.contains(styles.currentLink))
                link.classList.remove(styles.currentLink);
        })
        e.target.classList.add(styles.currentLink);
        changeNavBar(e);
    }

    return(
        <>
            <div className={styles.navigationBar}>
                <div className={styles.foodMenu}>
                    <Link to="/" className={styles.logoContainer} onClick={selectedLink}>
                        <img src={logo} className={styles.logo}/> 
                    </Link>
                    <Link to="/food" className={styles.itemOne} onClick={selectedLink}>
                       <span className={styles.eventBubbling}> 
                            <FontAwesomeIcon icon={faBurger}/> <br className={styles.breakLine}/> FOOD
                       </span>
                    </Link>
                    <Link to="/OffersAndStuff" className={styles.itemTwo} onClick={selectedLink}>
                        <span className={styles.eventBubbling}> 
                            <FontAwesomeIcon icon={faTag}/> <br className={styles.breakLine}/> OFFERS {"&"} STUFF
                        </span>
                    </Link>
                    <Link to="/Locations" className={styles.itemThree} onClick={selectedLink}> 
                        <span className={styles.eventBubbling}> 
                            <FontAwesomeIcon icon={faLocationDot}/><br className={styles.breakLine}/> LOCATION
                        </span>
                    </Link>
                    <Link to="/Delivery" className={styles.itemFour} onClick={selectedLink}>
                        <span className={styles.eventBubbling}> 
                            <FontAwesomeIcon icon={faCarSide}/><br className={styles.breakLine}/> DELIVERY
                        </span>
                    </Link>
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