import React, { Fragment, useState } from 'react'
import style from './SignIn.module.css'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

export function SignIn() {
    // navigate to new page (content page)......

    const navigateToMainPage = useNavigate()

    // toggle changes..............

    const [isLearnMore, setIsLearnMore] = useState(false);

    function handleButtonClick() {
        setIsLearnMore(true);
    };

    // validation ................

    const [takeEmailData, setTakeEmailData] = useState('');
    const [takePasswordData, setTakePasswordData] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    function handleEmailDataInput(e) {
        setTakeEmailData(e.target.value);
        setEmailError('')
    }

    function handlePasswordDataInput(e) {
        setTakePasswordData(e.target.value);
        setPasswordError('')
    }

    async function handleDataSubmitEmailPassword(e) {

        e.preventDefault();

        let validationTrue = true;

        if (!takeEmailData) {
            setEmailError('Email Data is Required');
            validationTrue = false;
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(takeEmailData)) {
            setEmailError('Invalid Gmail');
            validationTrue = false;
        }

        if (!takePasswordData) {
            setPasswordError('Password is required');
            validationTrue = false;
        }

        else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(takePasswordData)) {
            setPasswordError('Invalid Password');
            validationTrue = false
        }

        if (validationTrue) {
            const responseData = await fetch("https://my-netflix-clone-react-signin-default-rtdb.firebaseio.com/netflixsignindata.json",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        takeEmailData,
                        takePasswordData,
                    }),
                });

            if (responseData.ok) {
                const data = await responseData.json();
                if (data) {
                    alert('Data saved Successfully');
                } else {
                    alert('No');
                }
            } else {
                alert('Error occurred while saving data');
            }
            setTakeEmailData('');
            setTakePasswordData('');
            navigateToMainPage('/mainhomenetflix')
        }
    }


    return (
        <Fragment>
            <div className={style.main_head_signin}>
                <div className={style.signin_cont}>
                    <div className={style.input_heads}>
                        <h2>Sign In</h2>



                        <TextField name='email' label="Email or phone number" variant="filled" type='email' className={style.text} value={takeEmailData} onChange={handleEmailDataInput} error={!!emailError}
                            helperText={emailError}
                            sx={{
                                width: '100%',
                                color: 'white',
                                margin: 'auto',
                                backgroundColor: 'rgb(68, 68, 68)',
                                borderRadius: '4px',
                                '& .MuiInputBase-input': { color: 'rgb(255,255,255)' }
                            }} />

                        <TextField name='password' label="Password" variant="filled" type='password' className={style.text} value={takePasswordData} onChange={handlePasswordDataInput} error={!!passwordError}
                            helperText={passwordError}
                            sx={{
                                width: '100%',
                                color: 'white',
                                margin: 'auto',
                                backgroundColor: 'rgb(68, 68, 68)',
                                borderRadius: '4px',
                                '& .MuiInputBase-input': { color: 'rgb(255,255,255)' }
                            }} />

                        <button onClick={handleDataSubmitEmailPassword}>Sign In</button>

                        <p>New to Netflix ? <Link to={'/'} className={style.links}>Sign up now</Link></p>

                        <div className={style.text_area}>
                            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link onClick={handleButtonClick} className={style.links_new}>Learn more</Link></p>
                            {isLearnMore && <p>The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</p>}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </Fragment>
    )
}
