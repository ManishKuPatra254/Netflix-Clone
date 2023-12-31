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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { Modal } from '@mui/material';
import { Box } from '@mui/material';

const firebaseConfig = {
    apiKey: "AIzaSyCCmuFSdZT3XlmUqyuCVBCjrkfSslrNsFY",
    authDomain: "my-netflix-clone-react-signin.firebaseapp.com",
    databaseURL: "https://my-netflix-clone-react-signin-default-rtdb.firebaseio.com",
    projectId: "my-netflix-clone-react-signin",
    storageBucket: "my-netflix-clone-react-signin.appspot.com",
    messagingSenderId: "605393947462",
    appId: "1:605393947462:web:b1128a841df4744f82b347"
}

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export function MainHomeContents() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchEmailData = async () => {
            try {
                const emailDataRef = db.collection('emails').doc('emailDocumentId');
                const emailDataSnapshot = await emailDataRef.get();
                if (emailDataSnapshot.exists) {
                    const emailData = emailDataSnapshot.data();
                    setEmail(emailData.email);
                }
                else {
                    console.log('Email document does not exist.');
                }
            } catch (error) {
                console.error('Error fetching email data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEmailData();
    }, []);

    console.log('Email:', email || 'Loading...');

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

    const [openModal, setOpen] = useState(false);

    function handleOpenModal() {
        setOpen(true);
    }

    function handleCloseModal() {
        setOpen(false);
    }


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
                        <p>{isLoading ? 'Loading...' : email}</p>
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
                    <Button onClick={handleOpenModal} sx={{
                        backgroundColor: 'red',
                        "&:hover": { backgroundColor: '#c00b14' },
                        padding: '8px 35px',
                        fontSize: '16px',
                        marginTop: '10px',
                        transition: 'background-color .2s ease'
                    }} variant="contained"><PlayArrowIcon /> PLAY</Button>

                    <Modal sx={{ backgroundColor: 'rgba(0,0,0,.8)', transition: 'opacity .5s ease' }}
                        open={openModal}
                        onClose={handleCloseModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '95%',
                            height: '90%',

                        }}>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/qEVUtrk8_B4?controls=0"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </Box>
                    </Modal>
                    <h6>When a gangster's son steals his car and kills his dog, fearless <br /> ex-hit man John Wick takes on the entire mob to get his revenge.John Wick uncovers a path to defeating The High Table. <br /> But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.</h6>
                </div>
            </div>
        </Fragment>
    )
}
