import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles';
import programmer from '../../images/programmer.jpg';

const About = () => (
    <section style={styles.container} className='row' id="about">
        <div className='col-md-6 d-none d-md-block'><img alt='programmer' style={styles.graphic} src={programmer} /></div>
        
        <div className='col-md-6 col-sm-12' style={styles.content}>
            <div style={styles.title}>About</div>
            <div>
                <p> I'm Chris Maina. A software engineer based in Nairobi, Kenya.
                    I started my software engineer career at Andela. There, I worked on Andela Societies.
                    A platform that helped employees keep track of points earned from participation in activites outside Andela.
                </p>

                <p>
                    I have also worked with Audacious Futures as a frontend developer.
                    At Audacious we worked on FutureFitAI. An upskilling platform for anyone intending to improve his/her skill's proficiency in an ever changing job market.
                    <a style={styles.link} href='https://www.futurefit.ai/'>Check out FutureFitAI <FontAwesomeIcon icon='arrow-right' style={styles.icon} /></a>
                </p>

                <p>
                    Currently, I am at Leantoolkit BV as a frontend developer. We are working on Leantoolkit.
                    A platform that offers conjoint analysis, new product development, product launches and market research services.
                    <a style={styles.link} href='http://leantoolkit.io/'>Check out Leantoolkit <FontAwesomeIcon icon='arrow-right' style={styles.icon} /></a>
                </p>
            </div>
        </div>
    </section>
);

export default About;
