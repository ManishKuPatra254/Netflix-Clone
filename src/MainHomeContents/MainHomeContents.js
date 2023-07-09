import React, { Fragment, useState } from 'react';
import styles from './MainHomeContents.module.css';
import image2 from '../Image Section/netflix-logo-png-2562.png'
import videoTitle from '../Image Section/Cropped_Video.mp4';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export function MainHomeContents() {

    const [searchToogle, setSearchToogle] = useState(false);

    function handleSearchToogleClick() {
        setSearchToogle(!searchToogle);
    }

    const [inputData, setInputData] = useState('');

    function handleInputData(e) {
        setInputData(e.target.value);
    }

    return (
        <Fragment>
            <div className={styles.main_home_nav}>
                <div className={styles.main_home_sec} >
                    <div className={styles.heading_logo}>
                        <img src={image2} alt="" />
                        <div className={styles.list_nav}>
                            <ul>
                                <Link><li>Home</li></Link>
                                <Link><li>TV Shows</li></Link>
                                <Link><li>Movies</li></Link>
                                <Link><li>Recently Added</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.account_sec}>
                        {
                            !searchToogle ? (
                                <p onClick={handleSearchToogleClick}><SearchIcon
                                    sx={{
                                        color: 'white',
                                        cursor: 'pointer'
                                    }} /></p>
                            ) : (
                                <input type="text" placeholder='Search' value={inputData} onChange={handleInputData} />
                            )
                        }
                        <p onClick={handleSearchToogleClick}>Manish</p>
                    </div>
                </div>
            </div>
            <div className={styles.video_playlist}>
                <video autoPlay muted loop>
                    <source src={videoTitle} type='video/mp4' />
                </video>
                <div className={styles.apply_small_effect_linear}></div>
                <div className={styles.text_in_image}>
                    <p>NETFLIX <span>ORIGINAL</span></p>
                    <h1>JOHN WICK : CHAPTER 4</h1>
                    <Button sx={{
                        backgroundColor: 'red',
                        "&:hover": { backgroundColor: '#c00b14' },
                        padding: '8px 35px',
                        fontSize: '16px',
                        marginTop: '10px'
                    }} variant="contained"><PlayArrowIcon /> PLAY</Button>
                    <h6>When a gangster's son steals his car and kills his dog, fearless ex-hit man John Wick takes on the entire mob to get his revenge.</h6>
                </div>
            </div>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sint? Ipsam adipisci quae minus odio voluptates unde sed veniam eaque! Quaerat, deleniti. Incidunt obcaecati unde vel magnam alias, ea sunt dolorem animi accusamus ab sapiente eligendi numquam doloremque explicabo aut consequatur rem, sequi nemo voluptates nihil nesciunt reprehenderit quia earum. Atque quae necessitatibus perferendis architecto sed, harum quos aliquam repellat veniam voluptate adipisci consequatur magni tenetur commodi dolorem explicabo tempora labore animi corrupti. Qui, aliquam. Praesentium ea necessitatibus ratione, labore ad rem impedit similique molestias, possimus reprehenderit dicta deleniti, debitis cum aut. Soluta facilis eum voluptatum, quibusdam maxime voluptatem beatae repellendus iste, temporibus delectus itaque corrupti? Fugit maxime quas labore quae praesentium, dolore nemo. Necessitatibus, officiis! Deserunt porro autem tempore sunt, hic ab tempora quasi dolorum officiis. Tenetur, ex? Iusto soluta eius inventore consequuntur dolorum molestiae libero impedit aut cumque consequatur id consectetur doloribus iste harum, eos, tenetur ut odit. Odit similique quo incidunt fugit consectetur officiis, eligendi sapiente. Adipisci, sit veritatis culpa qui impedit obcaecati perspiciatis eaque maiores dolor iste perferendis sint aperiam amet exercitationem nesciunt minima, aliquid, deleniti quae harum magnam ratione excepturi inventore? Aperiam amet voluptas debitis quidem? Magnam deserunt suscipit quia aperiam ipsam hic aspernatur impedit, eum quo mollitia quasi, animi id, dignissimos dicta maxime consequuntur ducimus architecto. Mollitia beatae fugit ducimus nobis commodi dolorum nulla quos, provident maiores ratione obcaecati nesciunt qui ipsam aspernatur dolores et, modi blanditiis eos. Minus suscipit provident quos atque iste voluptatibus sequi excepturi aut velit laudantium repellendus reprehenderit, saepe voluptate cumque, hic explicabo? Placeat alias in deserunt voluptatibus architecto velit, officia eveniet distinctio vero perspiciatis doloremque laboriosam dolorum facilis expedita totam ad hic et harum. Esse ea accusamus laudantium harum sint libero atque facere similique dolorum facilis at, quia officia recusandae molestias assumenda deleniti quae fugiat a id, voluptate consectetur debitis dolore nesciunt aspernatur. Dolorem voluptatum eaque quae quis culpa ipsam, consequatur, similique voluptate sed aspernatur, temporibus vel rem vero inventore aperiam nihil mollitia voluptas. Ut ab eius consequuntur nobis nesciunt atque doloribus autem corporis. A quas dicta tempora velit necessitatibus. Repudiandae dolore hic, recusandae deleniti quos provident temporibus ipsa voluptate aliquam! Illo ullam assumenda ducimus veritatis, explicabo facilis odio provident culpa incidunt maxime officiis consequatur neque temporibus consectetur delectus porro tempore excepturi? Possimus libero quo voluptate ad. Molestias pariatur illo explicabo odio vero, in maiores excepturi quia harum architecto eveniet expedita ipsam eaque hic nulla tenetur suscipit sint magnam saepe ea asperiores! Impedit voluptatem nulla suscipit deleniti harum eveniet iure. Dignissimos dolorum tempora distinctio, excepturi magni delectus. Placeat, doloribus voluptate doloremque accusantium aliquid, dolore suscipit iure alias, vitae quo id molestias nisi consectetur adipisci necessitatibus voluptas pariatur numquam voluptatem sapiente ratione ut unde? Dolorem voluptatum blanditiis illo quo autem deleniti corporis molestias non neque dignissimos odio eaque unde ipsam aspernatur quos, debitis adipisci laboriosam sint dolore, esse accusamus cum earum delectus! Laborum maiores a, aliquam atque possimus, nam nulla commodi consectetur reprehenderit harum veniam temporibus sapiente, illum quaerat quod nesciunt explicabo deserunt odio non quia at necessitatibus id. Sit, possimus. Minima eos eveniet nulla incidunt quam ab rem sed cupiditate, quibusdam iure ipsum consequatur, esse rerum repudiandae quae. Inventore earum quod unde consequatur animi ipsa quia blanditiis quibusdam quis corporis assumenda soluta incidunt maxime, voluptatibus suscipit perspiciatis officia accusamus? Aut non neque aliquid consectetur! Temporibus provident explicabo perferendis iusto enim ipsa dicta porro quod esse maiores error, rem ad nulla quae quis repudiandae culpa libero nam aliquid, eligendi sed. Tempora deserunt accusamus eaque quaerat excepturi, nesciunt ipsam, reiciendis aliquid et minima, dolore aliquam? Aspernatur repellendus id esse harum tempore. Magni quis fugit, quo aliquam nulla cum omnis placeat eveniet enim natus vero saepe harum porro. Explicabo voluptatibus temporibus qui iusto dolores aliquid corrupti omnis atque maiores modi veritatis, nobis accusantium alias harum odit quae odio reiciendis quos esse nesciunt facilis quidem tempora et. Aliquid perspiciatis cum sit enim ut quis autem quam quas eveniet nulla doloribus debitis culpa delectus saepe voluptas, fuga odit quo suscipit ipsum beatae dolore rerum. Totam, laborum, consequuntur esse inventore voluptates suscipit illum numquam velit id earum doloremque consectetur adipisci? Aspernatur dignissimos quas repudiandae odio labore saepe molestiae esse ut voluptates sapiente, molestias et eveniet dolore magnam excepturi at voluptas autem ipsam suscipit explicabo quo cupiditate accusantium pariatur. Excepturi, odit, amet rerum repudiandae impedit laboriosam minima quo ducimus totam perferendis ut doloremque at nemo laudantium consequuntur optio? Excepturi nobis, totam cumque qui repellat facere impedit omnis! Debitis quo aliquam est aspernatur, perspiciatis voluptatem magni quas eveniet commodi voluptatibus nihil deleniti error odit distinctio, vero eaque dolorem obcaecati delectus. Blanditiis sed atque perspiciatis tenetur ut excepturi dicta incidunt doloremque maxime? Quas vel consequatur eligendi distinctio nostrum animi molestiae! Dolorem distinctio ex velit nemo ullam praesentium explicabo impedit molestias iste, amet aut excepturi animi minima iusto rerum expedita? Laboriosam ad aut officia iusto quas corrupti porro voluptatibus est deserunt culpa? Illo magnam iure voluptas in explicabo quaerat libero distinctio delectus velit harum, eveniet ut unde praesentium dicta a necessitatibus est odit quod. Ullam cupiditate in dolore, eum sed saepe at minus impedit veniam perspiciatis aliquam animi earum quae dolorem quo est tempora blanditiis possimus magnam. Ut dolores illo magni expedita voluptates temporibus repudiandae, aspernatur soluta repellendus amet facilis aliquam iusto odit ex voluptas sequi eligendi eveniet, optio reprehenderit tempora excepturi est praesentium commodi! Possimus reprehenderit fugiat quod natus deleniti debitis totam doloremque aliquam. Autem deleniti quidem reprehenderit quas pariatur quae ipsam velit, magnam modi voluptatum, ratione officiis sapiente inventore provident delectus assumenda et? Ad consectetur aliquid ratione autem laudantium veritatis voluptatem, quae nisi illo. Aliquid autem illo maiores iusto voluptatum! Distinctio recusandae assumenda similique deleniti consequuntur repellendus sit, magni odio voluptates, cumque aspernatur, laudantium eaque iste explicabo cum vero. Quos voluptatibus sequi magnam reprehenderit eius, inventore commodi exercitationem, doloribus natus aut dolor harum consequuntur provident sapiente amet aperiam eligendi adipisci beatae! Officia, veniam non qui deserunt recusandae pariatur temporibus soluta est autem, debitis numquam. Dolore, molestias quasi. Architecto nostrum repellendus est dicta unde assumenda harum reiciendis, a distinctio necessitatibus aliquid natus. Similique, autem. Voluptatum facilis minus repellat!
        </Fragment>
    )
}
