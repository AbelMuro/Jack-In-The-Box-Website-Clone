import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {faBurger, faTag, faLocationDot, faCarSide} from '@fortawesome/free-solid-svg-icons';
import {faTiktok, faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from './images/jack in the box logo.png';
import styles from './styles.module.css';

function NavigationBar() {

    function changeNavBar(e){
        let navBar = e.target.parentElement.parentElement;
        let foodMenu = navBar.querySelector("." + styles.foodMenu);
        let foodMenuItems = Array.from(foodMenu.children);
        let socialMedia = navBar.querySelector("." + styles.socialMedia);
        let socialMediaItems = socialMedia.children;
        foodMenuItems.forEach((item) => {
            item.style.color = "#545554";
        })
    }



    const selectedLink = (e) => {
        let navLinks = Array.from(document.querySelector("." + styles.foodMenu).children);
        navLinks.forEach((link) => {
            if(link.classList.contains(styles.currentLink))
                link.classList.remove(styles.currentLink);
        })
        e.target.classList.add(styles.currentLink);
        
        if(e.target.id == "changeNavBar"){
            changeNavBar(e);
        }
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
                            <FontAwesomeIcon icon={faBurger}/> FOOD
                       </span>
                    </Link>
                    <Link to="/OffersAndStuff" className={styles.itemTwo} onClick={selectedLink}>
                        <span className={styles.eventBubbling}> 
                            <FontAwesomeIcon icon={faTag}/> OFFERS {"&"} STUFF
                        </span>
                    </Link>
                    <Link to="/LocationsPage" id="changeNavBar"className={styles.itemThree} onClick={selectedLink}> 
                        <span className={styles.eventBubbling}> 
                            <FontAwesomeIcon icon={faLocationDot}/> LOCATION
                        </span>
                    </Link>
                    <div className={styles.itemFour} onClick={selectedLink}>
                        <span className={styles.eventBubbling}> 
                            <FontAwesomeIcon icon={faCarSide}/> DELIVERY
                        </span>
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