import React from 'react';
import styles from './index.css';
import List from '../../containers/List';
import AddNewToDo from '../../containers/AddNewToDo';

const App = () => (
  <div className={styles.app}>
    <AddNewToDo />
    <List />
  </div>
);

export default App;
