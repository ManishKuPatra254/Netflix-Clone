import React, { Fragment } from 'react';
import style from './Navbar.module.css';
import image1 from '../Image Section/netflix-logo-png-2562.png';
import LanguageIcon from '@mui/icons-material/Language';

export function Navbar() {
    return (
        <Fragment>
            <div className={style.main_sec_navbar}>
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
        </Fragment>
    );
}
