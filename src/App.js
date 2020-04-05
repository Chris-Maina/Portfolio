import React from 'react';
import { Navbar, Welcome, About, Technologies, Hobbies, Footer } from './components';

import styles from './styles';

function App() {
  return (
    <div style={styles.container}>
      <Navbar />
      <Welcome id='welcome' />
      <About id='about' />
      <Technologies id='technologies' />
      <Hobbies id='hobbies' />
      <Footer id='footer' />
    </div>
  );
}

export default App;
