import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles';
import programmer from '../../images/programmer.jpg';

const About = () => (
    <section style={styles.container} id="about">
        <div style={styles.imageWrapper}><img alt='programmer' style={styles.graphic} src={programmer} /></div>
        
        <div style={styles.content}>
            <div style={styles.title}>About</div>
            <div>
                <p>
                    I live in Nairobi. Work experience is that of a remote developer.
                    I started my software engineer career at Andela. I got to work on Andela Societies.
                    A platform that helped employees keep track of points earned from participation in activites outside Andela such as attending tech events,
                    mentoring, facilitating bootcamps at Andela e.t.c.
                    <a style={styles.link} href='https://societies.andela.com/'>Check out Andela Societies <FontAwesomeIcon icon='arrow-right' style={styles.icon} /></a>
                </p>

                <p>
                    During my time at Andela, I got placed to work with Audacious Futures. I was onboarded as a frontend developer.
                    At Audacious we worked on FutureFitAI. An upskilling platform for anyone intending to improve his/her skill's proficiency in an ever changing job market.
                    <a style={styles.link} href='https://www.loom.com/share/921a8fd973ac40648db0fe45cf432510'>Check out FutureFitAI demo <FontAwesomeIcon icon='arrow-right' style={styles.icon} /></a>
                </p>

                <p>
                    I am currently working at Leantoolkit BV as a frontend developer. I have been an active contributor to their product Leantoolkit.
                    The platform offers conjoint analysis, new product development, product launches and market research services.
                    These are carried out as projects and managed on the platform.
                    <a style={styles.link} href='http://leantoolkit.io/'>Check out Leantoolkit <FontAwesomeIcon icon='arrow-right' style={styles.icon} /></a>
                </p>
            </div>
        </div>
    </section>
);

export default About;
