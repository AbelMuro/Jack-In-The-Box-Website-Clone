import React from 'react';
import images from './images/*.png';
import styles from './styles.module.css';

function DrinksMenu(){
    return(
    <div className={styles.container}>
        <div className={styles.title}>DRINKS</div>
        <div className={styles.gridItem}>
            <img src={images["CocaCola"]} className={styles.foodImage}/>
            <p>COCA-COLA</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["DietCoke"]} className={styles.foodImage}/>
            <p>DIET COKE</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["CokeZero"]} className={styles.foodImage}/>   
            <p>COKE ZERO</p>        
        </div>
        <div className={styles.gridItem}>
            <img src={images["Sprite"]} className={styles.foodImage}/> 
            <p>SPRITE</p>           
        </div>
        <div className={styles.gridItem}>
            <img src={images["FantaOrange"]} className={styles.foodImage}/>
            <p>FANTA ORANGE</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["BarqsRootBeer"]} className={styles.foodImage}/>
            <p>BARQ'S ROOT BEER</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["DrPepper"]} className={styles.foodImage}/>
            <p>DR PEPPER</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["DietDrPepper"]} className={styles.foodImage}/>
            <p>DIET DR PEPPER</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["MinuteMaidLemonade"]} className={styles.foodImage}/>
            <p>MINUTE MAID LEMONADE</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["HiCFruitPunch"]} className={styles.foodImage}/> 
            <p>HI-C FRUIT PUNCH</p>           
        </div>
        <div className={styles.gridItem}>
            <img src={images["FantaStrawberry"]} className={styles.foodImage}/>
            <p>FANTA STRAWBERRY</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["FuzeIcedTea"]} className={styles.foodImage}/>    
            <p>FUZE ICED TEA</p>        
        </div>
        <div className={styles.gridItem}>
            <img src={images["FuzeIcedTeaZeroSugar"]} className={styles.foodImage}/>
            <p>FUZED ICED TEA ZERO SUGAR</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["FreshBrewedIcedTea"]} className={styles.foodImage}/>
            <p>GOLD PEAK FRESH BREWED ICED TEA</p>        
        </div>
        <div className={styles.gridItem}>
            <img src={images["IcedCoffeeVanilla"]} className={styles.foodImage}/>
            <p>VANILLA SWEET CREAM ICED COFFEE</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["MochaIcedCoffee"]} className={styles.foodImage}/>
            <p>MOCHA ICED COFFEE</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["HighMountainArabicaCoffee"]} className={styles.foodImage}/>
            <p>HIGH MOUNTAIN ARABICA COFFEE</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["SimplyOrange"]} className={styles.foodImage}/>
            <p>SIMPLY ORANGE</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["MinuteMaidAppleJuice"]} className={styles.foodImage}/>
            <p>MINUTE MAID APPLE JUICE</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["DasaniBottledWater"]} className={styles.foodImage}/>
            <p>DasaniBottleWater</p>
        </div>
        <div className={styles.gridItem}>
            <img src={images["Milk"]} className={styles.foodImage}/>
            <p>1% LOW FAT MILK BOTTLE</p>
        </div>
    </div>
    )

}

export default DrinksMenu;