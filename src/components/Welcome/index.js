import React from 'react';
import styles from './styles';
import ChrisMaina from '../../images/chris_maina.png';

const Welcome = () => (
  <section style={styles.container} id="welcome">
    <div style={styles.content}>
      <div style={styles.title}>Hello <span role='img' aria-label='smile'>👋</span></div>
      <p>I'm Chris Maina. A software engineer with an eye for good designs and excited by great themes that make products pleasing <span role='img' aria-label='smile'>😃</span>.</p>
    </div>
    <div style={styles.imageWrapper}>
      <img style={styles.graphic} alt='chris maina' src={ChrisMaina} />
    </div>
  </section>
);

export default Welcome;
