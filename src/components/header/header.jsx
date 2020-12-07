import React, { useRef, useState } from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className={styles.nav}>
      <ul className={styles.buttons}>
        <Link className={styles.nav_button} to='/'>
          Home
        </Link>
        <Link className={styles.nav_button} to='/about_me'>
          About
        </Link>
        <Link className={styles.nav_button} to='/skills'>
          Skills
        </Link>
        <Link className={styles.nav_button} to='/project'>
          Project
        </Link>
        <Link className={styles.nav_button} to='/contact'>
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Header;
