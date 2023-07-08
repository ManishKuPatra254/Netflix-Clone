import styles from './FrequentlyQues.module.css';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { TextField } from '@mui/material';
import React, { Fragment } from 'react'

export function FrequencyQues() {
    return (
        <Fragment>
            <div className={styles.main_freq_que}>
                <h1>Frequently Asked Questions</h1>
                <ul className={styles.new_many_more}>
                    <li><input type="radio" name="new_many_more" id="first" />
                        <label htmlFor='first'>What is Netflix ?</label>
                        <div className={styles.drop_down_ans}>
                            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.  <br /> <br />

                                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                        </div>
                    </li>


                    <li><input type="radio" name="new_many_more" id="second" />
                        <label htmlFor='second'>How much does Netflix cost ?</label>
                        <div className={styles.drop_down_ans}>
                            <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
                        </div>
                    </li>


                    <li><input type="radio" name="new_many_more" id="third" />
                        <label htmlFor='third'>Where can I watch ?</label>
                        <div className={styles.drop_down_ans}>
                            <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                                <br /> <br />

                                You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                        </div>
                    </li>


                    <li><input type="radio" name="new_many_more" id="fourth" />
                        <label htmlFor='fourth'>How do I cancel ?</label>
                        <div className={styles.drop_down_ans}>
                            <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                        </div>
                    </li>


                    <li><input type="radio" name="new_many_more" id="fifth" />
                        <label htmlFor='fifth'>What I can watch on Netflix ?</label>
                        <div className={styles.drop_down_ans}>
                            <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                        </div>
                    </li>


                    <li><input type="radio" name="new_many_more" id="sixth" />
                        <label htmlFor='sixth'>Is Netflix good for kids ?</label>
                        <div className={styles.drop_down_ans}>
                            <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                                <br /> <br />
                                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                        </div>
                    </li>
                </ul>

                <div className={styles.email_sec}>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className={styles.text_f_b}>
                        <TextField label="Email address" variant="outlined" type='email'
                            className={styles.textField}
                            sx={{ maxWidth: '30%', width: '100%', color: 'white', '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white', backgroundColor: 'rgba(0 ,0 , 0 , .5)' }, '& .MuiInputBase-input': { color: 'rgb(255,255,255)' } }} />

                        <Button
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
                        >Get Started <ArrowForwardIosIcon /></Button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
