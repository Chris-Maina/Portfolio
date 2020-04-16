import React from 'react';
import styles from './styles';
import ChrisMaina from '../../images/chris_maina.png';

const Welcome = () => (
  <section style={styles.container} className='row' id="welcome">
    <div className='col-md-6 col-sm-12' style={styles.content}>
      <div style={styles.title}>Hello <span role='img' aria-label='smile'>👋</span></div>
      <p>I'm Chris Maina. A software engineer with an eye for good designs and excited by great themes that make products pleasing <span role='img' aria-label='smile'>😃</span>.</p>
    </div>
    <div  className='col-md-6 d-none d-md-block'>
      <img style={styles.graphic} alt='chris maina' src={ChrisMaina} />
    </div>
  </section>
);

export default Welcome;
