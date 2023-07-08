import React, { Fragment, useState } from 'react';
import style from './Navbar.module.css';
import image1 from '../Image Section/netflix-logo-png-2562.png';
// import LanguageIcon from '@mui/icons-material/Language';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { BsGlobe } from 'react-icons/bs';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';


export function Navbar() {
    const [inputUserEmail, setInputUserEmail] = useState('');

    function handleClickGetStarted() {
        setInputUserEmail('');
    }


    return (
        <Fragment>
            <div className={style.main_nav}>
                <div className={style.main_sec_navbar} >
                    <div className={style.heading}>
                        <img src={image1} alt="" />
                    </div>
                    <div className={style.listing_sec_nav}>
                        <select name="" id="">
                            <option value="">
                                <BsGlobe /> English
                            </option>
                            <option value="">हिन्दी</option>
                        </select>
                        <Link to={'/signin'}> <button>Sign in</button></Link>
                    </div>

                </div>
                <div className={style.head_start}>
                    <div className={style.text_in_image}>
                        <h1>Unlimited movies, TV shows and more</h1>
                        <p>Watch anywhere. Cancel anytime. </p>
                        <span>Ready to watch? Enter your email to create or restart your membership.</span>
                        <div className={style.text_f_b}>
                            <TextField label="Email address" variant="outlined" type='email' className={style.text}
                                value={inputUserEmail} onChange={(e) => setInputUserEmail(e.target.value)}
                                sx={{ width: '50%', color: 'white', '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white', backgroundColor: 'rgba(0 ,0 , 0 , .5)' }, '& .MuiInputBase-input': { color: 'rgb(255,255,255)' } }} />

                            <Button
                                onClick={handleClickGetStarted}
                                variant="contained"
                                sx={{
                                    backgroundColor: 'red',
                                    "&:hover": { backgroundColor: '#c00b14' },
                                    textTransform: 'unset',
                                    fontWeight: '700',
                                    textAlign: 'center',
                                    fontSize: '1.3rem',
                                    padding: '8px 22px',

                                }}
                            >Get Started <ArrowForwardIosIcon />  </Button>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}
