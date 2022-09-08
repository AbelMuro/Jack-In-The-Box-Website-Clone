import React from 'react';
import styles from './styles.module.css';
import chickenStrips from './images/chicken strips.jpg';
import frenchToast from './images/french toast.jpg';
import oreoShake from './images/oreo shake.jpg';
import munchieBox from './images/munchie box.jpg';

function FeaturedMenuItems() {

    return(
        <main className={styles.container}>
            <h2 className={styles.gridItemOne}>
                FEATURED MENU ITEMS
            </h2>
            <div className={styles.gridItemTwo}>
                <img src={chickenStrips} className={styles.gridImages}/>
                <h3 className={styles.itemTitle}>
                    3PC SPICY CHICKEN STRIPS
                </h3>
                <p className={styles.description}>
                    They're back and as crispy and juicy as ever! 
                    Jack's 100% all-white meat Spicy Chicken Strips 
                    have an irresistible kick. Amp up these crunchy, 
                    spicy strips with Spicy Good Good Sauce.
                </p>
            </div>        
            <div className={styles.gridItemThree}>
                <img src={frenchToast} className={styles.gridImages}/>   
                <h3 className={styles.itemTitle}>
                    6PC FRENCH TOAST STICK W/ SYRUP
                </h3>
                <p className={styles.description}>
                    These French Toast Sticks with syrup are the 
                    perfect accessory to any meal. Plus, they're 
                    served all day. Pick up six French Toast Sticks 
                    to add to your breakfast, lunch, dinner, and even 
                    late night meals. French Toast doesn't have a 
                    serving time. French Toast is forever.
                </p>          
            </div>        
            <div className={styles.gridItemFour}>
                <img src={munchieBox} className={styles.gridImages}/>
                <h3 className={styles.itemTitle}>
                    MEGA MUNCHIE BOX
                </h3>
                <p className={styles.description}>
                    With Jack's Mega Munchie Box, it's go big or go home. 
                    Or, go big and then go home because you picked it up at 
                    the drive-thru. Either way, this box is packed with all 
                    your faves like Curly Fries, 30 Chicken Nuggets, 45 Tiny 
                    Tacos, and of course Buttermilk Ranch and Creamy Avocado 
                    Lime dipping sauces. It's perfect to share, but only if 
                    they'll help you carry it.
                </p> 
            </div>
            <div className={styles.gridItemFive}>
                <img src={oreoShake} className={styles.gridImages}/>
                <h3 className={styles.itemTitle}>
                    OREO COOKIE ULTIMATE CHOCOLATE SHAKE
                </h3>
                <p className={styles.description}>
                    It’s the best of both worlds - our rich old-fashioned 
                    chocolate shake with fan-favorite Oreo® cookie crumbles 
                    mixed in and topped off with whipped cream and a maraschino 
                    cherry. You don't have to thank us for this game changer, 
                    but you're welcome to.
                </p> 
            </div>

            <div className={styles.gridItemSix}>
                <button className={styles.blackButton}> 
                    VIEW MENU 
                </button>
            </div>
                
                
        </main>
    )

}

export default FeaturedMenuItems;
