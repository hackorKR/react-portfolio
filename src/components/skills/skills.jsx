import React from 'react';
import styles from './skills.module.css';

const Skills = (props) => {
  return (
    <div className={styles.container} id='s'>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.content}>
        <h2>Language</h2>
        <span className={styles.icons}>
          <img
            className={styles.icon}
            src={process.env.PUBLIC_URL + '/images/icon_c.png'}
          />
          <img
            className={styles.icon}
            src={process.env.PUBLIC_URL + '/images/icon_cplus.png'}
          />
          <img
            className={styles.icon}
            src={process.env.PUBLIC_URL + '/images/icon_js.png'}
          />
          <img
            className={styles.icon}
            src={process.env.PUBLIC_URL + '/images/icon_python.png'}
          />
          <img
            className={styles.icon}
            src={process.env.PUBLIC_URL + '/images/icon_java.png'}
          />
          <img
            className={styles.icon}
            src={process.env.PUBLIC_URL + '/images/icon_android.png'}
          />
        </span>

        <h2>Web Skills</h2>
        <span className={styles.icons}>
          <img
            className={styles.icon}
            src={process.env.PUBLIC_URL + '/images/icon_html.png'}
          />
          <img
            className={styles.icon}
            src={process.env.PUBLIC_URL + '/images/icon_css.png'}
          />
          <img
            className={styles.icon}
            src={process.env.PUBLIC_URL + '/images/icon_vanilla_js.png'}
          />
        </span>

        <h2>FrameWork</h2>
        <span className={styles.icons}>
          <img
            className={styles.icon}
            src={process.env.PUBLIC_URL + '/images/icon_react.png'}
          />
          <img
            className={styles.icon}
            src={process.env.PUBLIC_URL + '/images/icon_node_js.png'}
          />
        </span>
        <h2>Database</h2>
        <span className={styles.icons}>
          <img
            className={styles.icon}
            src={process.env.PUBLIC_URL + '/images/icon_php.png'}
          />
          <img
            className={styles.icon}
            src={process.env.PUBLIC_URL + '/images/icon_mysql.png'}
          />
          <img
            className={styles.icon}
            src={process.env.PUBLIC_URL + '/images/icon_firebase.png'}
          />
        </span>
      </div>
    </div>
  );
};

export default Skills;
