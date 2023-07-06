import styles from './ContentDisplay.module.css';
import React, { Fragment } from 'react';
import image1 from '../Image Section/cp1.png'
import image2 from '../Image Section/cp2.jpg'
import image3 from '../Image Section/cp3.png'
import image4 from '../Image Section/cp4.png'

export function ContentDisplay() {
    return (
        <Fragment>
            <div className={styles.main_content_part_1}>
                <div className={styles.content_part_1}>
                    <div className={styles.text_area_content_1}>
                        <h1>Enjoy on your TV</h1>
                        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <img src={image1} alt="" />
                </div>


                <div className={styles.content_part_2}>
                    <img src={image2} alt="" />
                    <div className={styles.text_area_content_2}>
                        <h1>Download your shows to watch offline</h1>
                        <p>Save your favourites easily and always have <br /> something to watch.</p>
                    </div>
                </div>


                <div className={styles.content_part_2}>
                    <div className={styles.text_area_content_2}>
                        <h1>Watch everywhere</h1>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV</p>
                    </div>
                    <img src={image3} alt="" />
                </div>


                <div className={styles.content_part_2}>
                    <img src={image4} alt="" />
                    <div className={styles.text_area_content_2}>
                        <h1>Create profiles for kids</h1>
                        <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
