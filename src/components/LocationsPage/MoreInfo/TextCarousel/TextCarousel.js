import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

function TextCarousel() {


    const moveSlides = (e) => {
        let leftOrRight = e.target.classList;
        let slideContainer = e.target.parentElement.querySelector("." + styles.flexContainer);
        let currentSlide = slideContainer.querySelector("." + styles.currentSlide);

        if(leftOrRight == styles.right && currentSlide.nextElementSibling != null){
            let nextSlide = currentSlide.nextElementSibling;
            slideContainer.style.left = nextSlide.getAttribute("data-position") + "px";
            currentSlide.classList.remove(styles.currentSlide);
            nextSlide.classList.add(styles.currentSlide);
        }
    }

    return(
        <main>
            <h2 className={styles.title}>
                NEARBY JACK IN THE BOX LOCATIONS
            </h2>
            <section className={styles.carouselContainer}>
                
                <button className={styles.left} onClick={moveSlides}>
                    <span className={styles.eventBubbling}>
                        <FontAwesomeIcon icon={faArrowLeft}/>                        
                    </span>
                </button>

                <div className={styles.window}>
                    <div className={styles.flexContainer}>
                        <div className={[styles.nestedFlex, styles.currentSlide].join(" ")} data-position={0}>
                            <h3>
                                JACK IN THE BOX PHOENIX
                            </h3>
                            <p>
                                <span>
                                    OPEN 24 HOURS
                                </span>
                                2645 X CAREFREE HWY<br/>
                                PHOENIX, AZ 85085<br/>
                                (623)587-9515 <br/>
                            </p>
                        </div>
                        <div className={styles.nestedFlex} data-position={-500}>
                            <h3>
                                JACK IN THE BOX PHOENIX
                            </h3>
                            <p>
                                <span>
                                    OPEN 24 HOURS
                                </span>
                                2113 W HAPPY VALEY RD<br/>
                                PHOENIX, AZ 85085<br/>
                                (623)869-5006<br/>
                            </p>
                        </div>
                        <div className={styles.nestedFlex} data-position={-1000}>
                            <h3>
                                JACK IN THE BOX PHOENIX
                            </h3>
                            <p>
                                <span>
                                    OPEN 24 HOURS
                                </span>
                                2141 W DEER VALLEY RD<br/>
                                PHOENIX, AZ 85027<br/>
                                (623)582-0894<br/>
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