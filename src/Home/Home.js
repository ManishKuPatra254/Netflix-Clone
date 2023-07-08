import React, { Fragment } from 'react'
import { Navbar } from '../Navbar/Navbar';
import { ContentDisplay } from '../ContentDisplay/ContentDisplay';
import { FrequencyQues } from '../FrequentlyQues/FrequencyQues';
import { Footer } from '../Footer/Footer';

export function Home() {
    return (
        <Fragment>
            <div>
                <Navbar />
                <ContentDisplay />
                <FrequencyQues />
                <Footer />
            </div>
        </Fragment>
    )
}
