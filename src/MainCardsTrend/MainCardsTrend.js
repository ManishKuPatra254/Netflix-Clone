import { Fragment, useState } from 'react';
import styles from './MainCardsTrend.module.css';
import { mainCardsTrendData } from './MainCardsTrendData';

export function MainCardsTrend() {
    const [selectedImage, setSelectedImage] = useState(null);

    function handleImageClick(image) {
        setSelectedImage(image);
    };

    function closeDropdown() {
        setSelectedImage(null);
    };


    return (
        <Fragment>
            <div className={styles.main_trends_cards}>
                <h4>Trending Now</h4>
            </div>
            <div className={styles.main_cards_trends}>
                {
                    mainCardsTrendData.map((itemsCard) => (
                        <div key={itemsCard.id} className={styles.sub_cards_trends}>
                            <img src={itemsCard.images} alt="" onClick={() => handleImageClick(itemsCard.links_images)} />
                        </div>
                    ))
                }
            </div>

            {selectedImage && (
                <div className={`${styles.dropdown_trans} ${styles.drop_open}`} onClick={closeDropdown}>
                    <div className={styles.dropdown_indexs}>
                        <img style={{ width: '100%', cursor: 'pointer', height: 'auto' }} src={selectedImage} alt="" />
                    </div>
                </div>
            )}
        </Fragment>
    )
}
