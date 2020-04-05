import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles';
import code from '../../images/code.jpg';

const Technologies = () => (
    <section style={styles.container} id="technologies">
        <div style={styles.content}>
            <div style={styles.title}>Technologies</div>
            <p>
                <div>
                    I have been active in the React ecosystem with all the usual suspects i.e React Native, Redux, Redux-Saga, Redux-Thunk and
                    Webpack. I'm a big fun of CSS having worked with multiple CSS frameworks i.e. Material UI,
                    Semantic UI, Ant Design and Bootstrap.
                </div>
                <div>
                    I have also been keen on undertanding how to improve performance. I'm conversant with optimization techniques such as
                    lazy loading, dynamic imports, tree shaking, preloading and prefetching.
                </div>
                <div>
                    As for the backend, I'm conversant with NodeJS and Python. Having worked with ExpressJS, GraphQL and Django Rest Framework.
                    I recently developed Crafted Pizza, a pizza shop sales management application. It has been developed using React Native, NodeJS, GraphQL, PostgreSQL application.
                </div>
                <a style={styles.link} href='https://bitbucket.org/Chris-Maina/crafted-pizza-api'>Check out Crafted Pizza <FontAwesomeIcon icon='arrow-right' style={styles.icon} /></a>
            </p>
        </div>
        <div style={styles.imageWrapper}>
            <img src={code} alt='programming concept' style={styles.graphic} />
        </div>
    </section>
);

export default Technologies;
