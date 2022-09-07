import React from 'react';
import {useNavigate} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import {CountryData} from './CountryData.js';
import styles from './styles.module.css';

function CountryPage() {
    const navigate = useNavigate();
    let listArray = [];

    const getSelectedItem = (e) => {
        let selectedCountry = e.target.innerHTML;
        selectedCountry = clickedItem.replaceAll(" ", "");
        navigate("/Locations/select-country/" + selectedCountry);
    }


    for(let item in CountryData){
        listArray.push(<a key={uuid()} className={styles.itemLinks} onClick={getSelectedItem}> {CountryData[item]}</a>)
    }

    return(
        <div className={styles.listContainer}>
            {listArray}
        </div>
        )
}

export default CountryPage;