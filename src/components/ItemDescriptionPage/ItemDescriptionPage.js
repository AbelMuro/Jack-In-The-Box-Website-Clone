import React from 'react';
import {useParams} from 'react-router-dom';
import styles from './styles.module.css';
import {v4 as uuid} from 'uuid';
import appStoreButton from './images/appStoreButton.png';
import googlePlayButton from './images/googlePlayButton.png';
import jack from './images/jack.png'

function ItemDescription() {
    const {choosenItem} = useParams();
    console.log(choosenItem);
    const titleAndImage = [];  
    let itemDesc;
    let item = localStorage.getItem(choosenItem);
    item = JSON.parse(item);

    let modifiedTitle = item.itemTitle.replace("-", " ");
    modifiedTitle = modifiedTitle.toUpperCase();
    titleAndImage.push(<div key={uuid()} className={styles.itemTitle}> {modifiedTitle}</div>); 
    titleAndImage.push(<img key={uuid()} className={styles.itemImage} src={item.itemImage}/>);
    itemDesc = (<div className={styles.itemDesc}>{item.itemDesc}</div>)

    return(
        <div className={styles.itemContainer}>
            <div className={styles.whiteBox}>
                {titleAndImage}
            </div>
            <div className={styles.purpleAndRedBox}>
                <div className={styles.purpleBox}>
                    {itemDesc}
                    <div className={styles.nutritionAndIngredients}>
                        <div>
                            NUTRITION INFO
                        </div> 
                        <div>
                            INGREDIENTS
                        </div>
                    </div>
                    <div className={styles.notAllMenuItems}>
                        NOT ALL MENU ITEMS ARE AVAILABLE IN ALL LOCATIONS
                    </div>
                </div>

                <div className={styles.redBox}>
                    <div className={styles.left}>
                        <div className={styles.title}>
                            <div className={styles.orderNow}>ORDER NOW</div>
                            <div className={styles.onTheJackApp}>ON THE JACK APP</div>
                        </div>
                        <div className={styles.blackButtons}>
                            <img src={appStoreButton} className={styles.appStoreButton}/>
                            <img src={googlePlayButton} className={styles.googlePlayButton}/>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <img src={jack} className={styles.jackImage}/>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default ItemDescription;