import React from 'react';
import {GoogleMap , useLoadScript, Marker} from '@react-google-maps/api';
import styles from './styles.module.css';

function MyGoogleMap(){

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "",
    })
  
    return isLoaded ? (
        <>
                <GoogleMap
                    zoom={15}
                    mapContainerClassName={styles.googleMap}
                    center={{lat: 39.823200, lng: -86.259760 }}
                    options={{
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}>
        
                    <Marker position={{lat: 39.823200, lng: -86.259760 }}/>

                </GoogleMap>        
        </>
    ) : (<div> is loading.... </div>)
}


export default MyGoogleMap;
