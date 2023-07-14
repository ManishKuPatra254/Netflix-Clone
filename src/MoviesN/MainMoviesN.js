import styles from './MainMoviesN.module.css';
import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { MainHomeContents } from '../MainHomeContents/MainHomeContents'
import { MainCardsTrend } from '../MainCardsTrend/MainCardsTrend';
import { Footer } from '../Footer/Footer'

export function Movies() {

    const [movies, setMovies] = useState([]);

    async function fetchMoviesData() {
        try {
            const response = await axios.get(
                'https://api.themoviedb.org/3/movie/popular?api_key=baf56e28709599d5cca030703a8c2697'
            );
            setMovies(response.data.results);
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
                <h4>Movies</h4>
                <div className={styles.main_movie}>
                    {movies.map((movie) => (
                        <div className={styles.sub_movies_cards} key={movie.id}>
                            <img
                                className={styles.movie_image_card}
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <p className={styles.movie_name}>{movie.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}
