import { Fragment, useEffect, useState } from 'react';
import styles from './MainCardsTrend.module.css';
import axios from 'axios';

export function MainCardsTrend() {

    const [trendingOnNetflix, setTrendingOnNetflix] = useState([]);

    async function fetchTrendData() {
        try {
            const response = await axios.get(
                'https://api.themoviedb.org/3/trending/movie/week?api_key=baf56e28709599d5cca030703a8c2697'
            );
            setTrendingOnNetflix(response.data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchTrendData();
    }, []);

    return (
        <Fragment>
            <div className={styles.main_movie_contained}>
                <h4>Trending Now</h4>
                <div className={styles.main_movie}>
                    {trendingOnNetflix.map((trending) => (
                        <div className={styles.sub_movies_cards} key={trending.id}>
                            <img
                                className={styles.movie_image_card}
                                src={`https://image.tmdb.org/t/p/w200${trending.poster_path}`}
                                alt={trending.title}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}
