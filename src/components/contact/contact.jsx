import React from 'react';
import styles from './contact.module.css';

const Contact = (props) => {
  return (
    <div className={styles.container} id='c'>
      <h1 className={styles.title}>Contact</h1>
      <h2 className={styles.email}>Email: Hackorkr@gmail.com</h2>
      <a
        className={styles.github}
        href='https://github.com/hackorKR'
        target='_blank'
      >
        <img
          className={styles.icon}
          src={process.env.PUBLIC_URL + '/images/icon_github.png'}
        />
      </a>
    </div>
  );
};

export default Contact;
