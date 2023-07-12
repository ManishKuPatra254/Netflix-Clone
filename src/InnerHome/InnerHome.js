import React, { Fragment } from 'react';
import { MainHomeContents } from '../MainHomeContents/MainHomeContents';
import { MainCardsTrend } from '../MainCardsTrend/MainCardsTrend';
import { MainCardsPopular } from '../MainCardsPopular/MainCardsPopular';
import { MainCardsOriginals } from '../MainCardsOriginals/MainCardsOriginals';
import { MainNewReleases } from '../MainNewReleases/MainNewReleases';
import { Footer } from '../Footer/Footer';
export function InnerHome() {
    return (
        <Fragment>
            <MainHomeContents />
            <MainCardsTrend />
            <MainCardsPopular />
            <MainCardsOriginals />
            <MainNewReleases />
            <Footer />
        </Fragment>
    )
}
