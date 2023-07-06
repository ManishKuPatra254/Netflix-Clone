import React, { Fragment, useState } from 'react'
import style from './SignIn.module.css'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'

export function SignIn() {
    const [isLearnMore, setIsLearnMore] = useState(false);

    function handleButtonClick() {
        setIsLearnMore(true);
    };
    return (
        <Fragment>
            <div className={style.main_head_signin}>
                <div className={style.signin_cont}>
                    <div className={style.input_heads}>
                        <h2>Sign In</h2>
                        <TextField label="Email or phone number" variant="filled" type='email' className={style.text}
                            sx={{
                                width: '100%',
                                color: 'white',
                                margin: 'auto',
                                backgroundColor: 'rgb(68, 68, 68)',
                                borderRadius: '4px',
                                '& .MuiInputBase-input': { color: 'rgb(255,255,255)' }
                            }} />

                        <TextField label="Password" variant="filled" type='password' className={style.text}
                            sx={{
                                width: '100%',
                                color: 'white',
                                margin: 'auto',
                                backgroundColor: 'rgb(68, 68, 68)',
                                borderRadius: '4px',
                                '& .MuiInputBase-input': { color: 'rgb(255,255,255)' }
                            }} />

                        <button>Sign In</button>
                        <p>New to Netflix ? <Link to={'/'} className={style.links}>Sign up now</Link></p>

                        <div className={style.text_area}>
                            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link onClick={handleButtonClick} className={style.links_new}>Learn more</Link></p>
                            {isLearnMore && <p>The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</p>}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
