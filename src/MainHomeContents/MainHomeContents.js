import React, { Fragment } from 'react';
import styles from './MainHomeContents.module.css';
import image2 from '../Image Section/netflix-logo-png-2562.png'
import videoTitle from '../Image Section/Cropped_Video.mp4';

export function MainHomeContents() {
    return (
        <Fragment>
            <div className={styles.main_home_nav}>
                <video autoPlay muted loop>
                    <source src={videoTitle} type='video/mp4' />
                </video>
                <div className={styles.main_home_sec} >
                    <div className={styles.heading_logo}>
                        <img src={image2} alt="" />
                    </div>
                    <div className={styles.list_nav}>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
