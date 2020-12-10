import React, { useEffect, useRef, useState } from 'react';
import styles from './main_page.module.css';
import Typical from 'react-typical';

const MainPage = (props) => {
  return (
    <div className={styles.container} id='m'>
      <h1 className={styles.title}>Hi! I'm Hackor</h1>
      <h1 className={styles.description}>
        <Typical
          steps={[
            "I'm Software Developer",
            1500,
            "I'm Front End Developer",
            1500,
            "I'm Machine Learning Developer",
            1500,
            'I use Javscript',
            1500,
            'I use Python',
            1500,
          ]}
          loop={Infinity}
          wrapper='b'
        />
      </h1>
    </div>
  );
};

export default MainPage;
