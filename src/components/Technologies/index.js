import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles';
import code from '../../images/code.jpg';

const Technologies = () => (
    <section style={styles.container} className='row' id="technologies">
        <div className='col-md-6 col-sm-12' style={styles.content}>
            <div style={styles.title}>Technologies</div>
            <div>
                <p>
                    I have been active in the React ecosystem with all the usual suspects i.e React Native, Redux, Redux-Saga, Redux-Thunk and
                    Webpack. I'm a big fun of CSS having worked with multiple CSS frameworks i.e. Material UI,
                    Semantic UI, Ant Design and Bootstrap.
                </p>
                <p>
                    I have also been keen on undertanding how to improve performance. Conversant with optimization techniques such as
                    lazy loading, dynamic imports, tree shaking, preloading and prefetching.
                </p>
                <p> As for the backend, I'm conversant with NodeJS and Python. Having worked with ExpressJS, GraphQL and Django Rest Framework.</p>
                <p> I recently developed Crafted Pizza, a pizza shop sales management application.</p>
                <a style={styles.link} href='https://bitbucket.org/Chris-Maina/crafted-pizza-api'>Check out Crafted Pizza <FontAwesomeIcon icon='arrow-right' style={styles.icon} /></a>
            </div>
        </div>
        <div className='col-md-6 d-none d-md-block'>
            <img src={code} alt='programming concept' style={styles.graphic} />
        </div>
    </section>
);

export default Technologies;
