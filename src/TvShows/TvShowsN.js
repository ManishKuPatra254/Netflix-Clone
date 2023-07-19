import styles from './TvShows.module.css';
import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { MainHomeContents } from '../MainHomeContents/MainHomeContents'
import { MainCardsTrend } from '../MainCardsTrend/MainCardsTrend'
import { Footer } from '../Footer/Footer'

export function TvShows() {

    const [tvshows, setTvShows] = useState([]);

    async function fetchMoviesData() {
        try {
            const response = await axios.get(
                'https://api.themoviedb.org/3/discover/tv?api_key=baf56e28709599d5cca030703a8c2697'
            );
            setTvShows(response.data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchMoviesData();
    }, []);

    return (
        <Fragment>
            <MainHomeContents />

            <MainCardsTrend />

            <div className={styles.main_movie_contained}>
                <h4>TV Shows</h4>
                <div className={styles.main_movie}>
                    {tvshows.map((tvshows) => (
                        <div className={styles.sub_movies_cards} key={tvshows.id}>
                            <img
                                className={styles.movie_image_card}
                                src={`https://image.tmdb.org/t/p/w200${tvshows.poster_path}`}
                                alt={tvshows.name}
                            />
                            <p className={styles.movie_name}>{tvshows.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}



