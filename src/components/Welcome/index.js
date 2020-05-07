import React from 'react';
import styles from './styles';
import ChrisMaina from '../../images/chris_maina.png';

const Welcome = () => (
  <section style={styles.container} className='row' id="welcome">
    <div className='col-md-6 col-sm-12' style={styles.content}>
      <div style={styles.title}>Hello <span role='img' aria-label='smile'>👋</span></div>
      <p>I'm Chris Maina. A software engineer based in Nairobi, Kenya, specializing in building high-quality web applications <span role='img' aria-label='smile'>😃</span>.</p>
    </div>
    <div  className='col-md-6 d-none d-md-block'>
      <img style={styles.graphic} alt='chris maina' src={ChrisMaina} />
    </div>
  </section>
);

export default Welcome;
