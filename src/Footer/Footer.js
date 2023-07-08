import styles from './Footer.module.css';

import React, { Fragment } from 'react'

export function Footer() {
    return (
        <Fragment>
            <div className={styles.main_footer_sec}>
                <h2>Questions? <span>Call 000-800-919-1694</span></h2>

                <div className={styles.sub_foot}>
                    <div className={styles.sub_2_foot}>
                        <a href="#12">FAQ</a>
                        <a href="#12">Media Centre</a>
                        <a href="#12">Ways to Watch</a>
                        <a href="#12">Cookies Preferences</a>
                        <a href="#12">Speed Test</a>
                    </div>
                    <div className={styles.sub_2_foot}>
                        <a href="#12">Help Centre</a>
                        <a href="#12">Investor Relations</a>
                        <a href="#12">Terms of Use</a>
                        <a href="#12">Corporate Information</a>
                        <a href="#12">Legal Notices</a>
                    </div>
                    <div className={styles.sub_2_foot}>
                        <a href="#12">Account</a>
                        <a href="#12">Jobs</a>
                        <a href="#12">Privacy </a>
                        <a href="#12">Contact Us</a>
                        <a href="#12">Only on Netflix</a>
                    </div>
                </div>

                <div className={styles.listing_sec_nav}>
                    <select name="" id="">
                        <option value="">
                            English
                        </option>
                        <option value="">हिन्दी</option>
                    </select>
                </div>
                <div className={styles.final_foot}>
                    <p>Netflix India</p>
                </div>

            </div>
        </Fragment>
    )
}
