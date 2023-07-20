import { Fragment } from 'react';
import styles from './NewPopular.module.css';
import { MainHomeContents } from '../MainHomeContents/MainHomeContents';
import { MainCardsTrend } from '../MainCardsTrend/MainCardsTrend';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Footer } from '../Footer/Footer';

export function NewPopular() {
    const [newpopular, setNewPopular] = useState([]);

    async function fetchMoviesData() {
        try {
            const response = await axios.get(
                'https://api.themoviedb.org/3/trending/movie/day?api_key=baf56e28709599d5cca030703a8c2697'
            );
            setNewPopular(response.data.results);
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
                    {newpopular.map((newpopular) => (
                        <div className={styles.sub_movies_cards} key={newpopular.id}>
                            <img
                                className={styles.movie_image_card}
                                src={`https://image.tmdb.org/t/p/w200${newpopular.poster_path}`}
                                alt={newpopular.name}
                            />
                            <p className={styles.movie_name}>{newpopular.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}
