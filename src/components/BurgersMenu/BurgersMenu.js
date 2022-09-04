import React, {useEffect} from 'react';
import images from './images/*.png'
import styles from './styles.module.css';
import {Link} from 'react-router-dom';
import {allDescriptions} from './allDescriptions.js';

function BurgersMenu(){

    const storeIntoLocalStorage = (e) => {
        const choosenItem = e.target.querySelector("div");
        let itemData = {};
        let itemString;

        //using string methods to convert "SOURDOUGH JACK" -> "sourdough-jack"
        let itemTitle = choosenItem.querySelector("p").innerHTML.toLowerCase();
        itemTitle = itemTitle.replaceAll(" ", "-")
        console.log(itemTitle);

        //storing item into the local storage
        itemData["itemImage"] = choosenItem.querySelector("img").getAttribute("src");
        itemData["itemTitle"] = itemTitle;
        itemData["itemDesc"] = choosenItem.getAttribute("data-desc");
        itemString = JSON.stringify(itemData);
        localStorage.setItem(itemTitle, itemString);
    }

    useEffect(() => {
        //keep in mind that all <Link> components get transpiled into <a> tags
        let allLinks = Array.from(document.querySelectorAll("." + styles.gridItem));
        allLinks.forEach((link) => {
            link.addEventListener("click", storeIntoLocalStorage);
        })
        return () => {
            allLinks.forEach((link) => {
                link.removeEventListener("click", storeIntoLocalStorage);
            })
        }
    }, []) 

    return(
        <div className={styles.container}> 
            <div className={styles.title}>BURGERS</div>
            <Link to={"/food/sourdough-jack"} className={styles.gridItem}>
                <div className={styles.eventBubbling} data-desc={allDescriptions.sourdoughJack}>
                    <img src={images["Sourdough_Jack"]} className={styles.foodImage}/>
                    <p>SOURDOUGH JACK</p>
                </div>
            </Link>
            <Link to={"/food/classic-buttery-jack"} className={styles.gridItem}>
                <div className={styles.eventBubbling} data-desc={allDescriptions.classicButteryJack}>
                    <img src={images["Classic_Buttery_Jack"]} className={styles.foodImage}/> 
                    <p>CLASSIC BUTTERY JACK</p>
                </div>
            </Link>
            <Link to={"/food/bacon-buttery-jack"} className={styles.gridItem}>
                <div className={styles.eventBubbling} data-desc={allDescriptions.baconButteryJack}>
                    <img src={images["Bacon_Buttery_Jack"]} className={styles.foodImage}/>
                    <p>BACON BUTTERY JACK</p>
                </div>
            </Link>
            <Link to={"/food/double-jack"} className={styles.gridItem}>
                <div className={styles.eventBubbling} data-desc={allDescriptions.doubleJack}>
                    <img src={images["Double_Jack"]} className={styles.foodImage}/>  
                    <p>DOUBLE JACK</p>
                </div>
            </Link>
            <Link to={"/food/ultimate-cheeseburger"} className={styles.gridItem}>
                <div className={styles.eventBubbling} data-desc={allDescriptions.ultimateCheeseburger}>
                    <img src={images["Ultimate_Cheeseburger"]} className={styles.foodImage}/>     
                    <p>ULTIMATE CHEESEBURGER</p>
                </div>
            </Link>         
            <Link to={"/food/bacon-ultimate-cheeseburger"} className={styles.gridItem}>
                <div className={styles.eventBubbling} data-desc={allDescriptions.baconUltimateCheeseburger}>
                    <img src={images["Bacon_Ultimate_CheeseBurger"]} className={styles.foodImage}/>
                    <p>BACON ULTIMATE CHEESEBURGER</p>
                </div>
            </Link>
            <Link to={"/food/jumbo-jack-cheeseburger"} className={styles.gridItem}>
                <div className={styles.eventBubbling} data-desc={allDescriptions.jumboJackCheeseBurger}>
                    <img src={images["Jumbo_Jack"]} className={styles.foodImage}/>
                    <p>JUMBO JACK CHEESEBURGER</p>
                </div>
            </Link>
            <Link to={"/food/jumbo-jack"} className={styles.gridItem}>
                <div className={styles.eventBubbling} data-desc={allDescriptions.jumboJack}>
                    <img src={images["Jumbo_Jack_NoCheese"]} className={styles.foodImage}/>
                    <p>JUMBO JACK</p>
                </div>
            </Link>   
            <Link to={"/food/jr-jumbo-jack"} className={styles.gridItem}>
                <div className={styles.eventBubbling} data-desc={allDescriptions.jrJumboJack}>
                    <img src={images["Jr_Jumbo_Jack_NoCheese"]} className={styles.foodImage}/> 
                    <p>JR JUMBO JACK</p>
                </div>
            </Link>
            <Link to={"/food/jr-jumbo-jack-cheeseburger"} className={styles.gridItem}>
                <div className={styles.eventBubbling} data-desc={allDescriptions.jrJumboJackCheeseburger}>
                    <img src={images["Jr_Jumbo_Jack"]} className={styles.foodImage}/>    
                    <p>JR JUMBO JACK CHEESEBURGER</p>  
                </div>
            </Link>      
            <Link to={"/food/jr-bacon-cheeseburger"} className={styles.gridItem}>
                <div className={styles.eventBubbling} data-desc={allDescriptions.jrBaconCheeseburger}>
                    <img src={images["Jr_Bacon_CheeseBurger"]} className={styles.foodImage}/>
                    <p>JR BACON CHEESEBURGER</p>
                </div>
            </Link>
        </div>
    )
}

export default BurgersMenu;