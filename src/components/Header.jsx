import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to="/">Home</Link>
      <Link className={styles.link} to="/about">About</Link>
      <Link className={styles.link} to="/contact">Contact</Link>
    </header>
  );
};

export default Header;
