import React from 'react';
import {useNavigate} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import {CountryData} from './CountryData.js';
import styles from './styles.module.css';

function CountryPage() {
    const navigate = useNavigate();
    let listArray = [];

    const storeIntoLocalStorage = (e) => {
        let clickedItem = e.target.innerHTML;
        clickedItem = clickedItem.replaceAll(" ", "");
        console.log(clickedItem);
        localStorage.setItem(clickedItem, clickedItem);
        navigate("/Locations/country/" + clickedItem);
    }


    for(let item in CountryData){
        listArray.push(<a key={uuid()} className={styles.itemLinks} onClick={storeIntoLocalStorage}> {CountryData[item]}</a>)
    }

    return(
        <div className={styles.listContainer}>
            {listArray}
        </div>
        )
}

export default CountryPage;