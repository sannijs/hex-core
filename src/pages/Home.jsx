import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My Website</h1>
      <p className={styles.text}>
        This is the home page. More pages coming soon!
      </p>
    </div>
  );
};

export default Home;
