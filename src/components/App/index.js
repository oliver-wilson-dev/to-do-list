import React from 'react';
import styles from './index.css';
import Count from '../../containers/Count';
import Button from '../../containers/Button';

const App = () => (
  <div className={styles.app}>
    <Count />
    <Button />
  </div>
);

export default App;
