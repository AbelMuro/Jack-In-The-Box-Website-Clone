import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

function TextCarousel() {


    const moveSlides = (e) => {


    }

    return(
        <main>
            <h2 className={styles.title}>
                NEARBY JACK IN THE BOX LOCATIONS
            </h2>
            <section className={carouselContainer}>
                
                <button className={styles.left} onClick={moveSlides}>
                    <span className={styles.eventBubbling}>
                        <FontAwesomeIcon icon={faArrowLeft}/>                        
                    </span>
                </button>

                <div className={styles.window}>
                    <div className={styles.flexContainer}>
                        <div className={[styles.nestedFlex, styles.currentSlide].join(" ")}>
                            <h3>
                                JACK IN THE BOX PHOENIX
                            </h3>
                            <p>
                                <span>
                                    OPEN 24 HOURS
                                </span>
                                2645 X CAREFREE HWY
                                PHOENIX, AZ 85085
                                (623)587-9515  
                            </p>
                        </div>
                        <div className={styles.nestedFlex}>
                            <h3>
                                JACK IN THE BOX PHOENIX
                            </h3>
                            <p>
                                <span>
                                    OPEN 24 HOURS
                                </span>
                                2113 W HAPPY VALEY RD
                                PHOENIX, AZ 85085
                                (623)869-5006
                            </p>
                        </div>
                        <div className={styles.nestedFlex}>
                            <h3>
                                JACK IN THE BOX PHOENIX
                            </h3>
                            <p>
                                <span>
                                    OPEN 24 HOURS
                                </span>
                                2141 W DEER VALLEY RD
                                PHOENIX, AZ 85027
                                (623)582-0894
                            </p>
                        </div>

                    </div>
                </div>

                <button className={styles.right} onClick={moveSlides}>
                    <span className={styles.eventBubbling}>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </span>
                </button>


            </section>
        </main>

    )

}

export default TextCarousel;