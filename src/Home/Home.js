import React, { Fragment } from 'react'
import { Navbar } from '../Navbar/Navbar';
import { ContentDisplay } from '../ContentDisplay/ContentDisplay';

export function Home() {
    return (
        <Fragment>
            <div>
                <Navbar />
                <ContentDisplay />
            </div>
        </Fragment>
    )
}
