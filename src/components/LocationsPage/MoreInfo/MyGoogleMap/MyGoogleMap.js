import React, {useState, useCallback} from 'react';
import {GoogleMap , useLoadScript} from '@react-google-maps/api';
import styles from './styles.module.css';

function MyGoogleMap(props){
    const [map, setMap] = useState();
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyDSJo88uqWG6bFiFqCXyIwW6iKHTn__eLA",
    })


    const geocode = (map) => {
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode({address: props.address}, (results, status) => {
            if(status == "OK"){
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: map
                })
            }
            else{
                console.log("error");
            }
        })

    }

    const onLoad = useCallback((map) => {
        geocode(map);        
        setMap(map);
    })

    return isLoaded ? (
        <>
                <GoogleMap
                    zoom={15}
                    mapContainerClassName={styles.googleMap}
                    onLoad={onLoad}
                    options={{
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                    unMount={(map) => setMap(null)}>

                </GoogleMap>        
        </>
    ) : (<div> is loading.... </div>)
}


export default MyGoogleMap;