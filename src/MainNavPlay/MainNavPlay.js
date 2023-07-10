import React, { Fragment } from 'react'
import styles from './MainNavPlay.module.css'
export function MainNavPlay() {
    return (
        <Fragment>
            <div className={styles.main_play_sec}>
            <iframe
                    width="100%"
                    height="90%"
                    src="https://www.youtube.com/embed/qEVUtrk8_B4?controls=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen 
                ></iframe>
            </div>
        </Fragment>
    )
}
