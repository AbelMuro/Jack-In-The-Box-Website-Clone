import React, {useEffect} from 'react';
import images from './images/*.png'
import styles from './styles.module.css';
import {Link} from 'react-router-dom';

function BurgersMenu(){

    const storeIntoLocalStorage = (e) => {
        const choosenItem = e.target.querySelector("div");
        let itemData = {};
        let itemString;
        //using string methods to convert "SOURDOUGH JACK" -> "sourdough-jack"
        let itemTitle = choosenItem.querySelector("p").innerHTML.toLowerCase();
        itemTitle = itemTitle.replace(" ", "-")

        //storing item into the local storage
        itemData["itemImage"] = choosenItem.querySelector("img").getAttribute("src");
        itemData["itemTitle"] = itemTitle;
        itemString = JSON.stringify(itemData);
        localStorage.setItem(itemTitle, itemString);
    }

    useEffect(() => {
        //keep in mind that all <Link> components get transpiled into <a> tags
        let allLinks = Array.from(document.querySelectorAll("a"));
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
                <div className={styles.eventBubbling}>
                    <img src={images["Sourdough_Jack"]} className={styles.foodImage}/>
                    <p>SOURDOUGH JACK</p>
                </div>
            </Link>
            <div className={styles.gridItem}>
                <img src={images["Classic_Buttery_Jack"]} className={styles.foodImage}/> 
                <p>CLASSIC BUTTERY JACK </p>
            </div>
            <div className={styles.gridItem}>
                <img src={images["Bacon_Buttery_Jack"]} className={styles.foodImage}/>
                <p>BACON BUTTERY JACK</p>
            </div>
            <div className={styles.gridItem}>
                <img src={images["Double_Jack"]} className={styles.foodImage}/>  
                <p>DOUBLE JACK</p>
            </div>
            <div className={styles.gridItem}>
                <img src={images["Ultimate_Cheeseburger"]} className={styles.foodImage}/>     
                <p>ULTIMATE CHEESEBURGER</p>
            </div>          
            <div className={styles.gridItem}>
                <img src={images["Bacon_Ultimate_CheeseBurger"]} className={styles.foodImage}/>
                <p>BACON ULTIMATE CHEESEBURGER</p>
            </div>
            <div className={styles.gridItem}>
                <img src={images["Jumbo_Jack"]} className={styles.foodImage}/>
                <p>JUMBO JACK CHEESEBURGER</p>
            </div>
            <div className={styles.gridItem}>
                <img src={images["Jumbo_Jack_NoCheese"]} className={styles.foodImage}/>
                <p>JUMBO JACK</p>
            </div>   
            <div className={styles.gridItem}>
                <img src={images["Jr_Jumbo_Jack_NoCheese"]} className={styles.foodImage}/> 
                <p>JR JUMBO JACK</p>
            </div>  
            <div className={styles.gridItem}>
                <img src={images["Jr_Jumbo_Jack"]} className={styles.foodImage}/>    
                <p>JR JUMBO JACK CHEESEBURGER</p>  
            </div>      
            <div className={styles.gridItem}>
                <img src={images["Jr_Bacon_CheeseBurger"]} className={styles.foodImage}/>
                <p>JR BACON CHEESEBURGER</p>
            </div>
        </div>
    )
}

export default BurgersMenu;