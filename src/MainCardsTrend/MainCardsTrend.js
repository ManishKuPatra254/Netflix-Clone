import { Fragment, useEffect, useState } from 'react';
import styles from './MainCardsTrend.module.css';
import axios from 'axios';
import { Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';

export function MainCardsTrend() {
    const [trendingOnNetflix, setTrendingOnNetflix] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [caption, setCaption] = useState('');
    const [overview, setOverview] = useState('');
    const [vote, setVote] = useState('');

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

    function handleClose() {
        setSelectedMovie(null);
        setCaption('');
    };

    function handleImageClick(posterPath, title, overview , vote) {
        setSelectedMovie(posterPath);
        setCaption(title);
        setOverview(overview)
        setVote(vote);
    }

    return (
        <Fragment>
            <div className={styles.main_movie_contained}>
                <h4>Trending Now</h4>
                <div className={styles.main_movie}>
                    {trendingOnNetflix.map((trending) => (
                        <div
                            className={`${styles.sub_movies_cards} ${selectedMovie === trending.poster_path ? styles.selected : ''}`}
                            key={trending.id}
                            onClick={() => handleImageClick(trending.poster_path, trending.title, trending.overview , trending.vote_average)}
                        >
                            <img
                                className={styles.movie_image_card}
                                src={`https://image.tmdb.org/t/p/w200${trending.poster_path}`}
                                alt={trending.title}
                            />
                        </div>
                    ))}
                </div>
                {selectedMovie && (
                    <div className={styles.selected_image_container}>
                        <img
                            className={styles.selected_image}
                            src={`https://image.tmdb.org/t/p/w200${selectedMovie}`}
                            alt="Selected Movie"
                        />

                        <div className={styles.caption_new}>{caption}</div>
                        <div className={styles.overview_new}>{overview}</div>
                        <div className={styles.vote_new}>{vote}</div>
                        <div className={styles.btn_container}>
                            <Button
                                sx={{
                                    display: 'flex',
                                    backgroundColor: 'red',
                                    "&:hover": { backgroundColor: '#c00b14' },
                                    padding: '8px 35px',
                                    fontSize: '16px',
                                    marginTop: '10px'
                                }}
                                variant="contained"
                            >
                                <PlayArrowIcon /> PLAY
                            </Button>

                            <Button
                                onClick={handleClose}
                                sx={{
                                    display: 'flex',
                                    backgroundColor: 'rgb(39, 39, 39)',
                                    "&:hover": { backgroundColor: 'rgb(70, 70, 70)', color: 'white' },
                                    color: 'white',
                                    padding: '8px 35px',
                                    fontSize: '16px',
                                    marginTop: '10px',
                                }}
                                variant="contained"
                            >
                                <CloseIcon /> CLOSE
                            </Button>

                        </div>
                    </div>
                )}
            </div>
        </Fragment>
    );
}
