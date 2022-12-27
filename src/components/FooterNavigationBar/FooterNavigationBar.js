import React, {useEffect, useState, useRef} from 'react';
import SocialMediaBar from './SocialMediaBar';
import jackInTheBoxlogo from './images/jack in the box logo.png';
import styles from "./styles.module.css";
import {useMediaQuery} from 'react-responsive';

function FooterNavigationBar() {
    const mobile = useMediaQuery({query: "(max-width: 1000px)"});
    const [,forceRender] = useState(0);
    let display = useRef(false);
 
    const checkViewportWidth = () => {
        let logo = document.querySelector("." + styles.footerLogo);
        if(window.innerWidth <= 1000){
            if(logo.classList.contains(styles.disappear)){
                logo.classList.remove(styles.disappear)
                logo.classList.add(styles.appear);     
                display.current = true;
                forceRender(1);         
            }
        }
        else{
            if(!logo.classList.contains(styles.disappear)){
                logo.classList.add(styles.disappear);
                logo.classList.remove(styles.appear);
                display.current = false;
                forceRender(2);
            }
        }
    }

    useEffect(() => {
        window.addEventListener("resize", checkViewportWidth);

        return () => {
            window.removeEventListener("resize", checkViewportWidth)
        }
    })

    //the event listener in the useEffect above only runs when the user resizes the window
    //so when the user initially views the website in mobile, the footer nav bar will not appear
    //the useEffect below will solve that problem
    useEffect(() => {
        if(mobile){
            let logo = document.querySelector("." + styles.footerLogo);
            logo.classList.remove(styles.disappear)
            logo.classList.add(styles.appear);     
            display.current = true;
            forceRender(3);
        }
    }, [])

    return( //rememebr to put dissapear class next to footerLogo
        <>
        <div className={styles.footerContainer}>
            <div className={styles.copyright}>
                <img src={jackInTheBoxlogo} className={[styles.footerLogo, styles.disappear].join(" ")}/>         
               <div> DIFFERENT RULES, LLC. 2022</div>
            </div>

            <div className={styles.footer}>
                <div className={styles.footerItem}> CONTACT US</div>
                <div className={styles.footerItem}> FAQ </div>
                <div className={styles.footerItem}> COOKIES </div>
                <div className={styles.footerItem}> DON'T SELL MY PERSONAL INFORMATION</div>
                <div className={styles.footerItem}> CAREERS </div>
                <div className={styles.footerItem}> INVESTORS</div>
                <div className={styles.footerItem}> FRANCHISING</div>
                <div className={styles.footerItem}> LEGAL STUFF </div>
            </div>
        </div>
        {display.current == true && <SocialMediaBar/>}
        </>

    )

}

export default FooterNavigationBar;