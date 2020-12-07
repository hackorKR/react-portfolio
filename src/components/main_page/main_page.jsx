import React, { useEffect, useRef, useState } from 'react';
import styles from './main_page.module.css';
import Typical from 'react-typical';

const MainPage = (props) => {
  return (
    <div className={styles.container} id='m'>
      <h1 className={styles.title}>Hi, I'm Hackor</h1>
      <h1 className={styles.description}>
        <Typical
          steps={[
            "I'm Front End Developer",
            2000,
            "I'm Designer",
            2000,
            "I'm Coder",
            2000,
          ]}
          loop={Infinity}
          wrapper='b'
        />
      </h1>
    </div>
  );
};

export default MainPage;
