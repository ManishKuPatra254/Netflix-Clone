import { Fragment } from 'react';
import styles from './MainCardsTrend.module.css';
import { mainCardsTrendData } from './MainCardsTrendData';

export function MainCardsTrend() {
    return (
        <Fragment>
            <div className={styles.main_trends_cards}>
                <h4>Trending Now</h4>
            </div>
            <div className={styles.main_cards_trends}>
                {
                    mainCardsTrendData.map((itemsCard) => (
                        <div key={itemsCard.id} className={styles.sub_cards_trends}>
                            <img src={itemsCard.images} alt="" />
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}
