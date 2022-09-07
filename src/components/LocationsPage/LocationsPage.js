import React, {useEffect} from 'react';
import styles from './styles.module.css';
import {Outlet, useNavigate} from 'react-router-dom';

function LocationsPage(){
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/Locations/select-country");
    },[])

    return(
        <main className={styles.locationsContainer}>
            <div className={styles.URL}>
                <a>ALL LOCATIONS</a> {">"} US
            </div>
            <div className={styles.covidMessage}>
                <h2 className={styles.title}>
                    Important Notice Regarding Hours of Operation
                </h2>
                <p className={styles.message}>
                    Due to the ever-changing situation involving COVID-19, 
                    hours of operation may be impacted. Drive-thru and delivery 
                    options are available, and some of our dining rooms are open 
                    for take-out ordered in person or through the Jack in the Box 
                    Mobile App. Please contact the store directly for the most 
                    accurate information.
                </p>
            </div>
            <div>
                <Outlet/>
            </div>

        </main>
    )

}

export default LocationsPage;        
