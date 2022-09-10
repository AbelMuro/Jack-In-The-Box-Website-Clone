import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

function TextCarousel() {

    const updateSlideBasedOnDot = (e) => {
        let newSlide;
        let clickedDot = e.target;
        let currentDot = document.querySelector("." + styles.currentDot);   
        let currentSlide = document.querySelector("." + styles.currentSlide);          
        let allDots = Array.from(document.querySelector("." + styles.dotNav).children);
        let allSlides = Array.from(document.querySelector("." + styles.flexContainer).children);
        let slideContainer = document.querySelector("." + styles.flexContainer);         

        allSlides.forEach((slide) => {
            if(slide.getAttribute("data-position") == clickedDot.getAttribute("data-position"))
                newSlide = slide;
        })  
        updateDots(currentDot, allDots, clickedDot);
        updateSlides(currentSlide, newSlide, slideContainer);
    
    }

    function updateSlides(currentSlide, nextOrPrevSlide, slideContainer) {
        slideContainer.style.left = nextOrPrevSlide.getAttribute("data-position") + "px";
        currentSlide.classList.remove(styles.currentSlide);
        nextOrPrevSlide.classList.add(styles.currentSlide);
    }

    function updateDots(currentDot, allDots, nextOrPrevSlide){
        currentDot.classList.remove(styles.currentDot);
        allDots.forEach((dot) => {
            if(dot.getAttribute("data-position") == nextOrPrevSlide.getAttribute("data-position"))
                dot.classList.add(styles.currentDot)
        })
    }

    const updateSlidesAndDots = (e) => {
        let leftOrRight = e.target.classList;  
        let slideContainer = e.target.parentElement.querySelector("." + styles.flexContainer);
        let currentSlide = slideContainer.querySelector("." + styles.currentSlide);
        let allDots = Array.from(document.querySelector("." + styles.dotNav).children);
        let currentDot = document.querySelector("." + styles.currentDot);

        if(leftOrRight == styles.right && currentSlide.nextElementSibling != null){
            updateSlides(currentSlide, currentSlide.nextElementSibling, slideContainer);
            updateDots(currentDot, allDots, currentSlide.nextElementSibling)
        }
        else if(leftOrRight == styles.left && currentSlide.previousElementSibling != null){
            updateSlides(currentSlide, currentSlide.previousElementSibling, slideContainer);
            updateDots(currentDot, allDots, currentSlide.previousElementSibling);
        }
    }

    return(
        <main>
            <h2 className={styles.title}>
                NEARBY JACK IN THE BOX LOCATIONS
            </h2>
            <section className={styles.carouselContainer}>
                
                <a className={styles.left} onClick={updateSlidesAndDots}>
                    <span className={styles.eventBubbling}>
                        <FontAwesomeIcon icon={faArrowLeft}/>                        
                    </span>
                </a>

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

                <a className={styles.right} onClick={updateSlidesAndDots}>
                    <span className={styles.eventBubbling}>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </span>
                </a>
                <nav className={styles.dotNav}>
                    <div className={[styles.dot, styles.currentDot].join(" ")} onClick={updateSlideBasedOnDot} data-position={0}></div>
                    <div className={styles.dot} onClick={updateSlideBasedOnDot} data-position={-500}></div>
                    <div className={styles.dot} onClick={updateSlideBasedOnDot} data-position={-1000}></div>
                </nav>

            </section>
        </main>

    )

}

export default TextCarousel;