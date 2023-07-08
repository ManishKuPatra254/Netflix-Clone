import React, { Fragment } from 'react'
import { Navbar } from '../Navbar/Navbar';
import { ContentDisplay } from '../ContentDisplay/ContentDisplay';
import { FrequencyQues } from '../FrequentlyQues/FrequencyQues';


export function Home() {
    return (
        <Fragment>
            <div>
                <Navbar />
                <ContentDisplay />
                <FrequencyQues />
            </div>
        </Fragment>
    )
}
