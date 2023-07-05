import React, { Fragment } from 'react';
import style from './Navbar.module.css';
import image1 from '../Image Section/netflix-logo-png-2562.png';
import LanguageIcon from '@mui/icons-material/Language';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

export function Navbar() {
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
                                <p> <LanguageIcon /></p> English
                            </option>
                            <option value="">Hindi</option>
                        </select>
                        <button>Sign in</button>
                    </div>

                </div>
                <div className={style.head_start}>
                    <div className={style.text_in_image}>
                        <h1>Unlimited movies, TV shows and more</h1>
                        <p>Watch anywhere. Cancel anytime. </p>
                        <span>Ready to watch? Enter your email to create or restart your membership.</span>
                        <div className={style.text_f_b}>
                            <TextField label="Email address" variant="outlined" type='text' className={style.text}
                                sx={{
                                    width: '50%',
                                    borderColor: 'white'
                                }} />

                            <Button variant="contained"
                                sx={{
                                    backgroundColor: 'red',
                                    "&:hover": { backgroundColor: '#c00b14' },
                                    textTransform: 'unset',
                                    fontWeight: '700',
                                    textAlign: 'center',
                                    fontSize: '1.3rem',
                                    padding: '8px 22px',

                                }}
                            >Get Started  </Button>

                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}
