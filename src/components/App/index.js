import React from 'react';
import styles from './index.css';
import List from '../../containers/List';
import AddNewTask from '../../containers/AddNewTask';

const App = () => (
  <div className={styles.app}>
    <AddNewTask />
    <List />
  </div>
);

export default App;
