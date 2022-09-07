import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {StateData} from './StateData.js';
import {v4 as uuid} from 'uuid';
import styles from './styles.module.css';

function StatePage(){
    const {country} = useParams();
    const navigate = useNavigate();
    const stateList = [];
    const Country = StateData[country];

    const getSelectedItem = (e) => {
        let selectedState = e.target.innerHTML;
        selectedState.replaceAll(" ", "");
        navigate("/Locations/select-country/" + country + "/" + selectedState);
    }

    for(let state in Country){
        stateList.push(<a key={uuid()} className={styles.stateItem} onClick={getSelectedItem}> {Country[state]} </a>)
    }

    return(
        <div>
            {stateList}
        </div>
    )

}

export default StatePage;