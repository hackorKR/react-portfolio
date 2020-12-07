import React, { useRef, useState } from 'react';
import styles from './header2.module.css';
import { Link } from 'react-router-dom';

const Header2 = (props) => {
  return (
    <div className={styles.nav}>
      <ul className={styles.buttons}>
        <li
          className={styles.nav_button}
          onClick={() => {
            document.getElementById('m').scrollIntoView();
          }}
        >
          Home
        </li>
        <li
          className={styles.nav_button}
          onClick={() => {
            document.getElementById('a').scrollIntoView();
          }}
        >
          About
        </li>
        <li
          className={styles.nav_button}
          onClick={() => {
            document.getElementById('s').scrollIntoView();
          }}
        >
          Skills
        </li>
        <li
          className={styles.nav_button}
          onClick={() => {
            document.getElementById('p').scrollIntoView();
          }}
        >
          Project
        </li>
        <li
          className={styles.nav_button}
          onClick={() => {
            document.getElementById('c').scrollIntoView();
          }}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Header2;
