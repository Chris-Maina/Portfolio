import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles';
import soccerBall from '../../images/soccerball.jpg';

const Hobbies = () => (
    <section style={styles.container} id="hobbies">
        <div style={styles.imageWrapper}><img style={styles.graphic} alt='soccer ball' src={soccerBall} /></div>
        <div style={styles.content}>
            <div style={styles.title}>Hobbies</div>
            <p>
                I love football. In my spare time you'll find me watching short football videos looking for a new move to try.
                In the English Premier League I support Arsenal and believe that one day we will go back to our glory days.
                I also love fashion and will spend a lot of time checking out how to match outfits.
                In an effort to try make the best of my free time, I will challenge myself. Always trying to improve my problem solving skills.
                Occassionally, I will attempt Leetcode questions or even Codewars questions.
                <a style={styles.link} href='https://github.com/Chris-Maina/Shipify'>Check out Shipify <FontAwesomeIcon icon='arrow-right' style={styles.icon} /></a>
            </p>
        </div>
    </section>
);

export default Hobbies;
