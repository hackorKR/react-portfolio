import React from 'react';
import styles from './project.module.css';

const Project = (props) => {
  return (
    <div className={styles.container} id='p'>
      <h1 className={styles.title}>Project</h1>
      <div className={styles.content}>
        <div className={styles.item}>
          <img
            className={styles.img}
            src={process.env.PUBLIC_URL + '/images/project_youtube.png'}
          />
          <div className={styles.info}>
            <h2 className={styles.project_title}>클론 유튜브</h2>
            <h2 className={styles.project_period}>개발기간: 2020~2021</h2>
            <a
              target='_blank'
              href='https://hackorkr.github.io/React-youtube-refactoring/'
              className={styles.project_description}
            >
              https://hackorkr.github.io/React-youtube-refactoring/
            </a>
            <h3 className={styles.project_url}>URL적는곳</h3>
          </div>
        </div>

        <div className={styles.item}>
          <img
            className={styles.img}
            src={process.env.PUBLIC_URL + '/images/icon_vanilla_js.png'}
          />
          <div className={styles.info}>
            <h2 className={styles.project_title}>클론 유튜브</h2>
            <h2 className={styles.project_period}>개발기간: 2020~2021</h2>
            <p className={styles.project_description}>
              React + node js + firebsse 등등 너무 쉽다 고
            </p>
            <h3 className={styles.project_url}>
              https://hackorkr.github.io/React-youtube-refactoring/
            </h3>
          </div>
        </div>

        <div className={styles.item}>
          <img
            className={styles.img}
            src={process.env.PUBLIC_URL + '/images/icon_vanilla_js.png'}
          />
          <div className={styles.info}>
            <h2 className={styles.project_title}>클론 유튜브</h2>
            <h2 className={styles.project_period}>개발기간: 2020~2021</h2>
            <p className={styles.project_description}>
              React + node js + firebsse 등등 너무 쉽다 고
            </p>
            <h3 className={styles.project_url}>URL적는곳</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
