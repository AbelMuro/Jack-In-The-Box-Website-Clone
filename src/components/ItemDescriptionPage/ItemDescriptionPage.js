import React from 'react';
import {useParams} from 'react-router-dom';
import styles from './styles.module.css';
import {v4 as uuid} from 'uuid';

function ItemDescription() {
    const {choosenItem} = useParams();
    const ReactArray = [];    
    let item = localStorage.getItem(choosenItem);

    item = JSON.parse(item);
    let modifiedTitle = item.itemTitle.replace("-", " ");
    modifiedTitle = modifiedTitle.toUpperCase();
    ReactArray.push(<div key={uuid()} className={styles.itemTitle}> {modifiedTitle}</div>); 
    ReactArray.push(<img key={uuid()} className={styles.itemImage} src={item.itemImage}/>);

    return(
        <div className={styles.itemContainer}>
            <div className={styles.itemTitleImage}>
                {ReactArray}
            </div>
            <div className={styles.itemInfo}>
                <div className={styles.itemDesc}>
                    placeholder
                </div>
                <div className={styles.orderNowOnJackApp}>
                    placeholder
                </div>
            </div>

        </div>
    )

}

export default ItemDescription;