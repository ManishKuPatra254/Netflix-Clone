import React, { Fragment, useState } from 'react';
import styles from './MainHomeContents.module.css';
import image2 from '../Image Section/netflix-logo-png-2562.png'
import videoTitle from '../Image Section/Cropped_Video.mp4';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export function MainHomeContents() {
    const navigateToPlaySec = useNavigate();

    function handleNavigatToPlay() {
        navigateToPlaySec('/mainplaynetflix');
    }

    const [openMenu, setOpenMenu] = useState(false);

    function handleClickOpenDrop() {
        setOpenMenu(!openMenu);
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Fragment>
            <div className={styles.main_home_nav}>
                <div className={styles.main_home_sec} >
                    <div className={styles.heading_logo}>
                        <img src={image2} alt="" />
                        <div className={styles.list_nav}>
                            <ul>
                                <Link to={'/mainhomenetflix'}><li>Home</li></Link>
                                <Link to={'/tvshows'}><li>TV Shows</li></Link>
                                <Link to={'/movies'}><li>Movies</li></Link>
                                <Link to={'/newandpopular'}><li>New & Popular</li></Link>
                            </ul>
                        </div>
                        <div className={styles.res_nav_list}>
                            <p onClick={handleClickOpenDrop}><KeyboardArrowDownIcon /></p>
                            {openMenu && (
                                <ul className={styles.drops_list_res_nav}>
                                    <Link to={'/mainhomenetflix'}><li>Home</li></Link>
                                    <Link to={'/tvshows'}><li>TV Shows</li></Link>
                                    <Link to={'/movies'}><li>Movies</li></Link>
                                    <Link to={'/newandpopular'}><li>New & Popular</li></Link>
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className={styles.account_sec}>
                        <Button
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <span><NotificationsIcon /></span>
                        </Button>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}>
                            <Alert sx={{ width: '450px' }} severity="info">No new notifications</Alert>
                        </Menu>
                        <p>Manish</p>
                    </div>
                </div>
            </div>
            <div className={styles.video_playlist}>
                <video autoPlay muted loop>
                    <source src={videoTitle} type='video/mp4' />
                </video>
                <div className={styles.apply_small_effect_linear}></div>
                <div className={styles.text_in_image}>
                    <p>NETFLIX <span>ORIGINAL</span></p>
                    <h1>JOHN WICK : CHAPTER 4</h1>
                    <Button onClick={handleNavigatToPlay} sx={{
                        backgroundColor: 'red',
                        "&:hover": { backgroundColor: '#c00b14' },
                        padding: '8px 35px',
                        fontSize: '16px',
                        marginTop: '10px'
                    }} variant="contained"><PlayArrowIcon /> PLAY</Button>
                    <h6>When a gangster's son steals his car and kills his dog, fearless <br /> ex-hit man John Wick takes on the entire mob to get his revenge.John Wick uncovers a path to defeating The High Table. <br /> But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.</h6>
                </div>
            </div>
        </Fragment>
    )
}
