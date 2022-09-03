import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTiktok, faInstagram, faFacebook, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import styles from "./styles.module.css";

function SocialMediaBar() {

    return (
        <div className={styles.SocialMediaBar}>
            <div className={styles.SocialMediaItem}>
                <FontAwesomeIcon icon={faTiktok} />
            </div>
            <div className={styles.SocialMediaItem}>
                <FontAwesomeIcon icon={faInstagram}/>
            </div>
            <div className={styles.SocialMediaItem}>
               <FontAwesomeIcon icon={faFacebook}/>
            </div>
            <div className={styles.SocialMediaItem}>
                <FontAwesomeIcon icon={faTwitter}/>
            </div>
            <div className={styles.SocialMediaItem}>
                <FontAwesomeIcon icon={faYoutube}/>
            </div>
        </div>

    )
}

export default SocialMediaBar;