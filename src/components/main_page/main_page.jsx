import React, { useEffect, useRef, useState } from 'react';
import styles from './main_page.module.css';

const MainPage = (props) => {
  const titleRef = useRef();
  const [title, setTitle] = useState('Front_End Developer Hackor');

  useEffect(() => {});

  return (
    <div className={styles.container} id='m'>
      <h1 ref={titleRef} className={styles.title}>
        {title}
      </h1>
    </div>
  );
};

export default MainPage;
