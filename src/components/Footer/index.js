import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles';

const Footer = () => (
    <footer id="footer" style={styles.container}>
        <a style={styles.link} href='https://www.instagram.com/kris_maina/' ><FontAwesomeIcon icon={['fab', "instagram"]} style={styles.icon} size="3x" /></a>
        <a style={styles.link} href='https://www.linkedin.com/in/chris-maina/' ><FontAwesomeIcon icon={['fab',"linkedin-in"]} style={styles.icon} size="3x" /></a>
        <a style={styles.link} href='https://codepen.io/Chris-Maina' ><FontAwesomeIcon icon={['fab', "codepen"]} style={styles.icon} size="3x" /></a>
    </footer>
);

export default Footer;
